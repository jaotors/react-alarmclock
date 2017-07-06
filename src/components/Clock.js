import React, { Component } from 'react'

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hours: '',
      minutes: '',
      seconds: '',
      ampm: '',
    }
  }

  ticks() {
    let date = new Date()
    let updateHours = (((parseInt(date.getHours(), 10) + 11) % 12) + 1)
    let hours = (updateHours < 10) ? `0${updateHours}` : updateHours,
        minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
        seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds(),
        ampm = (date.getHours() < 12) ? 'AM' : 'PM'
    this.setState({
      hours: hours,
      minutes: minutes,
      seconds: seconds,
      ampm: ampm
    })
  }

  componentDidMount() {
    this.interval = setInterval(this.ticks(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return(
      <p><span>{this.state.hours}</span>:<span>{this.state.minutes}</span>:<span>{this.state.seconds}</span><span>{this.state.ampm}</span></p>
    )
  }
}

export default Clock