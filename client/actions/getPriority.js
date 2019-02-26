import axios from "axios";

export function getPriorityAction(priority) {
  return function(dispatch) {
    axios.get(`/api/v1/todos/${priority}`).then(result => {
      dispatch(saveTodos(result.data));
    });
  };
}

function saveTodos(todos) {
  return {
    type: "SAVE_TODOS",
    todos
  };
}
