const express = require("express");
const router = express.Router();
const db = require("../database/sqlite");

const tableName = "KeyboardStatus";

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
      ? res.json(rows)
      : res.json({
          statusCode: 404,
          msg: "No Keyboard Statuses were found.",
          data: rows,
        });
  });
});

module.exports = router;
