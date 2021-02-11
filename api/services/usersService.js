const express = require("express");
const db = require("../database/sqlite");

function getAll() {
  let sql = "SELECT * FROM Users";

  db.all(sql, [], (err, rows) => {
    if (err)
      return {
        success: false,
        error: err,
      };
      
    return {
      success: true,
      data: rows
    }
  });

  return {
    success: false
  };
}

function getByID(id) {
  let sql = "SELECT * FROM Users WHERE id = ?";
  let params = id;
  db.run(sql, params, (err, row) => {
    if (err)
      return {
        success: false,
        data: [],
        error: err,
      };

    return {
      success: true,
      data: row,
      msg: "Successfully performed /user/getByID."
    };
  });

  return {
    success: false,
    data: [],
    msg: "Could not perform /user/getByID.",
  };
}

function createUser(user) {
  let errors = [];
  if (!user.firstName) {
    errors.push("No firstName was specified.");
  }
  if (!user.lastName) {
    errors.push("No lastName was specified.");
  }
  if (!user.firstName) {
    errors.push("No email was specified.");
  }
  if (!user.username) {
    errors.push("No username was specified.");
  }
  if (!user.password) {
    errors.push("No password was specified.");
  }
  if (errors.length) {
    return {
      success: false,
      data: [],
      msg: errors,
    };
  }

  let sql = "INSERT INTO User (firstName, lastName, email, username, password) VALUES (?,?,?,?,?)";
  let params = user;
  db.run(sql, params, (err, result) => {
    if (err)
      return {
        success: false,
        data: [],
        msg: err,
      };

    return {
      success: true,
      data: result,
      msg: "Successfully performed /user/createUser."
    };
  });

  return {
    success: false,
    data: [],
    msg: "Could not perform /user/createUser.",
  };
}

function updateUser() {
  return "Hello";
}

function deleteUser() {
  return "Hello";
}

module.exports = { getAll, getByID, createUser, updateUser, deleteUser };
