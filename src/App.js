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

  nameChangedHandler = (event) => {
    this.setState({
      persons:[
        {name: 'Max', age: 32},
        {name: event.target.value, age: 33},
        {name: 'Linda', age: 34},
      ]
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
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
      (persons) = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={()=>this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}/>
          })}
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
