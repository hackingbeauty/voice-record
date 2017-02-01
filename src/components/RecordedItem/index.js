/**
 * RecordedItem
 */

import React    from 'react';
import { Link } from 'react-router';
import moment   from 'moment';

/* component styles */
import { styles } from './styles.scss';

export default function RecordedItem(props) {
  const { id, title, size, startTime } = props.item;

  return (
    <div className={styles}>
      <Link to={`/recording/${id}`} className="item">
        <div className="title">{title}</div>
        <div>{moment(startTime).format('MMMM D YYYY, h:mm a')}</div>
        <span className="size">{(size/1000000).toFixed(2)} MB</span>
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