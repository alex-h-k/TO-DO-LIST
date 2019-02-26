import axios from "axios";
export function getTodosAction() {
  return function(dispatch) {
    axios.get("/api/v1/todos").then(result => {
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
