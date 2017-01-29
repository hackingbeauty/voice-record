import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { withRouter }       from 'react-router';
import RecordedItem         from 'components/RecordedItem';
import EmptyState           from 'components/EmptyState';

import { styles } from './styles.scss';

class RecordingsView extends Component {
  constructor(props) {
    super(props);
  }

  getRecordings() {
    const audioItems = [];
    this.props.audio.list.map((audioItem) => {
      audioItems.push(<li>
                        <RecordedItem
                          title={audioItem.title || audioItem.value.title}
                          id={audioItem.id} />
                      </li>);
    });
    return audioItems;
  }

  displayRecordings() {
    if(this.props.audio.list.length) {
      const audioItems = this.getRecordings();
      return (
        <ul>{audioItems}</ul>
      );
    } else {
      return (
        <EmptyState message="You haven't saved any recordings yet" />
      );
    }
  }

  render() {
    const recordings = this.displayRecordings();

    return (
      <div className={styles}>
        <div className="content-container add-padding">
          {recordings}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    audio: state.audio
  };
}

export default connect(mapStateToProps)(withRouter(RecordingsView));
