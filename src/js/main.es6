import React from 'react';
import Router, { HashLocation, Route, DefaultRoute } from 'react-router';
import App from 'components/App';
import IndexSite from 'components/site/IndexSite';


let routes = (
  <Route handler={ App }>
    <DefaultRoute handler={ IndexSite }/>
    <Route name="index" path="/" handler={ IndexSite }/>
  </Route>
);


Router.run(routes, HashLocation, (Root) => {
  React.render(<Root/>, document.body);
});
