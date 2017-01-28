import React, { Component }   from 'react';
import { Tabs, Tab }          from 'material-ui';
import SwipeableViews         from 'react-swipeable-views';

/* component styles */
import { styles } from './styles.scss';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      currentRoute: 'record'
    }
  }

  componentDidMount() {
    const { route } = this.props;
    this.handleChange(route, false);
  }

  componentWillReceiveProps(){
    const { route } = this.props;
    this.handleChange(route, false);
  }

  handleChange(route, routeToURL) {
    this.setState({
      currentRoute: route
    });

    if(routeToURL !== false) { this.pushRoute(route) };
  }

  pushRoute(route){
    const { router } = this.props;

    switch(route){
      case 'record':
        router.push('/record');
        break;
      case 'recordings':
        router.push('/recordings');
        break;
      default:
        break;
    }
  }

  render() {
    const { content } = this.props;

    return(
      <div className={styles}>
        <Tabs
          className="tabs"
          value={this.state.currentRoute}
          onChange={this.handleChange}>
          <Tab
            label="Record"
            value={'record'}>
          </Tab>
          <Tab
            label="Listen"
            value={'recordings'}>
          </Tab>
        </Tabs>
        <div id="view-1">
          {content}
        </div>
      </div>
    );
  }

}

export default Navigation;