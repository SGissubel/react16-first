import React, { Component } from 'react';

import classes from './Person.css';
// import WithClass from '../../../hoc/WithClass';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/WithClass';

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('[person] inside constructor', props);
  }

  componentWillMount() {
    console.log('person - inside componentWillMount');
  }

  componentDidMount() {
    console.log('person - inside componentDidMount')
  }
  render () {
    return (
      <Aux>
        <p onClick={this.props.click}>I am { this.props.name }! I am { this.props.age } years old!</p>  
        <p>{ this.props.children }</p>
        <input type="text" onChange={this.props.changed} value={this.props.name}/>
      </Aux>
      
    )
  }  
}


export default withClass(Person, classes.Person);