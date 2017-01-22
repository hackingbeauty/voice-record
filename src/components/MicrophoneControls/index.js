/**
 * MicrophoneControls
 */

import React, { Component } from 'react';
import { ReactMic }         from 'react-mic';

/* component styles */
import { styles } from './styles.scss';

export default class Microphone extends Component {
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
    return (
      <div className={styles}>
        <ReactMic className="recording-line" strokeColor="##0096ef" backgroundColor="#414141" height={80} />
      </div>
    );
  }
}