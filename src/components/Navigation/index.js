import React, { Component } from 'react';
import { Tabs, Tab }        from 'material-ui';
import { withRouter }       from 'react-router-dom';

/* component styles */
import { styles } from './styles.scss';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRoute: '/record'
    }
  }

  componentWillReceiveProps(nextProps) {
    const { pathname } = nextProps.location;
    this.handleChange(pathname, false);
  }

  componentDidMount() {
    const { pathname } = this.props.location;
    this.handleChange(pathname, false);
  }

  handleChange=(route, updateURL) => {
    this.setState({
      currentRoute: route
    });

    if(updateURL !== false) { this.pushRoute(route) }
  }

  pushRoute(route) {
    const { history } = this.props;

    switch(route) {
    case '/record':
      history.push('/record');
      break;
    case '/recordings':
      history.push('/recordings');
      break;
    default:
      break;
    }
  }

  render() {
    return (
      <div className={styles}>
        <Tabs
          className="tabs"
          value={this.state.currentRoute}
          onChange={this.handleChange}>
          <Tab
            label="Record"
            value={'/record'}>
          </Tab>
          <Tab
            label="Listen"
            value={'/recordings'}>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default withRouter(Navigation);