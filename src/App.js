import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Steven', age: 33 },
      { name: 'Manuel', age: 44 },
      { name: 'Buttbutt', age: 67 }
    ]
  }

  switchNameHandler = ( newName ) => {
    this.setState({
      persons: [
        { name: newName, age: 65 },
        { name: 'Manuel', age: 44 },
        { name: 'Buttbutt', age: 67 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Guy Fierre', age: 65 },
        { name: 'Manuel', age: 44 },
        { name: event.target.value, age: 67 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>React App</h1>
        <button onClick={() => this.switchNameHandler('Nigeria Kantucky')}>Switch Names</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Georgia O\'Keiff')}/>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}
          changed={this.nameChangedHandler}>I got hobbies Yall</Person>
        
      </div>
    );
  }
}

export default App;
