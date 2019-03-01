import React from "react";
import { connect } from "react-redux";
// import { getTodosAction } from "../actions/getTodos";
import { getPriorityAction } from "../actions/getPriority";
class GetPriority extends React.Component {
  constructor(props) {
    super(props);

    this.getPriority = this.getPriority.bind(this);
    // this.getTodos = this.getTodos.bind(this);
  }
  getPriority(e) {
    console.log(e.target);
    return this.props.getPriority(e.target.value);
  }

  // getTodos(e) {
  //   return this.props.getTodos();
  // }

  render() {
    let { todos } = this.props;

    return (
      <div>
        <p>
          Show tasks by priority:
          <select name="todos" onChange={this.getPriority}>
            {[1, 2, 3, 4, 5].map(item => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </p>
        {/* <button onClick={this.getTodos()}>Show All</button> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { todos: state.todos };
}
function mapDispatchToProps(dispatch) {
  return {
    getPriority: priority => dispatch(getPriorityAction(priority))
    // getTodos: () => dispatch(getTodosAction())
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GetPriority);
