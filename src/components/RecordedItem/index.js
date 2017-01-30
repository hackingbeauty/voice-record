/**
 * RecordedItem
 */

import React    from 'react';
import { Link } from 'react-router';

/* component styles */
import { styles } from './styles.scss';

export default function RecordedItem(props) {
  const { id } = props.item;
  const { title } = props.item;
  const { size } = props.item;

  return (
    <div className={styles}>
      <Link to={`/recording/${id}`} className="recorded-item">
        <span>{title}</span>
        <span className="recorded-item-size">{(size/1000000).toFixed(2)} MB</span>
      </Link>
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