import React, { Component }    from 'react';
import { connect }             from 'react-redux';
import injectTapEventPlugin    from 'react-tap-event-plugin';
import getMuiTheme             from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider        from 'material-ui/styles/MuiThemeProvider';
import { withRouter }          from 'react-router';

// global styles for entire app
import './styles/app.scss';

/* application components */
import Header     from 'containers/Header';
import LeftNavBar from 'containers/LeftNavBar';
import Navigation from 'components/Navigation';

injectTapEventPlugin();

export class App extends Component {
  static propTypes = {
    children: React.PropTypes.any
  }

  constructor(props) {
    super(props);
  }

  render() {
    const path = this.props.router.location.pathname;
    const route = path.substr(1,path.length);

    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
          <Header />
          <Navigation content={this.props.children} route={route} />
          <LeftNavBar />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withRouter(connect(null)(App));