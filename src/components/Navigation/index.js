import React, { Component }   from 'react';
import { Tabs, Tab }          from 'material-ui';
import SwipeableViews         from 'react-swipeable-views';
import { withRouter }         from 'react-router';

/* component styles */
import { styles } from './styles.scss';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      slideIndex: 0
    }
  }

  handleChange(index) {
    this.setState({
      slideIndex: index
    });

    this.pushRoute(index);
  }

  pushRoute(index){
    switch(index){
      case 0:
        this.props.router.push('/record');
        break;
      case 1:
        this.props.router.push('/recordings');
        break;
      default:
        break;
    }
  }

  render() {
    return(
      <div className={styles}>
        <Tabs
          value={this.state.slideIndex}
          onChange={this.handleChange}>
          <Tab
            label="Record"
            value={0}>
          </Tab>
          <Tab
            label="Listen"
            value={1}>
          </Tab>
        </Tabs>
        <div className="container">
          <SwipeableViews
            index={this.state.slideIndex}
            onChangeIndex={this.handleChange}>
            <div id="view-1">
              <h2>Controllable Tab A</h2>
              <p>
                Tabs are also controllable if you want to programmatically pass them their values.
                This allows for more functionality in Tabs such as not
                having any Tab selected or assigning them different values.
              </p>
            </div>
            <div id="view=2">
              <h2>Controllable Tab B</h2>
              <p>
                This is another example of a controllable tab. Remember, if you
                use controllable Tabs, you need to give all of your tabs values or else
                you wont be able to select them.
              </p>
            </div>
          </SwipeableViews>
        </div>
      </div>
    );
  }

}

export default withRouter(Navigation);