import React, { Component }   from 'react';
import { Tabs, Tab }          from 'material-ui';
import SwipeableViews         from 'react-swipeable-views';

/* component styles */
import { styles } from './styles.scss';

export default class Navigation extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className={styles}>
        <Tabs>
          <Tab
            label="Tab A"
            value="a">
          </Tab>
          <Tab
            label="Tab B"
            value="b">
          </Tab>
        </Tabs>
        <div className="container">
          <SwipeableViews>
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