import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Marianne", age: 43 },
      { name: "Max", age: 29 },
      { name: "Lisa", age: 38 }
    ],
    otherState: 'some other value',
    showPerson: false
  };

  switchNameHandler = (newName) => {
    // console.log("test button!");
    this.setState({
      persons: [
        {name: newName, age: 28},
        {name: 'Daniel', age: 28},
        {name: 'Anne', age: 28},
      ]
    })
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons:[
        {name: 'Max', age: 32},
        {name: event.target.value, age: 33},
        {name: 'Linda', age: 34},
      ]
    })
  }

  togglePersonsHandler= () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font:'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons){
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}/>
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Kim')}
            changed={this.nameChangedHandler}>My hobbies: swimming</Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}/>
          </div>
      )
    }

    return (
      <div className="App">
        <h1>Hello world</h1>
        <p>Welcome</p>
        <button
        style={style}
        onClick={this.togglePersonsHandler}>Switch name</button>
      {persons}  
          
      </div>
    );
  }
}

export default App;
