import React, { PureComponent } from 'react';

import Person from './Person/Person';

class Persons extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[persons] inside constructor', props);
  }

  componentWillMount() {
    console.log('persons - inside componentWillMount');
  }

  componentDidMount() {
    console.log('persons - inside componentDidMount')
  }

  componentWillReceiveProps(nextProps) {
    console.log('[updatePesonsjs] inside componentWillReceiveProps', nextProps);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[updatePesonsjs] inside shouldComponentUpdate', nextProps, nextState);
  //   return nextProps.persons !== this.props.persons || nextProps.changed !== this.props.changed || nextProps.clicked !== this.props.clicked;
  // }

  componentWillUpdate(nextProps, nextState) {

  }

  componentDidUpdate(nextProps, nextState) {

  }

  render () {
    return this.props.persons.map( ( person, index ) => {
      return <Person
        click={() => this.props.clicked( index )}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={( event ) => this.props.changed( event, person.id )} />
        });
    }
}
  

export default Persons;