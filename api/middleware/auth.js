const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();

exports.verifyToken = function (req, res, next) {
  //Get auth header value
  const bearerHeader = req.headers["Authorization"];
  if (typeof bearerHeader != "undefined") {
    //Turn bearerHeader into array and get the token
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    jwt.verify(bearerToken, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err)
        return res.status(400).send({
          statusCode: 400,
          msg: "Could not verify token.",
        });
    });
    next();
  } else {
    return res.status(403).json({
      statusCode: 403,
      msg: "Forbidden - token is invalid.",
    });
  }
};

exports.refreshToken = function (req, res) {};
