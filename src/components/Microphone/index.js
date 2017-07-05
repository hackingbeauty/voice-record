/**
 * Microphone
 */

import React, { Component } from 'react';
import { ReactMic }         from 'react-mic';

/* component styles */
import { styles } from './styles.scss';

export default class Microphone extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { record, onStop } = this.props;

    return (
      <div className={styles}>
        <div className="microphone-icon"></div>
        <ReactMic
          record={record}
          onStop={onStop}
          className="recording-line"
          strokeColor="#0096ef"
          backgroundColor="#414141" />
      </div>)
  }
}