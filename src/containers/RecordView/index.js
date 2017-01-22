import React, { Component } from 'react';
import { connect }          from 'react-redux';
import MicrophoneControls   from 'components/MicrophoneControls';
import ReactSimpleTimer     from 'react-simple-timer';
import Button               from 'components/Button';
import Pause                from 'material-ui/svg-icons/av/pause';
import Microphone           from 'material-ui/svg-icons/av/mic';

import { styles } from './styles.scss';

class RecordView extends Component {
  constructor(props){
    super(props);
    this.startMicrophone = this.startMicrophone.bind(this);
    this.state = {
      startTimer: false,
      recording: false
    }
  }

  startMicrophone() {
    this.setState({
      startTimer: true,
      recording: true
    });
  }

  render() {
    let recordButton;
    if(this.state.recording) {
      recordButton = (
        <Button
          className="btn"
          onTouchTap={this.startMicrophone}
          secondary={true}
          raised={true}
          floating={true}
          icon={<Pause  />} />
      );
    } else {
      recordButton = (
        <Button
          className="btn"
          onTouchTap={this.startMicrophone}
          secondary={true}
          raised={true}
          floating={true}
          icon={<Microphone  />} />
      );
    }
    return (
      <div className={styles}>
        <div id="spectrogram">
          <MicrophoneControls />
        </div>
        <div id="controls">
          <ReactSimpleTimer play={this.state.startTimer} />
          {recordButton}
        </div>
      </div>
    );
  }

}

export default RecordView;