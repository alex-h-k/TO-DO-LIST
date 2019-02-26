const connection = require("./connection");

function getTodos(testDb) {
  const db = testDb || connection;
  return db("todos").select();
}

function createTodos(testDb) {
  const db = testDb || connection;
  return db("todos")
    .insert("todos")
    .then(cats => {
      return db("todos").select();
    });
}

function getTodosByPriority(priority, testDb) {
  const db = testDb || connection;
  return db("todos")
    .where("priority", priority)
    .select();
}

module.exports = {
  getTodos,
  createTodos,
  getTodosByPriority
};
