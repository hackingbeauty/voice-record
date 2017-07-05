import React, { Component }   from 'react';
import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';
import EmptyState             from 'components/EmptyState';
import RecordedItem           from 'components/RecordedItem';
import { withRouter }         from 'react-router-dom';

import { styles } from './styles.scss';

/* actions */
import * as uiActionCreators from 'core/actions/actions-ui';

class RecordingsView extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { match, actions } = this.props;

    if(match.path === '/recording/:id') {
      actions.ui.openRightNav();
    }
  }

  goToRecording=(recordingId) => {
    const { history, actions } = this.props;
    history.push(`/recording/${recordingId}`);
    actions.ui.openRightNav();
  }

  getRecordings() {
    const { list } = this.props.audio;

    const recordings = list.map((recordedItem, index) => {
      return (<li key={`recording-${index}`} >
                <RecordedItem
                  item={recordedItem}
                  onTouchTap={this.goToRecording.bind(null, recordedItem.id)} />
              </li>);
    });
    return recordings;
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
        <EmptyState message="You don't have any recordings" />
      );
    }
  }

  render() {
    const recordings = this.displayRecordings();

    return (
      <div className={styles}>
        {recordings}
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
      ui : bindActionCreators(uiActionCreators, dispatch)
    }
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RecordingsView));