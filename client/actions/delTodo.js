import axios from "axios";

export function delTodoAction(id) {
  return function(dispatch) {
    axios.delete(`/api/v1/todos/del/${id}`).then(result => {
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
