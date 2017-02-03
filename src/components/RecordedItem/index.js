/**
 * RecordedItem
 */

import React    from 'react';
import { Link } from 'react-router';
import moment   from 'moment';

/* component styles */
import { styles } from './styles.scss';

export default function RecordedItem(props) {
  const { id, title, size, startTime, stopTime } = props.item;
  const createdAt = moment(startTime).format('MMMM D YYYY, h:mm a');
  const totalSize = (size/1000000).toFixed(2);
  const length = ((moment.duration(stopTime - startTime)
                  .asSeconds())/60).toFixed(2)
                  .replace('.',':');

  return (
    <div className={styles}>
      <Link to={`/recording/${id}`} className="item">
        <h2 className="title">{title}</h2>
        <div className="created-at">{createdAt}</div>
        <div className="length">{length}</div>
        <div className="size">{totalSize} MB</div>
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