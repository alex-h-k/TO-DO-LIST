const connection = require("./connection");

function getTodos(testDb) {
  const db = testDb || connection;
  return db("todos").select();
}

function createTodos(newTodo, testDb) {
  const db = testDb || connection;
  return db("todos")
    .insert(newTodo)
    .then(todos => {
      return db("todos").select();
    });
}

function getTodosByPriority(priority, testDb) {
  const db = testDb || connection;
  return db("todos")
    .where("priority", priority)
    .select();
}

function delTodosById(id, testDb) {
  const db = testDb || connection;
  return db("todos")
    .where("id", id)
    .del()
    .then(data => {
      return getTodos();
    });
}

function editTodosById(id, updatedTodo, testDb) {
  const db = testDb || connection;
  return db("todos")
    .where("id", id)
    .update(updatedTodo)
    .then(todos => {
      return db("todos").select();
    });
}
module.exports = {
  getTodos,
  createTodos,
  getTodosByPriority,
  delTodosById,
  editTodosById
};
