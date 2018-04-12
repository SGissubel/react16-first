import React, { PureComponent } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
// import WithClass from '../hoc/WithClass';
import withClass from '../hoc/WithClass';

export const AuthContext = React.createContext(false);


class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[App.js] inside constructor', props);
  }

  componentWillMount() {
    console.log('Appjs - inside componentWillMount');
  }

  componentDidMount() {
    console.log('Appjs - inside componentDidMount')
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE app.js] inside shouldComponentUpdate', nextProps, nextState);
  //   return nextState.persons !== this.state.persons || nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE app.js] inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate(nextProps, nextState) {
    console.log('[UPDATE app.js] inside componentDidUpdate', nextProps, nextState);
  }

  state = {
    persons: [
      { id: '123fd', name: 'Steven', age: 33 },
      { id: 'asdf3', name: 'Manuel', age: 44 },
      { id: '32rasdf', name: 'Buttbutt', age: 67 }
    ],
    showPersons: false,
    toggleClicked: 0,
    authenticated: false
  }


  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( (prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }
    } );
  }

  loginHandler = () => {
    this.setState({authenticated: true});
  }

  render() {

    let persons = null;
    if (this.state.showPersons) {
      persons = 
        <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}/>;
    }

    

    return (
      <Aux>
        <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          login={this.loginHandler}
          click={this.togglePersonsHandler}/>
          <AuthContext.Provider value={this.state.authenticated}>
            {persons}
          </AuthContext.Provider>
      </Aux>
    );
  }
}

export default withClass(App, classes.App);




    // <WithClass classes={classes.App}>
    //   <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
    //     <Cockpit
    //       showPersons={this.state.showPersons}
    //       persons={this.state.persons} 
    //       click={this.togglePersonsHandler}/>
    //     {persons}
    //   </WithClass>