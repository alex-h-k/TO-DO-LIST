import React, { Component } from "react";
import { connect } from "react-redux";
import { editTodoAction } from "../actions/editTodo";

class EditTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: this.props.task,
      priority: this.props.priority,
      category: this.props.category,
      is_completed: this.props.is_completed,
      due_at: this.props.due_at,
      err: this.props.err
    };
  }

  edit = () => {
    const { task, priority, category, is_completed, due_at } = this.state;
    if (task === "") {
      this.setState({
        error: true
      });
    } else if (priority === null) {
      this.setState({
        error: true
      });
    } else if (category === "") {
      this.setState({
        error: true
      });
    } else if (due_at === null) {
      this.setState({
        error: true
      });
    } else {
      this.setState({ error: false });
      this.props.editTodo(id, task, priority, category, is_completed, due_at);
    }
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.defaultValue
    });
  };

  render() {
    return (
      <div>
        <h2>Edit TODO</h2>
        {this.state.error && (
          <p style={{ color: "red" }}>please fill out all details</p>
        )}
        <input
          name="task"
          onChange={this.handleChange}
          type="text"
          placeholder="task"
          defaultValue={this.props.task}
        />
        <input
          name="priority"
          onChange={this.handleChange}
          type="number"
          min="1"
          max="5"
          defaultValue={this.props.priority}
        />
        <input
          name="category"
          onChange={this.handleChange}
          type="text"
          placeholder="category"
          defaultValue={this.props.category}
        />
        <input
          name="due_at"
          onChange={this.handleChange}
          type="datetime-local"
          defaultValue={this.props.due_at}
        />

        <button onClick={this.edit}>Edit</button>
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
    editTodo: (id, task, priority, category, is_completed, due_at) =>
      dispatch(
        editTodoAction(id, task, priority, category, is_completed, due_at)
      )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditTodo);
