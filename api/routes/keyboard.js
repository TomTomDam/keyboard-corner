const express = require("express");
const router = express.Router();
const db = require("../database/sqlite");

const tableName = "Keyboard";

//Get all Keyboards
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
          msg: "No Keyboards were found.",
          data: rows,
        });
  });
});

//Get Keyboard by Id
router.get("/:id", (req, res) => {
  let sql = `SELECT * FROM ${tableName} WHERE Id = ?`;
  let id = req.params.id;

  db.get(sql, id, (err, row) => {
    if (err)
      return res.status(400).json({
        statusCode: 400,
        msg: err,
      });

    return row
      ? res.json({
          id: row.Id,
          title: row.Title,
          image: row.Image,
          switches: row.Switches,
          switchModifications: row.SwitchModifications,
          plate: row.Plate,
          keycaps: row.Keycaps,
          designer: row.Designer,
          case: row.Case,
          modifications: row.Modifications,
          layout: row.Layout,
          stabilizers: row.Stabilizers,
          description: row.Description
        })
      : res.json({
          statusCode: 404,
          msg: "No Keyboard found with the Id: ${id}.",
        });
  });
});

//Create Keyboard
router.post("/", (req, res) => {
  db.serialize(function () {
    let sql = `INSERT INTO ${tableName} (
      title, 
      image, 
      switches, 
      switchModifications, 
      plate, 
      keycaps,
      designer, 
      [case], 
      modifications, 
      layout, 
      stabilizers, 
      description
    ) 
    VALUES (
      $title, 
      $image, 
      $switches, 
      $switchModifications,
      $plate, 
      $keycaps, 
      $designer, 
      $case, 
      $modifications, 
      $layout, 
      $stabilizers, 
      $description
    )`;
    let params = {
      $title: req.body.title,
      $image: req.body.image,
      $switches: req.body.switches,
      $switchModifications: req.body.switchModifications,
      $plate: req.body.plate,
      $keycaps: req.body.keycaps,
      $designer: req.body.designer,
      $case: req.body.case,
      $modifications: req.body.modifications,
      $layout: req.body.layout,
      $stabilizers: req.body.stabilizers,
      $description: req.body.description,
    };

    //Object.values() passes request body values into an array
    db.run(sql, Object.values(params), (err) => {
      if (err) {
        console.log(err);

        return res.status(400).json({
          statusCode: 400,
          msg: err.message,
        });
      }

      return res.json({
        statusCode: 200,
        msg: "Successfully created a Keyboard.",
      });
    });
  });
});

//Update Keyboard
router.post("/:id", (req, res) => {
  console.log("helo there");

  let sql = `UPDATE ${tableName} 
  SET column = $column,
  WHERE id = $id`;
  let data = {
    $id: req.params.id,
    $title: req.body.title,
    $image: req.body.image,
    $switches: req.body.switches,
    $switchModifications: req.body.switchModifications,
    $plate: req.body.plate,
    $keycaps: req.body.keycaps,
    $designer: req.body.designer,
    $case: req.body.case,
    $modifications: req.body.modifications,
    $layout: req.body.layout,
    $stabilizers: req.body.stabilizers,
    $description: req.body.description,
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
      msg: `Successfully updated Keyboard. No. of rows updated: ${this.changes}`,
    });
  });
});

// Delete Keyboard
router.delete("/:id", (req, res) => {
  let id = req.params.id;
  let getByIdSql = `SELECT * FROM ${tableName} WHERE Id = ?`;

  //Check if it exists first.
  //Can be refactored once I figure out how services work in nodejs
  db.get(getByIdSql, id, (err, row) => {
    if (err)
      return res.status(400).json({
        statusCode: 400,
        msg: err,
      });

    if (row != null) {
      let deleteSql = `DELETE FROM ${tableName} WHERE Id = ?`;

      db.run(deleteSql, id, (err) => {
        if (err)
          return res.status(400).json({
            statusCode: 400,
            msg: err.message,
          });

        return res.json({
          statusCode: 200,
          msg: "Successfully deleted Keyboard.",
        });
      });
    } else {
      res.json({
        statusCode: 404,
        msg: `No Keyboard found with the id: ${req.params.id}.`,
      });
    }
  });
});

module.exports = router;
