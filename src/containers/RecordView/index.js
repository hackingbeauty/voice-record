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
    this.state = {
      timerOn: false,
      recording: false
    }
  }

  toggleMicrophone= () => {
    this.setState({
      timerOn: !this.state.timerOn,
      recording: !this.state.recording
    });
  }

  saveRecording= () => {
    const uniqueID= uuid.v1();
    this.props.router.push(`/recording/${uniqueID}`);
  }

  deleteRecording= () => {
    this.setState({
      timerOn  : false,
      recording: false
    });
  }

  render() {
    if(this.state.recording) {
      return (
        <div className={styles}>
          <div id="spectrogram">
            <MicrophoneControls start={this.state.recording} />
          </div>
          <div id="controls">
            <ReactSimpleTimer play={this.state.timerOn} />
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
            <ReactSimpleTimer play={this.state.timerOn} />
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