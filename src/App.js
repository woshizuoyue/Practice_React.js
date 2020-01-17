import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

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

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

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

      style.backgroundColor = 'red';
    }
      return (
        <div className="App">
          <h1>Hello, My name is Larry</h1>
          <button 
          style={style}
          onClick={this.togglePersonHandler}>Switch Name</button>
          {persons}
        </div>
      );
  }
}

export default App;
