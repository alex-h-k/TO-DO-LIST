import React from "react";

import GetAll from "./GetAll";
import GetPriority from "./GetPriority";
import SaveTodo from "./SaveTodo";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <GetAll />
          <br />
          <GetPriority />
          <br />
          <SaveTodo />
        </header>
      </div>
    );
  }
}

export default App;
