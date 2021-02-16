const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const { verifyToken } = require("./middleware/auth");
require("dotenv").config();
const app = express();

//Middleware
//app.use(logger);
//Body Parser
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Home
app.get("/", (req, res) => {
  res.send("KeyboardCorner API");
});

//User Route
app.use("/api/users", require("./routes/users"));
//Account Route
app.use("/api/account", verifyToken, require("./routes/account"));

const port = process.env.port || 3000;
app.listen(port);
