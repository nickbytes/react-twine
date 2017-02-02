import React, { Component } from 'react';
import WelcomeMessageComponent from '../../components/WelcomeMessageComponent';
import StartGameButtonComponent from '../../components/StartGameButtonComponent';

class IndexContainer extends Component {
  render() {
    return (
      <div>
        <WelcomeMessageComponent />
        <StartGameButtonComponent />
      </div>
    );
  }
}

export default IndexContainer;
