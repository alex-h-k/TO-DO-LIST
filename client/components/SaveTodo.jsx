import React, { Component } from "react";
import { connect } from "react-redux";
import { saveTodoAction } from "../actions/saveTodo";

class SaveTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      priority: null,
      category: "",
      is_completed: false,
      due_at: null,
      err: false
    };
  }

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
        due_at: null
      });
    }
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <h2>Save TODO</h2>
        {this.state.error && (
          <p style={{ color: "red" }}>please fill out all details</p>
        )}
        <input
          name="task"
          onChange={this.handleChange}
          type="text"
          placeholder="task"
        />
        <input
          name="priority"
          onChange={this.handleChange}
          type="number"
          min="1"
          max="5"
        />
        <input
          name="category"
          onChange={this.handleChange}
          type="text"
          placeholder="category"
        />
        <input
          name="due_at"
          onChange={this.handleChange}
          type="datetime-local"
        />

        <button onClick={this.save}>Save</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

const mapDispatchToProps = dispatch => {
  return {
    saveTodo: (task, priority, category, is_completed, due_at) =>
      dispatch(saveTodoAction(task, priority, category, is_completed, due_at))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SaveTodo);
