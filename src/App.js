import React, { Component } from 'react';
import Clock from './components/Clock'
import Alarm from './components/Alarm'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Alarm Clock</h1>
        <div className="clock-container">
          <Clock />
        </div>
        <div className="alarm-container">
          <Alarm />
        </div>
      </div>
    );
  }
}

export default App;
