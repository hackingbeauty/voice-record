/**
 * MicrophoneControls
 */

import React, { Component } from 'react';
import Button               from 'components/Button';
import MicrophoneOn         from 'material-ui/svg-icons/av/mic';
import MicrophoneOff        from 'material-ui/svg-icons/av/mic-off';
import { ReactMic,
         startRecording }   from 'react-mic';

/* component styles */
import { styles } from './styles.scss';

export default class MicrophoneControls extends Component {
  constructor(props) {
    super(props);
    this.startMicrophone = this.startMicrophone.bind(this);
    this.stopMicrophone = this.stopMicrophone.bind(this);
    this.saveRecording = this.saveRecording.bind(this);
    this.state = {
      recording: false
    }
  }

  startMicrophone() {
    const self = this;

    this.setState({
      recording: !self.state.record
    }, () => {
      if(self.state.recording) {
        startRecording();
      }
    });
  }

  stopMicrophone() {
    alert('stopping microphone');
  }

  saveRecording() {
    const self = this;

    this.setState({
      recording: !self.state.recording
    }, () => {
      if(!self.state.recording) {
        if(self.props.onSave) {
          self.props.onSave();
        }
      }
    });
  }

  render() {
    if(this.state.recording) {
      return (
        <div className={styles}>
          <div className="microphone-container">
            <div className="microphone-volume"></div>
            <ReactMic strokeColor="#FF4081" backgroundColor="#000000" height={80} />
          </div>
          <span onTouchTap={this.stopMicrophone}>stop</span>
          <Button
            className="btn"
            onTouchTap={this.startMicrophone}
            secondary={true}
            raised={true}
            floating={true}
            disabled={this.state.recording}
            icon={<MicrophoneOn  />} />
          <span onTouchTap={this.saveRecording}>save</span>
        </div>
      );
    } else {
      return (
        <div className={styles}>
          <div className="microphone-container">
            <div className="microphone-volume"></div>
            <ReactMic strokeColor="#FF4081" backgroundColor="#000000" height={80} />
          </div>
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
}