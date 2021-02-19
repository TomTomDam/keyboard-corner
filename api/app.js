const express = require("express");
const router = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config({
  path: __dirname + "/config/.env",
});

const app = express();

//Middleware
//app.use(logger);
//Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//Enable CORS
app.use(cors());

//Home
app.get("/", (req, res) => {
  res.send("KeyboardCorner API");
});

//User Route
app.use("/api/users", require("./routes/users"));
//Account Route
app.use("/api/account", require("./routes/account"));

const port = process.env.port || 3000;
app.listen(port);
