import axios from "axios";

export function saveTodoAction(task, priority, category, is_completed, due_at) {
  const data = {
    task,
    priority,
    category,
    is_completed,
    due_at
  };
  return function(dispatch) {
    axios.post(`/api/v1/todos/save`, data).then(response => {
      {
        dispatch(saveTodos(response.data));
      }
    });
  };
}

function saveTodos(todos) {
  return {
    type: "SAVE_TODOS",
    todos
  };
}
