import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    
    person: [
      {name: 'lulula', age: 28},
      {name: 'gola', age: 23}
    ]
  }
  render() {
      return (
        <div className="App">
          <h1>Hello, My name is Larry</h1>

          <button>Switch Name</button>
          <Person name={this.state.person[0].name} age={this.state.person[0].age}>Hobby is : Reading</Person>
          <Person name={this.state.person[1].name} age={this.state.person[1].age}/>
        </div>
      );

    //return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Hello, my name is Larry!!!'));
  }
}

export default App;
