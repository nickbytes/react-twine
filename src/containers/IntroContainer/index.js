import React, { Component } from 'react';
import TextBlockComponent from '../../components/TextBlockComponent';
import HomeLinkComponent from '../../components/HomeLinkComponent';


class IntroContainer extends Component {
  // this is where we might get some data for intro component to
  // pass down to text block.
  render() {
    return (
      <div>
        <HomeLinkComponent />
        <TextBlockComponent
          text={"Are you sure you are ready?"}
        />
      </div>
    );
  }
}

export default IntroContainer;
