import React, { Component } from 'react'



class Alarm extends Component {
  constructor() {
    super()

    this.state = {
      items: [],
      hours: '',
      minutes: '',
      seconds: '',
      note: '',
      ampm: 'AM',
      check: false,
      alarm: false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.addAlarm = this.addAlarm.bind(this)
  }

  handleChange(e) {
    const {id, value} = e.target

    this.setState({
      [id]: value
    })
  }

  addAlarm(e) {
    e.preventDefault()

    let newItem = {
      id: Date.now(),
      time: this.state.time
    }

    this.setState((prevState) => {
      return {
        items: prevState.items.concat(newItem),
        hours: '',
        minutes: '',
        seconds: '',
        note: '',
        ampm: 'AM',
        check: false,
        alarm: false,
      }
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.addAlarm}>
          <ul className="inputList">
            <li><span>Hours</span><input type="number" max="12" min="1" id="hours" maxLength="2" onChange={this.handleChange} /></li>
            <li><span>Minutes</span><input type="number" max="59" min="0" id="minutes" maxLength="2" onChange={this.handleChange} /></li>
            <li><span>Seconds</span><input type="number" max="59" min="0" id="seconds" maxLength="2" onChange={this.handleChange} /></li>
            <li>
              <span>AM/PM</span>
              <select id="ampm" onChange={this.handleChange} >
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
            </li>
          </ul>
          <p className="note">
            <span>Note</span>
            <input type="text" id="note" onChange={this.handleChange} />
          </p>
          <button>Add alarm</button>
        </form>
        <AlarmList items={this.state.items} />
      </div>
    )
  }
}

class AlarmList extends Component {




  render() {
    return (
      <ul>
        {
          this.props.items.map((item, index) => {
            <li key={index}>{item.hours}:{item.minutes}:{item.seconds}{item.ampm}</li>
          })
        }
      </ul>
    )
  }
}

export default Alarm
