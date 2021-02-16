const jwt = require("jsonwebtoken");

exports.verifyToken = function (req, res, next) {
  let accessToken = req.cookies.jwt;

  //If there is no token stored in cookies, the request is unauthorized
  if (!accessToken) {
    return res.status(401).json({
      statusCode: 401,
      msg: "Unauthorized - No token stored in cookies.",
    });
  }

  let payload;
  try {
    payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
    next();
  } catch (e) {
    return res.status(401).json({
      statusCode: 401,
      msg: "Unauthorized - Invalid access token.",
    });
  }
};

exports.refreshToken = function (req, res) {
  let accessToken = req.cookies.jwt;
  if (!accessToken) {
    return res.status(403).json({
      statusCode: 403,
      msg: "Forbidden - No token stored in cookies.",
    });

    let payload;
    try {
      payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
    } catch (e) {
      return res.status(401).send();
    }

    let refreshToken = users[payload.username].refreshToken;
    //Verify the refresh token
    try {
      jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    } catch (e) {
      return res.status(401).json({
        statusCode: 401,
        msg: "Unauthorized - Invalid access token.",
      });
    }

    let newToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
      algorithm: "HS256",
      expiresIn: process.env.ACCESS_TOKEN_LIFE,
    });

    res.cookie("jwt", newToken, { secure: true, httpOnly: true });
    res.send();
  }
};
