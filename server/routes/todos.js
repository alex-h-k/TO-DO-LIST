const express = require("express");
const router = express.Router();
const {
  getTodos,
  createTodos,
  getTodosByPriority,
  delTodosById,
  editTodosById
} = require("../db/todo");

//Get /api/v1/todos
router.get("/", (req, res) => {
  getTodos()
    .then(todos => res.json(todos))
    .catch(err => {
      console.log(err);
      res.setStatus(500).json({ err: "Something went wrong" });
    });
});

//Post /api/v1/todos/save
router.post("/save", (req, res) => {
  createTodos(req.body).then(todos => res.json(todos));
});

//Post /api/v1/todos/edit/:id
router.post("/edit/:id", (req, res) => {
  let id = req.params.id;
  editTodosById(id, req.body).then(todos => res.json(todos));
});

// Get /api/v1/todos/:priority
router.get("/:priority", (req, res) => {
  getTodosByPriority(req.params.priority).then(todos => {
    res.json(todos);
  });
});

// Del /api/v1/todos/del/:id
router.delete("/del/:id", (req, res) => {
  delTodosById(req.params.id).then(todos => {
    res.json(todos);
  });
});

module.exports = router;
