import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import List from './pages/List/List';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        {/* <Nav /> */}
        <Switch>
          {/* <Route exact path="/" component={Main} /> */}
          <Route exact path="/" component={List} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    );
  }
}

export default Routes;
