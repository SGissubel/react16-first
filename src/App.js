import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Steven', age: 33 },
      { name: 'Manuel', age: 44 },
      { name: 'Buttbutt', age: 67 }
    ],
    showPersons: false
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

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState(
      {showPersons: !doesShow}
    )
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
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

    return (
      <div className="App">
        <h1>React App</h1>
        <button
          style={style}
          onClick={this.togglePersonsHandler}
          >Switch Names</button>
        {persons}
      </div>
    );
  }
}

export default App;
