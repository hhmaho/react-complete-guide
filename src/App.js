import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: 'aze',name: "Marianne", age: 43 },
      { id: 'qsd',name: "Max", age: 29 },
      { id: 'wxc',name: "Lisa", age: 38 }
    ],
    otherState: 'some other value',
    showPerson: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

const person = {
  ...this.state.persons[personIndex]
}

person.name = event.target.value;

const persons = [...this.state.persons];
persons[personIndex]=person;

    this.setState({persons:persons});
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
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
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandlere(event, person.id)}/>
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
        onClick={this.togglePersonsHandler}>Toggle person</button>
      {persons}  
          
      </div>
    );
  }
}

export default App;
