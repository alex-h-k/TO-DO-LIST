const express = require("express");
const router = express.Router();
const { getTodos } = require("../db/todo");

//Get /api/v1/todos
router.get("/", (req, res) => {
  getTodos()
    .then(todos => res.json(todos))
    .catch(err => {
      console.log(err);
      res.setStatus(500).json({ err: "Something went wrong" });
    });
});

//Post /api/v1/todos
router.post("/save", (req, res) => {
  res.send("ok");
});

//Get /api/v1/todos/priority
router.get("/priority"),
  (req, res) => {
    res.send("priority route");
  };
module.exports = router;
