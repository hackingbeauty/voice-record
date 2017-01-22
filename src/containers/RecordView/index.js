import React, { Component } from 'react';
import { connect }          from 'react-redux';
import MicrophoneControls   from 'components/MicrophoneControls';
import ReactSimpleTimer     from 'react-simple-timer';
import Button               from 'components/Button';
import MicrophoneOn         from 'material-ui/svg-icons/av/mic';
import MicrophoneOff        from 'material-ui/svg-icons/av/mic-off';

import { styles } from './styles.scss';

class RecordView extends Component {
  constructor(props){
    super(props);
    this.startMicrophone = this.startMicrophone.bind(this);
    this.state = {
      startTimer: false
    }
  }

  startMicrophone() {
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
        <Button
            className="btn"
            onTouchTap={this.startMicrophone}
            secondary={true}
            raised={true}
            floating={true}
            disabled={this.state.recording}
            icon={<MicrophoneOff  />} />
      </div>
    );
  }

}

export default RecordView;