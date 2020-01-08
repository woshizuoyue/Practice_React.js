import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
      return (
        <div className="App">
          <h1>Hello, My name is Larry</h1>
          <Person name="lulula" age="28">Hobby is : Reading</Person>
          <Person name="gola" age="23"/>
        </div>
      );

    //return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Hello, my name is Larry!!!'));
  }
}

export default App;
