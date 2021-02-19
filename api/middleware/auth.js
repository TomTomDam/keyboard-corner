const jwt = require("jsonwebtoken");

exports.verifyToken = function (req, res, next) {
  //Get auth header value
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader != "undefined") {
    //Turn bearerHeader into array and get the token
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    return res.status(403).json({
      statusCode: 403,
      msg: "Forbidden - token is invalid.",
    });
  }
};

exports.refreshToken = function (req, res) {
  
};
