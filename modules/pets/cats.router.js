const express = require("express");
const json = require("body-parser").json();

const Cats = require("./cats.service");

const router = express.Router();

router.get("/", (req, res) => {
  // Return all pets currently up for adoption.
  let nextCat = Cats.get();
  return res.status(200).json(nextCat);
});

router.delete("/", (req, res) => {
  // Remove a pet from adoption.
  Cats.dequeue();
  return res.status(204).end();
});

module.exports = router;
