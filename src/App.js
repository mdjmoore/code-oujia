import React, { Component } from 'react';
import './App.css';
import Board from './Board.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Talk to your code</h1>
          <p className="App-intro">
            Having trouble getting your code to do what you want it to? Simply paste your code into the input below and speak with it from beyond the complier!
          </p>
          <textarea />
          <input type="submit" className="submit" value="commune with your code" />
        </header>

        <Board />

        <footer>&copy; <a href="http://www.mdjm.io">Meagan Moore</a></footer>
      </div>
    );
  }
}

export default App;
