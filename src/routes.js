import React                    from 'react';
import { Route, IndexRedirect } from 'react-router';

/* containers */
import App  from 'containers/App';
import Home from 'containers/Home';

export default (
  <Route path="/" component={App}>
    <IndexRedirect to="/home" />
    <Route path="home" component={Home} />
    <Route path="*" status={404} component={Home} />
  </Route>
);
