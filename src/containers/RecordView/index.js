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
    this.toggleMicrophone = this.toggleMicrophone.bind(this);
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

  render() {
    let btnIcon;

    this.state.recording ? btnIcon = <Pause/> : btnIcon = <Microphone/>;

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
            icon={btnIcon} />
        </div>
      </div>
    );
  }

}

export default RecordView;