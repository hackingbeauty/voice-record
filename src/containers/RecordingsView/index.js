import React, { Component } from 'react';
import { connect }          from 'react-redux';

import { styles } from './styles.scss';

class RecordingsView extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className={styles}>
        <div className="container">
          Recordings View
        </div>
      </div>
    );
  }

}

export default RecordingsView;