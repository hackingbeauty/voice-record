import React, { Component }         from 'react';
import { connect }                  from 'react-redux';

/* component styles */
import { styles } from './styles.scss';

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles}>
        footer goes here
      </div>
    );
  }
}

export default connect(null, null)(Footer);