const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use("/people", require("../people/people.router"));
app.use("/pets", require("../pets/pets.router"));

// General Test Endpoint, Do not try to get anything from this.
app.get("/", (req, res) => {
  res.status(200).send("YOUR TESTS ARE SETUP");
});
module.exports = app;
