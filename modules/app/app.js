const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use("/people", require("../people/people.router"));
app.use("/pets", require("../pets/pets.router"));

app.get("/", (req, res) => {
  res.send("YOUR TESTS ARE SETUP");
});
module.exports = app;
