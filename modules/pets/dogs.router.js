const express = require("express");
const json = require("body-parser").json();

const Dogs = require("./dogs.service");

const router = express.Router();

router.get("/", (req, res) => {
  // Return all pets currently up for adoption.
  let nextDog = Dogs.get();
  return res.status(200).json(nextDog);
});

router.delete("/", (req, res) => {
  // Remove a pet from adoption.
  Dogs.dequeue();
  return res.status(204).end();
});

module.exports = router;
