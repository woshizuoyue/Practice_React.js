import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    
    person: [
      {name: 'lulula', age: 28},
      {name: 'gola', age: 23}
    ],

    otherState: 'someone good',

    showPerson: false
  }

  switchNameHandler = (newName) =>{
    //console.log('was clikced');

    // doesn't work => this.state.person[0].name = 'hahago';

    this.setState(
      {
        person: [
          {name: 'hahago', age: 30},
          {name: newName, age: 32}
        ]
      }
    )
  }

  nameChangedHandler = (event) =>{

    this.setState({

      person:[
        {name : 'lulula', age: 30},
        {name: event.target.value, age: 32}
      ]
    })
  }

  togglePersonHandler=()=>{

    const doseShow = this.state.showPerson;

    this.setState({showPerson: !doseShow});
  }

  render() {

    const style = {

      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if(this.state.showPerson){

      persons = (
          <div>
            <Person 
                name={this.state.person[0].name} 
                age={this.state.person[0].age}
                click = {this.switchNameHandler.bind(this, 'lola')}>Hobby is : Reading</Person>

                <Person name={this.state.person[1].name} 
                age={this.state.person[1].age}
                changed={this.nameChangedHandler}/>

          </div>    
      );
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
