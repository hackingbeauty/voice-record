/**
 * ProgressIndicator
 */

import React                from 'react';
import { CircularProgress } from 'material-ui';

/* component styles */
import { styles } from './styles.scss';

export default function ProgressIndicator(props) {
  return (
    <div className={styles}>
      <CircularProgress
        className="progress-indicator"
        size={props.size}
        thickness={props.thickness} />
    </div>
  );
}