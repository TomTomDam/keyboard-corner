const express = require("express");
const router = express.Router();
const db = require("../database/sqlite");

const tableName = "Users";

//Get all Users
router.get("/", (req, res) => {
  let sql = `SELECT * FROM ${tableName}`;

  db.all(sql, [], (err, rows) => {
    if (err) {
      return res.status(400).json({
        statusCode: 400,
        msg: err,
      });
    }

    return rows
      ? res.json({
          statusCode: 200,
          msg: "Successfully retrieved a list of Users.",
          data: rows,
        })
      : res.json({
          statusCode: 404,
          msg: `No Users were found.`,
          data: rows,
        });
  });
});

//Get User by id
router.get("/:id", (req, res) => {
  let sql = `SELECT * FROM ${tableName} WHERE id = ?`;
  let id = req.params.id;

  db.get(sql, id, (err, row) => {
    if (err)
      return res.status(400).json({
        statusCode: 400,
        msg: err,
      });

    return row
      ? res.json({
          statusCode: 200,
          msg: "Successfully retrieved a User.",
          data: {
            id: row.id,
            firstName: row.firstName,
            lastName: row.lastName,
            username: row.username,
            email: row.email
          },
        })
      : res.json({
          statusCode: 404,
          msg: `No User found with the id: ${id}.`,
        });
  });
});

//Create User
router.post("/", (req, res) => {
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

    let sql = `INSERT INTO ${tableName} (firstName, lastName, email, username, password) 
    VALUES ($firstName, $lastName, $email, $username, $password)`;
    let params = {
      $firstName: req.body.firstName,
      $lastName: req.body.lastName,
      $email: req.body.email,
      $username: req.body.username,
      $password: req.body.password,
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

//Update User
router.put("/:id", (req, res) => {
  let sql = `UPDATE ${tableName} 
  SET firstName = $firstName, lastName = $lastName, email = $email, username = $username, password = $password
  WHERE id = $id`;
  let data = {
    $id: req.params.id,
    $firstName: req.body.firstName,
    $lastName: req.body.lastName,
    $email: req.body.email,
    $username: req.body.username,
    $password: req.body.password,
  };

  //Object.values() passes request body values into an array
  db.run(sql, Object.values(data), function (err) {
    if (err)
      return res.status(400).json({
        statusCode: 400,
        msg: err.message,
      });

    return res.json({
      statusCode: 200,
      msg: `Successfully updated User. No. of rows updated: ${this.changes}`,
    });
  });
});

// Delete User
router.delete("/:id", (req, res) => {
  let id = req.params.id;
  let getByIdSql = `SELECT * FROM ${tableName} WHERE id = ?`;

  //Check if user exists first.
  //Can be refactored once I figure out how services work in nodejs
  db.get(getByIdSql, id, (err, row) => {
    if (err)
      return res.status(400).json({
        statusCode: 400,
        msg: err,
      });

    if (row != null) {
      let deleteSql = `DELETE FROM ${tableName} WHERE id = ?`;

      db.run(deleteSql, id, (err) => {
        if (err)
          return res.status(400).json({
            statusCode: 400,
            msg: err.message,
          });

        return res.json({
          statusCode: 200,
          msg: "Successfully deleted User.",
        });
      });
    } else {
      res.json({
        statusCode: 404,
        msg: `No User found with the id: ${req.params.id}.`,
      });
    }
  });
});

module.exports = router;
