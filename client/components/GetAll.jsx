import React from "react";
import { connect } from "react-redux";

import { getTodosAction } from "../actions/getTodos";
import { delTodoAction } from "../actions/delTodo";
import { saveTodoAction } from "../actions/saveTodo";

class GetAll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      priority: null,
      category: "",
      is_completed: false,
      due_at: null,
      err: false,
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

  save = () => {
    const { task, priority, category, is_completed, due_at } = this.state;
    if (this.state.task === "") {
      this.setState({
        error: true
      });
    } else if (this.state.priority === null) {
      this.setState({
        error: true
      });
    } else if (this.state.category === "") {
      this.setState({
        error: true
      });
    } else if (this.state.due_at === null) {
      this.setState({
        error: true
      });
    } else {
      this.setState({ error: false });
      this.props.saveTodo(task, priority, category, is_completed, due_at);
      this.setState({
        task: "",
        priority: null,
        category: "",
        is_completed: false,
        due_at: null,
        showModal: false
      });
    }
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log("input", this.state);
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
                        <div>
                          <h2>Save TODO</h2>
                          {this.state.error && (
                            <p style={{ color: "red" }}>
                              please fill out all details
                            </p>
                          )}
                          <input
                            name="task"
                            onChange={this.handleChange}
                            type="text"
                            placeholder="task"
                            value={this.state.task}
                          />
                          <input
                            name="priority"
                            onChange={this.handleChange}
                            type="number"
                            min="1"
                            max="5"
                            value={this.state.priority}
                          />
                          <input
                            name="category"
                            onChange={this.handleChange}
                            type="text"
                            placeholder="category"
                            value={this.state.category}
                          />
                          <input
                            name="due_at"
                            onChange={this.handleChange}
                            type="datetime-local"
                            value={this.state.due_at}
                          />
                        </div>
                      </section>
                      <footer class="modal-card-foot">
                        <button onClick={this.save} class="button is-success">
                          Save changes
                        </button>
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
    delTodo: id => dispatch(delTodoAction(id)),
    saveTodo: (task, priority, category, is_completed, due_at) =>
      dispatch(saveTodoAction(task, priority, category, is_completed, due_at))
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GetAll);
