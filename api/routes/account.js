const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const db = require("../database/sqlite");

const tableName = "Users";

//Login
router.post("/login", (req, res) => {
  const user = {
    username: req.body.username,
    password: req.body.password,
  };

  //Generate JWT
  let sql = `SELECT * FROM ${tableName} WHERE username = ? AND password = ?`;
  let params = [req.body.username, req.body.password];
  db.get(sql, params, (err, row) => {
    if (err)
      return res.status(400).json({
        statusCode: 400,
        err: err,
        msg: err.message,
      });

    // const passwordIsValid = bcrypt.compareSync(req.body.password, row.password);
    // if (!passwordIsValid)
    //   return res.status(401).json({
    //     statusCode: 401,
    //     msg: "Unauthorized - Invalid username and password combination.",
    //     data: row,
    //   });

    jwt.sign({ user: user }, process.env.ACCESS_TOKEN_SECRET, (err, token) => {
      return row
        ? res.json({
            statusCode: 200,
            msg: "Succesful login attempt!",
            data: row,
            token: token,
          })
        : res.json({
            statusCode: 404,
            msg: "User could not be found.",
          });
    });
  });
});

//Register
router.post("/register", auth.verifyToken, (req, res) => {
  let errors = [];
  if (!req.body.firstName) {
    errors.push("No firstName was specified.");
  }
  if (!req.body.lastName) {
    errors.push("No lastName was specified.");
  }
  if (!req.body.email) {
    errors.push("No email was specified.");
  }
  if (!req.body.username) {
    errors.push("No username was specified.");
  }
  if (!req.body.password) {
    errors.push("No password was specified.");
  }

  if (errors.length) {
    return res.status(400).json({
      statusCode: 400,
      msg: errors,
    });
  }

  jwt.verify(req.token, process.env.ACCESS_TOKEN_SECRET, (err, authData) => {
    if (err)
      return res.status(403).json({
        statusCode: 403,
        msg: "Forbidden - token is invalid.",
      });

    return;
  });

  db.serialize(function () {
    //Check if user with email or username already exists
    //Can be refactored once I figure out how services work in nodejs
    let getEmailSql = `SELECT email FROM ${tableName} WHERE email = ?`;
    db.get(getEmailSql, req.body.email, (err, row) => {
      if (err)
        return res.status(400).json({
          statusCode: 400,
          msg: err.message,
        });

      if (row != null) {
        return res
          .status(404)
          .json({ msg: `User with email ${req.body.email} already exists.` });
      }
    });

    let getUsernameSql = `SELECT username FROM ${tableName} WHERE username = ?`;
    db.get(getUsernameSql, req.body.username, (err, row) => {
      if (err)
        return res.status(400).json({
          statusCode: 400,
          msg: err.message,
        });

      if (row != null) {
        return res.status(404).json({
          statusCode: 404,
          msg: `User with username ${req.body.username} already exists.`,
        });
      }
    });

    const hashedPassword = bcrypt.hashSync(req.body.password, 8);
    let sql = `INSERT INTO ${tableName} (firstName, lastName, email, username, password) 
      VALUES ($firstName, $lastName, $email, $username, $password)`;
    let params = {
      $firstName: req.body.firstName,
      $lastName: req.body.lastName,
      $email: req.body.email,
      $username: req.body.username,
      $password: hashedPassword,
    };

    //Object.values() passes request body values into an array
    db.run(sql, Object.values(params), (err) => {
      if (err)
        return res.status(400).json({
          statusCode: 400,
          msg: err.message,
        });

      return res.json({
        statusCode: 200,
        msg: "Successfully created a User.",
      });
    });
  });
});

module.exports = router;
