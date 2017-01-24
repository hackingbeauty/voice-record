import React                    from 'react';
import { Route, IndexRedirect } from 'react-router';

/* containers */
import App            from 'containers/App';
import RecordView     from 'containers/RecordView';
import RecordingsView from 'containers/RecordingsView';
import DetailsView    from 'containers/DetailsView';

export default (
  <Route path="/" component={App}>
    <IndexRedirect to="/record" />
    <Route path="record" component={RecordView} />
    <Route path="recordings" component={RecordingsView} />
    <Route path="recording/:id" component={DetailsView} />
    <Route path="*" status={404} component={RecordView} />
  </Route>
);
