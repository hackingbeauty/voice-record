import React, { Component }   from 'react';
import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter }         from 'react-router';
import RecordedItem           from 'components/RecordedItem';
import EmptyState             from 'components/EmptyState';
import { getAll }             from 'core/libs/lib-cache';

/* actions */
import * as audioActionCreators from 'core/actions/actions-audio';

import { styles } from './styles.scss';

class RecordingsView extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { actions } = this.props;

    getAll().then((list) => {
      actions.audio.getItems(list);
    });
  }

  getRecordings() {
    const audioItems = [];

    this.props.audio.list.map((audioItem) => {
      audioItems.push(<li key={audioItem.id}>
                        <RecordedItem item={audioItem} />
                      </li>);
    });
    return audioItems;
  }

  displayRecordings() {
    const { list } = this.props.audio;

    if(list && list.length) {
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
        <div className="container">
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

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      audio : bindActionCreators(audioActionCreators, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(RecordingsView));
