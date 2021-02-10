const express = require("express");
const router = express.Router();
const logger = require("./middleware/logger");

const app = express();

//Middleware
//app.use(logger);
//Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Home
app.get("/", (req, res) => {
  res.send("KeyboardCorner API");
});

//User Route
app.use("/api/users", require("./routes/api/users"));

const port = process.env.port || 3000;
app.listen(port);
