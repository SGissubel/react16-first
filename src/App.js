import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React App</h1>
        <button>Switch Names</button>
        <Person name="Steve" age="33"/>
        <Person name="Bobby" age="33">I got hobbies Yall</Person>
        <Person name="Buttbutt" age="39"/>
        
      </div>
    );
  }
}

export default App;
