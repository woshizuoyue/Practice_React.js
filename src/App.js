import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
      return (
        <div className="App">
          <h1>Hello, My name is Larry</h1>
        </div>
      );

    //return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Hello, my name is Larry!!!'));
  }
}

export default App;
