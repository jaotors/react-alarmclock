import React, { Component } from 'react';
import Clock from './components/Clock'
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
          <ul className="inputList">
            <li><span>Hours</span><input type="text"/></li>
            <li><span>Minutes</span><input type="text"/></li>
            <li><span>Seconds</span><input type="text"/></li>
            <li>
              <span>AM/PM</span>
              <select name="" id="">
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
              </li>
          </ul>
          <div className="note"><span>Note</span><input type="text"/></div>
        </div>
      </div>
    );
  }
}

export default App;
