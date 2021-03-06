const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../database/sqlite");

const tableName = "Users";

//TESTING
// router.post("/testing", async (req, res) => {
//   let sql = `SELECT * FROM ${tableName} WHERE username = ?`;
//   let params = [req.body.username];
//   db.get(sql, params, (err, row) => {
//     if (err)
//       return res.status(400).json({
//         statusCode: 400,
//         err: err,
//         msg: err.message,
//       });

//     const passwordIsValid = await bcrypt.compare(req.body.password, row.password);
//     if (!passwordIsValid)
//       return res.status(401).json({
//         statusCode: 401,
//         msg: "Unauthorized - Invalid username and password combination.",
//       });
//     });

//   return res.status(200).json({
//     statusCode: 200,
//     msg: "Testing successful!",
//   });
// });

//TESTING
router.post("/testing", async (req, res) => {
  const result = async () => {
    res.send("Hello");
  };

  await result();

  return await result();
});

//Login
router.post("/login", (req, res) => {
  const user = {
    username: req.body.username,
    password: req.body.password,
  };

  //TESTING
  console.log(user);

  if (!req.body.username || !req.body.password === "") {
    return res.status(400).json({
      statusCode: 400,
      msg: "Username or password was not provided.",
    });
  }

  let sql = `SELECT * FROM ${tableName} WHERE username = ?`;
  let params = [req.body.username];
  db.get(sql, params, (err, row) => {
    if (err)
      return res.status(400).json({
        statusCode: 400,
        err: err,
        msg: err.message,
      });

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

    //Generate JWT
    //Assign access token and refresh token to a httpOnly cookie
    //Set access token to last for 15 minutes
    jwt.sign(
      { user: user },
      process.env.ACCESS_TOKEN_SECRET,
      (err, accessToken) => {
        res.cookie("accessToken", accessToken, {
          httpOnly: true,
          maxAge: process.env.ACCESS_TOKEN_LIFE,
        });

        //Set refresh token to last for 1 day
        jwt.sign(
          { user: user },
          process.env.REFRESH_TOKEN_SECRET,
          (err, refreshToken) => {
            res.cookie("refreshToken", refreshToken, {
              httpOnly: true,
              maxAge: process.env.REFRESH_TOKEN_LIFE,
            });

            return row
              ? res.json({
                  statusCode: 200,
                  msg: "Succesful login attempt!",
                  data: row,
                })
              : res.json({
                  statusCode: 404,
                  msg:
                    "User could not be found. Please try a different username and/or password.",
                });
          }
        );
      }
    );
  });
});

//Logout
router.post("/logout", (req, res) => {
  let sql = `SELECT * FROM ${tableName} WHERE username = ?`;
  let params = [req.body.username];
  db.get(sql, params, (err, row) => {
    if (err)
      return res.status(400).json({
        statusCode: 400,
        err: err,
        msg: err.message,
      });

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

    return res
      .status(200)
      .clearCookie("token", "", {
        expires: new Date(0),
        domain: "localhost",
        path: "/",
      })
      .json({
        statusCode: 200,
        msg: "Successfully logged out User.",
      });
  });
});

//Register
router.post("/register", (req, res) => {
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

    const salt = bcrypt.genSaltSync(8);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);
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

      //Generate token
      jwt.sign(
        { user: params },
        process.env.ACCESS_TOKEN_SECRET,
        (err, authData) => {
          return res.json({
            statusCode: 200,
            msg: "Successfully created a User.",
            authData: authData,
          });
        }
      );
    });
  });
});

module.exports = router;
