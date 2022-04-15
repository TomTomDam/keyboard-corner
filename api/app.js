const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config({
  path: __dirname + "/config/.env",
});
const cookieParser = require("cookie-parser");
const auth = require("./middleware/auth");

const app = express();

//Middleware
//Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//Enable CORS
app.use(cors());
//Cookie Parser
app.use(cookieParser());

//Home
app.get("/", (req, res) => {
  res.send("KeyboardCorner API");
});

//User Route
app.use("/api/users", require("./routes/users"));
//Account Route
app.use("/api/account", require("./routes/account"));
//Auth Route
app.use("/api/auth", require("./routes/auth"));
//Keyboard Route
app.use("/api/keyboard", require("./routes/keyboard"));
//KeyboardStatus Route
app.use("/api/keyboardStatus", require("./routes/keyboardStatus"));

const port = process.env.port || 3000;
app.listen(port);
