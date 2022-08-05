import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state: {speed: 0}

  onAccelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(previous => ({speed: previous.speed + 10}))
    }
  }

  onApplyBrakes = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(previous => ({speed: previous.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="improper insert"
        />
        <h1 className="heading2">Speed is {speed}mph</h1>
        <p className="para">Min limit is 0mph and, max limit is 200mph</p>
        <div className="container2">
          <button type="button" className="button" onClick={this.onAccelerate}>
            Acceleration
          </button>
          <button type="button" className="button" onClick={this.onApplyBrakes}>
            Apply Brakes
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
