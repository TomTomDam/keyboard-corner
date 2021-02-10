const express = require("express");
const router = express.Router();
const users = require("../../users");

const idFilter = (req) => (user) => user.id === parseInt(req.params.id);

//Get all Users
router.get("/", (req, res) => res.json(users));

//Get User by id
router.get("/:id", (req, res) => {
  const found = users.some(idFilter(req));

  if (found) {
    res.json(users.filter(idFilter(req)));
  } else {
    res
      .status(400)
      .json({ msg: `No user found with the id of ${req.params.id}.` });
  }
});

//Create User
router.post("/", (req, res) => {
  const newUser = {
    ...req.body,
    id: 3, //Change this when database is implemented
  };

  if (!newUser.name || !newUser.password) {
    res.status(400).json({ msg: "Please enter a name and password." });
  }

  users.push(newUser);
  res.json(users);
});

//Update User
router.put("/:id", (req, res) => {
  const found = users.some(idFilter(req));

  if (found) {
    users.forEach((user, i) => {
      if (idFilter(req)(user)) {
        const updUser = { ...user, ...req.body };
        users[i] = updUser;
        res.json({ msg: "User updated", updUser });
      }
    });
  } else {
    res.status(400).json({ msg: `No User with the id of ${req.params.id}` });
  }
});

// Delete User
router.delete("/:id", (req, res) => {
  const found = users.some(idFilter(req));

  if (found) {
    res.json({
      msg: "User deleted",
      users: users.filter((user) => !idFilter(req)(user)),
    });
  } else {
    res.status(400).json({ msg: `No User with the id of ${req.params.id}` });
  }
});

module.exports = router;
