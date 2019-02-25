exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("todos")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("todos").insert([
        {
          id: 1,
          task: "read a book",
          priority: 3,
          category: "leisure",
          is_completed: "true",
          due_at: "1551064570109"
        },
        {
          id: 2,
          task: "code 2 hours",
          priority: 1,
          category: "work",
          is_completed: "false",
          due_at: "1559705766201"
        },
        {
          id: 3,
          task: "watch a movie",
          priority: 5,
          category: "leisure",
          is_completed: "false",
          due_at: "1551065705179"
        }
      ]);
    });
};
