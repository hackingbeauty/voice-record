import React, { Component } from 'react';
import { connect }          from 'react-redux';
import MicrophoneControls   from 'components/MicrophoneControls';
import ReactSimpleTimer     from 'react-simple-timer';
import Button               from 'components/Button';
import Stop                 from 'material-ui/svg-icons/av/stop';
import Microphone           from 'material-ui/svg-icons/av/mic';
import Delete               from 'material-ui/svg-icons/action/delete';
import Done                 from 'material-ui/svg-icons/action/done';
import uuid                 from 'uuid';

import { styles } from './styles.scss';

class RecordView extends Component {
  constructor(props){
    super(props);

    this.toggleMicrophone = this.toggleMicrophone.bind(this);
    this.saveRecording = this.saveRecording.bind(this);
    this.deleteRecording = this.deleteRecording.bind(this);

    this.state = {
      startTimer: false,
      recording: false
    }
  }

  toggleMicrophone() {
    this.setState({
      startTimer: !this.state.startTimer,
      recording: !this.state.recording
    });
  }

  saveRecording() {
    const uniqueID= uuid.v1();
    this.props.router.push(`/recording/${uniqueID}`);
  }

  deleteRecording() {
    alert('deleted recording!');
  }

  render() {
    if(this.state.recording) {
      return (
        <div className={styles}>
          <div id="spectrogram">
            <MicrophoneControls start={this.state.recording} />
          </div>
          <div id="controls">
            <ReactSimpleTimer play={this.state.startTimer} />
            <div className="buttons">
              <Button
                className="btn secondary delete"
                onTouchTap={this.deleteRecording}
                iconOnly={true}
                icon={<Delete />} />
              <Button
                className="btn"
                onTouchTap={this.toggleMicrophone}
                secondary={true}
                raised={true}
                floating={true}
                icon={<Stop />} />
              <Button
                className="btn secondary save"
                onTouchTap={this.saveRecording}
                iconOnly={true}
                icon={<Done />} />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className={styles}>
          <div id="spectrogram">
            <MicrophoneControls start={this.state.recording} />
          </div>
          <div id="controls">
            <ReactSimpleTimer play={this.state.startTimer} />
            <Button
              className="btn"
              onTouchTap={this.toggleMicrophone}
              secondary={true}
              raised={true}
              floating={true}
              icon={<Microphone/>} />
          </div>
        </div>
      );
    }

  }

}

export default RecordView;