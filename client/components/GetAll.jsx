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
        <section className="hero is-medium is-dark is-bold">
          <div className="hero-body">
            <div className="container">
              <h1 className="title todo-title is-1">TODO LIST</h1>
            </div>
          </div>
        </section>

        {todos.map(todo => (
          <section className="hero is-light">
            <div className="hero-body">
              <div className="container">
                <h1 className="title">{todo.task}</h1>
                <h2 className="subtitle">
                  Category:{todo.category}, Priority:{todo.priority}{" "}
                </h2>
                <a class="button is-info">Edit</a>
                <a class="button is-danger">Danger</a>
              </div>
            </div>
          </section>
          // <li key={todo.id}>
          //   {todo.category}--{todo.task}--{todo.priority}--{todo.due_at}
          // </li>
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
