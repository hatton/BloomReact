import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from 'layouts/app';
import EditTab from 'views/EditTab';
import CollectionTab from 'views/CollectionTab';
//import PublishTab from 'views/PublishTab';

// NOTE: here we're making use of the `resolve.root` configuration
// option in webpack, which allows us to specify import paths as if
// they were from the root of the ~/src directory. This makes it
// very easy to navigate to files regardless of how deeply nested
// your current file is.


export default (
  <Route path='/' component={App}>
    <IndexRoute component={CollectionTab}/>

    <Route path="/collections" component={CollectionTab} />
    <Route path="/edit" component={EditTab} />

  </Route>
);
