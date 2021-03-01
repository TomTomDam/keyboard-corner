const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();

exports.verifyToken = function (req, res, next) {
  //Get token from httpOnly cookie
  const token = req.cookies.token || "";
  if (token) {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
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

exports.refreshToken = function (req, res, next) {};
