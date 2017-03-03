import { css } from 'aphrodite';
import Helmet from 'react-helmet';
import React, { Component } from 'react';

import TextBlockComponent from '../../components/TextBlockComponent';
import styles from './style';

class IntroContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstBlockShowing: false,
    }

    this.showNext = this.showNext.bind(this);
  }

  showNext() {
    this.setState({
      firstBlockShowing: true,
    });
  }
  render() {
    return (
      <div className={css(styles.container)}>
        <Helmet style={[{ type: 'text/css', cssText: 'html {background-color: #f9f9f9;}' }]} />
        <div className={css(styles.storyBlock)}>
          <TextBlockComponent text={'The alarm'} showing='true' />
          <button className={css(styles.button)} onClick={this.showNext}>sounds</button>
          <TextBlockComponent text={'.'} showing='true' />
        </div>
        <div className={css(styles.storyBlock)}>
          <TextBlockComponent
            showing={this.state.firstBlockShowing}
            text={
              `You glance past the alarm clock. Rain beats on the streets outside.
              You can see the lights from the pet store, bodega, smoke shop, and appliance
              store are already glowing into your window from below. A sort of aurora metropolis.
              `
            }
          />
        </div>
      </div>
    );
  }
};

export default IntroContainer;
