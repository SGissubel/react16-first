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

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'Bumbum', age: 65 },
        { name: 'Manuel', age: 44 },
        { name: 'Buttbutt', age: 67 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>React App</h1>
        <button onClick={this.switchNameHandler}>Switch Names</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler}/>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}>I got hobbies Yall</Person>
        
      </div>
    );
  }
}

export default App;
