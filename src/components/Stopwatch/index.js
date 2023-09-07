// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {startTime: 0}

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  getMinutes = () => {
    const {startTime} = this.state
    const minutes = Math.floor(startTime / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  getSeconds = () => {
    const {startTime} = this.state
    const seconds = Math.floor(startTime % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  startClockBtn = () => {
    this.timerId = setInterval(this.startClock, 1000)
  }

  startClock = () => {
    this.setState(prevState => ({startTime: prevState.startTime + 1}))
  }

  stopClockBtn = () => {
    clearInterval(this.timerId)
  }

  restartClockBtn = () => {
    this.setState({startTime: 0})
    clearInterval(this.timerId)
  }

  render() {
    const renderTime = `${this.getMinutes()}:${this.getSeconds()}`
    return (
      <div className="bg-container">
        <h1 className="main-heading">Stopwatch</h1>
        <div className="card-container">
          <div className="timer-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="stop-watch"
            />
            <p className="card-heading">Timer</p>
          </div>
          <h1 data-testid="timer" className="watch-timer">
            {renderTime}
          </h1>
          <div className="btn-container">
            <button
              type="button"
              onClick={this.startClockBtn}
              className="start-btn"
            >
              Start
            </button>
            <button
              type="button"
              onClick={this.stopClockBtn}
              className="stop-btn"
            >
              Stop
            </button>
            <button
              type="button"
              onClick={this.restartClockBtn}
              className="reset-btn"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
