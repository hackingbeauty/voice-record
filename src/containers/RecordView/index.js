import React, { Component } from 'react';
import { connect }          from 'react-redux';
import MicrophoneControls   from 'components/MicrophoneControls';

import { styles } from './styles.scss';

class RecordView extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className={styles}>
      <div></div>
        <div id="microphone-section">
          <MicrophoneControls />
        </div>
      </div>
    );
  }

}

export default RecordView;