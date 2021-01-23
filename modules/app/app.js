const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(morgan("common"));
app.use(cors());

app.use("/people", require("../people/people.router"));
app.use("/cats", require("../pets/cats.router"));
app.use("/dogs", require("../pets/dogs.router"));

// General Test Endpoint, Do not try to get anything from this.
app.get("/", (req, res) => {
  res.status(200).send("YOUR TESTS ARE SETUP");
});
module.exports = app;
