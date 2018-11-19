import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Marianne", age: 43 },
      { name: "Max", age: 29 },
      { name: "Lisa", age: 38 }
    ]
  };
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <p>world!</p>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          Hobbies: Swimming
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />{" "}
        <button>Switch name</button>
      </div>
    );
  }
}

export default App;
