import React, { Component } from 'react';
import WelcomeMessageComponent from '../../components/WelcomeMessageComponent';
import StartGameButtonComponent from '../../components/StartGameButtonComponent';
import Helmet from 'react-helmet';

class IndexContainer extends Component {
  render() {
    return (
      <div>

        <Helmet
          style={[
            { type: 'text/css', cssText: 'html {background-color: #f9f9f9;}' },
          ]}
        />

        <WelcomeMessageComponent />
        <StartGameButtonComponent />
      </div>
    );
  }
}

export default IndexContainer;
