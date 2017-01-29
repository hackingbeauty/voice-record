/**
 * RecordedItem
 */

import React    from 'react';
import { Link } from 'react-router';

/* component styles */
import { styles } from './styles.scss';

export default function RecordedItem(props) {
  return (
    <div className={styles}>
      <div className="recorded-item">
        <Link to={`/recording/${props.id}`}>{props.title}</Link>
      </div>
    </div>
  );
}

RecordedItem.propTypes = {
  title : React.PropTypes.string,
  id    : React.PropTypes.string
};

RecordedItem.defaultProps = {
  title : 'Untitled'
}