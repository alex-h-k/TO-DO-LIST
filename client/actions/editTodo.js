import axios from "axios";

export function editTodoAction(
  id,
  task,
  priority,
  category,
  is_completed,
  due_at
) {
  const updatedTodo = {
    task,
    priority,
    category,
    is_completed,
    due_at
  };
  return function(dispatch) {
    axios.post(`/api/v1/todos/edit/${id}`, updatedTodo).then(response => {
      dispatch(saveTodos(response.data));
    });
  };
}

function saveTodos(todos) {
  return {
    type: "SAVE_TODOS",
    todos
  };
}
