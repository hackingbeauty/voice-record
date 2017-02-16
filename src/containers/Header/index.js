import React, { Component }   from 'react';
import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter }         from 'react-router';
import AppBar                 from 'components/AppBar';
import Navigation             from 'components/Navigation';

/* actions */
import * as uiActionCreators from 'core/actions/actions-ui';

/* component styles */
import { styles } from './styles.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.props.actions.ui.openLeftNav();
  }

  render() {
    const { count } = this.props.audio;
    const countText = count === 1 ? 'recording' : 'recordings';
    const audioCount = `${count} ${countText}`;
    const { pathname } = this.props.router.location;
    const path = pathname.slice(1, pathname.length);

    if(path === 'record') {
      return (
        <div className={styles}>
          <header>
            <AppBar
              title="New voice memo"
              onLeftIconButtonTouchTap={this.handleToggle} />
            <Navigation {...this.props} />
          </header>
        </div>);
    } else {
      return (
        <div className={styles}>
          <header>
            <AppBar
              title={audioCount}
              onLeftIconButtonTouchTap={this.handleToggle} />
            <Navigation {...this.props} />
          </header>
        </div>);
    }
  }
}

function mapStateToProps(state) {
  return {
    user : state.user,
    audio: state.audio
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      ui: bindActionCreators(uiActionCreators, dispatch)
    }
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));