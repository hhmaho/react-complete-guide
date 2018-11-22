import React, { Component } from "react";
import "./App.css";
import Radium, { StyleRoot } from "radium";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "aze", name: "Marianne", age: 43 },
      { id: "qsd", name: "Max", age: 29 },
      { id: "wxc", name: "Lisa", age: 38 }
    ],
    otherState: "some other value",
    showPerson: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(prs => {
      return prs.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    //true to false, false to true
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "dimgrey",
      color: "white",
      font: "inherit",
      border: "1px solid lightcyan",
      padding: "8px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightgrey",
        color: "black"
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                key={person.id}
                name={person.name}
                age={person.age}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = "darkcyan";
      style[":hover"] = {
        backgroundColor: "salmon",
        color: "black"
      };
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("darkcyan");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hello world</h1>
          <p className={classes.join(" ")}>Welcome</p>
          <button style={style} onClick={this.togglePersonsHandler}>
            Show - Hide
          </button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
