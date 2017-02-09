import { Link } from 'react-router';
import { css } from 'aphrodite';
import React from 'react';
import Helmet from 'react-helmet';

import TextBlockComponent from '../../components/TextBlockComponent';
import styles from './style';

const IntroContainer = () => (
  <div className={css(styles.container)}>
    <Helmet style={[{ type: 'text/css', cssText: 'html {background-color: #f9f9f9;}' }]} />
    <div className={css(styles.storyBlock)}>
      <TextBlockComponent text={'The alarm'} />
      <button className={css(styles.button)}>sounds</button>
      <TextBlockComponent text={'.'} />
    </div>
    <div className={css(styles.storyBlock)}>
      <TextBlockComponent
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

export default IntroContainer;
