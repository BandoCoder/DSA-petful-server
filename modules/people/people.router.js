const express = require("express");
const json = require("body-parser").json();

const People = require("./people.service");

const router = express.Router();

router.get("/", (req, res) => {
  // Return all the people currently in the queue.
  return res.status(200).json(People.get());
});

router.post("/", json, (req, res) => {
  // Add a new person to the queue.
  People.enqueue(req.body.name);
  return res.status(201).end();
});

router.delete("/", (req, res) => {
  People.dequeue();
  return res.status(204).end();
});

module.exports = router;
