/**
 * EmptyState - A component to show an empty state message
 */

import React from 'react';

/* component styles */
import { styles } from './styles.scss';

export default function EmptyState(props) {
  return (
    <div className={styles}>
      <div className="placeholder">
        <span className="message">{props.message}</span>
      </div>
    </div>
  );
}