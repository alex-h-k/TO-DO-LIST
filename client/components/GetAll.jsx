import React from "react";
import { connect } from "react-redux";

import { getTodosAction } from "../actions/getTodos";
import { delTodoAction } from "../actions/delTodo";
import SaveTodo from "./SaveTodo";

class GetAll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
    this.getTodos = this.getTodos.bind(this);
  }
  componentDidMount() {
    return this.props.getTodos();
  }

  getTodos() {
    return this.props.getTodos();
  }

  delTodo = id => {
    return this.props.delTodo(id);
  };

  handleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  };

  handleCancleModal = () => {
    this.setState({
      showModal: false
    });
  };

  render() {
    let { todos } = this.props;
    return (
      <div>
        <section className="hero is-medium is-dark is-bold">
          <div className="hero-body">
            <div className="container">
              <h1 className="title todo-title is-1">
                TODO LIST
                <a
                  className="button is-hovered normal is-rounded "
                  id="add-one"
                  onClick={this.handleModal}
                >
                  <i class="fas fa-plus " />
                  Add One
                </a>
                {this.state.showModal && (
                  <div class="modal is-active">
                    <div class="modal-background" />
                    <div class="modal-card">
                      <header class="modal-card-head">
                        <p class="modal-card-title">Modal title</p>
                        <button
                          class="delete"
                          onClick={this.handleCancleModal}
                          aria-label="close"
                        />
                      </header>
                      <section class="modal-card-body">
                        <SaveTodo />
                      </section>
                      <footer class="modal-card-foot">
                        <button class="button is-success">Save changes</button>
                        <button onClick={this.handleCancleModal} class="button">
                          Cancel
                        </button>
                      </footer>
                    </div>
                  </div>
                )}
              </h1>
            </div>
          </div>
        </section>

        {todos.map(todo => (
          <section className="hero is-light">
            <div className="hero-body">
              <div className="columns tasks">
                <h1 className="title column is-one-quarter">{todo.task}</h1>
                <h2 className="column is-one-quarter tag is-warning is-medium">
                  Category:{todo.category}
                </h2>
                <h2 className="column is-one-quarter tag is-warning is-medium">
                  Priority:{todo.priority}
                </h2>
                <div className="column is-one-quarter">
                  <a className="button is-info is-medium is-rounded todo-button">
                    <i className="fas fa-edit" />
                  </a>
                  <a
                    className="button is-danger is-medium is-rounded todo-button"
                    onClick={e => {
                      window.confirm(
                        "Are you sure you wish to delete this todo?"
                      ) && this.delTodo(todo.id);
                    }}
                  >
                    <i className="fas fa-trash-alt" />
                  </a>
                </div>
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
  return {
    getTodos: () => dispatch(getTodosAction()),
    delTodo: id => dispatch(delTodoAction(id))
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GetAll);
