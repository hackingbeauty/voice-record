import React, { Component } from 'react';
import { connect }          from 'react-redux';
import MicrophoneControls   from 'components/MicrophoneControls';
import ReactSimpleTimer     from 'react-simple-timer';

import { styles } from './styles.scss';

class RecordView extends Component {
  constructor(props){
    super(props);
    this.whatever = this.whatever.bind(this);
    this.state = {
      startTimer: false
    }
  }

  whatever() {
    this.setState({
      startTimer: true
    });
  }

  render() {
    return (
      <div className={styles}>
        <div id="microphone-section">
          <MicrophoneControls />
        </div>
        <ReactSimpleTimer play={this.state.startTimer} />
        <button onTouchTap={this.whatever}>Start</button>
      </div>
    );
  }

}

export default RecordView;