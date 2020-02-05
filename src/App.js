import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import Person from './Person/Person';

const StyledButton = styled.button`

  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  &:hover{
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black;
  }
`;

class App extends Component {

  state = {
    
    persons: [
      {id: 'sdf1', name: 'lulula', age: 28},
      {id: 'fsd2', name: 'gola', age: 23}
    ],

    otherState: 'someone good',

    showPerson: false
  }
  nameChangedHandler = (event, id) =>{

    const personIndex = this.state.persons.findIndex(p =>{

      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};

    //const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  deletePersonHandler=(personIndex)=>{
    //const persons = this.state.persons.slice();

    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);

    this.setState({persons : persons});
  }

  togglePersonHandler=()=>{

    const doseShow = this.state.showPerson;

    this.setState({showPerson: !doseShow});
  }


  render() {

    let persons = null;

    if(this.state.showPerson){

      persons = (
          <div>

            {this.state.persons.map((person, index)=>{

              return <Person name = {person.name} 
              age = {person.age} 
              click = {()=>this.deletePersonHandler(index)}
              key = {person.id}
              changed = {(event)=>this.nameChangedHandler(event, person.id)}/>
              // click = {this.deletePersonHandler.bind(this, index)};
            })}
          </div>    
      );
    }

    const classes = [];

    if(this.state.persons.length <= 2){

      classes.push('red');
    }

    if(this.state.persons.length <= 1){

      classes.push('bold');
    }

      return (
          <div className="App">
            <h1>Hello, My name is Larry</h1>
            <p className={classes.join(' ')}>It is really works!!!</p>
            <StyledButton alt={this.state.showPerson}
            onClick={this.togglePersonHandler}>Switch Name</StyledButton>
            {persons}
          </div>
      );
  }
}

export default App;
