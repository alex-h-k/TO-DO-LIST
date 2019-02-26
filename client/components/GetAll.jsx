import React from "react";
import { connect } from "react-redux";

import { getTodosAction } from "../actions/getTodos";
class GetAll extends React.Component {
  constructor(props) {
    super(props);
    this.getTodos = this.getTodos.bind(this);
  }
  componentDidMount() {
    return this.props.getTodos();
  }

  getTodos() {
    return this.props.getTodos();
  }
  render() {
    let { todos } = this.props;
    return (
      <div>
        <h1>TODO--LIST</h1>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.category}-{todo.task}-{todo.priority}
          </li>
        ))}
        <button onClick={this.getTodos}>Show All</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { todos: state.todos };
}

function mapDispatchToProps(dispatch) {
  return { getTodos: () => dispatch(getTodosAction()) };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GetAll);
