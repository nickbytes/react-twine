import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import IndexContainer from './containers/IndexContainer';
import IntroContainer from './containers/IntroContainer';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={IndexContainer} />
        <Route path="/intro" component={IntroContainer} />
      </Router>
    );
  }
}

export default App;
