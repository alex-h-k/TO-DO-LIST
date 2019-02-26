import React from "react";
import { connect } from "react-redux";

import { getTodosAction } from "../actions";
class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(getTodosAction());
  }
  render() {
    let { todos } = this.props;
    console.log(todos);
    return (
      <div>
        <h1>I love to code!</h1>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.category}-{todo.task}-{todo.priority}
          </li>
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { todos: state.todos };
}
export default connect(mapStateToProps)(App);
