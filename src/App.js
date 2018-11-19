import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <p>world!</p>
        <Person name="Marianne" age="43" />
        <Person name="Max" age="29">
          Hobbies: Swimming
        </Person>
        <Person name="Lisa" age="38" />
      </div>
    );
  }
}

export default App;
