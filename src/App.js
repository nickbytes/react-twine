import React, { Component } from 'react';
import { Router, Route, createMemoryHistory } from 'react-router';
import IndexContainer from './containers/IndexContainer';
import IntroContainer from './containers/IntroContainer';
import './index.css';
import './App.css';

const history = createMemoryHistory(location);

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Route path="/" component={IndexContainer} />
        <Route path="/intro" component={IntroContainer} />
      </Router>
    );
  }
}

export default App;
