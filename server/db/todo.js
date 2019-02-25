const connection = require("./connection");

function getTodos(testDb) {
  const db = testDb || connection;
  return db("todos").select();
}

module.exports = {
  getTodos
};
