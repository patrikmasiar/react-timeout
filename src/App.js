import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    isLightOn: false,
    response: null,
    time: 2,
  };

  handleButtonClick = () => {
    this.setState(prevState => ({ isLightOn: !prevState.isLightOn }));
    this.setLedTime();
  };

  setLedTime = () => {
    setTimeout(() => {
      this.setState(prevState => ({ isLightOn: !prevState.isLightOn }));
    }, (this.state.time * 1000))
  };

  handleInputTimeChange = (e) => {
    const {value: time} = e.target;
    this.setState(() => ({time}));
  };

  /*getLedState = async () => {
  };*/

  render() {
    const {isLightOn, time} = this.state;
    const btnTitle = isLightOn ? 'Light is on' : 'Turn on';
    const btnBg = isLightOn ? '#72e680' : '#da4769';
    const title = isLightOn ? 'Light is going to be off' : 'Light is off';

    return (
      <div className="wrapper">
        <span className='title'>{title}</span>
        <span className="label">Set LED ON delay time in seconds</span>
        <input disabled={isLightOn} className='input' type="number" min={2} step={2} value={time} onChange={this.handleInputTimeChange} />
        <button disabled={isLightOn} className="led-button" style={{backgroundColor: btnBg}} onClick={this.handleButtonClick}>
          {btnTitle}
        </button>
      </div>
    );
  }
}

export default App;
