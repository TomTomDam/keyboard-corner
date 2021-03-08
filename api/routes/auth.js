const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const db = require("../database/sqlite");

//Refresh access token
router.post("/refresh-token", (req, res) => {
    const user = {
      username: req.body.username,
      password: req.body.password,
    };

  let sql = `SELECT * FROM ${tableName} WHERE username = ?`;
  db.get(sql, params, (err, row) => {
    if (err) {
      return res.status(400).json({
        statusCode: 400,
        err: err,
        msg: err.message,
      });
    }

    try {
      const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        row.password
      );
      if (!passwordIsValid) {
        throw new Error();
      }
    } catch (err) {
      if (err)
        return res.status(401).json({
          statusCode: 401,
          msg: "Unauthorized - Invalid username and password combination.",
        });
    }

    const token = req.cookies.token || "";
    if (!token) {
      jwt.sign({ user: user }, process.env.ACCESS_TOKEN_SECRET, (err, accessToken) => {
        res.cookie("refreshToken", refreshToken, {
          httpOnly: true,
          maxAge: process.env.REFRESH_TOKEN_LIFE,
        });
        
        return res.status(200).json({
          statusCode: 200,
          msg: "Successfully refreshed access token!",
        });
      });
    } else {
      return res.status(403).json({
        statusCode: 403,
        msg: "Forbidden - token already exists.",
      });
    }
  });
});

//Verify access token
router.post("/verify-token", (req, res) => {
  //Get access token from httpOnly cookie
  const token = req.cookies.token || "";
  if (token) {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err)
        return res.status(400).send({
          statusCode: 400,
          msg: "Could not verify token. Please check that the token string is not malformed.",
        });
    
        return res.status(200).json({
            statusCode: 200,
            msg: "Token verified successfully!",
        });
    });
  } else {
    return res.status(403).json({
      statusCode: 403,
      msg: "Forbidden - token is invalid.",
    });
  }
});

module.exports = router;