import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] Inside Constructor", props);
    this.state = {
      persons: [
        { id: "aze", name: "Marianne", age: 43 },
        { id: "qsd", name: "Max", age: 29 },
        { id: "wxc", name: "Lisa", age: 38 }
      ],
      otherState: "some other value",
      showPerson: false
    };
  }

  componentWillMount() {
    console.log("[App.js] Inside componentWillMount()");
  }

  componentDidMount() {
    console.log("[App.js] Inside componentDidMount()");
  }

  // state = {
  //   persons: [
  //     { id: "aze", name: "Marianne", age: 43 },
  //     { id: "qsd", name: "Max", age: 29 },
  //     { id: "wxc", name: "Lisa", age: 38 }
  //   ],
  //   otherState: "some other value",
  //   showPerson: false
  // };

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
    console.log("[App.js] Inside render()");
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          appTitle={this.props.title}
          showPerson={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
