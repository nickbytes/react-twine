import React from 'react';
import { css } from 'aphrodite';
import styles from './style';

const WelcomeMessage = () => (
  <div className={css(styles.welcomeContainer)}>
    <h1 className={css(styles.heading)}>Inanimate Messenger</h1>
    <h2 className={css(styles.version)}>v0.1 beta</h2>
    <h2 className={css(styles.subHeading)}>
      A text-based adventure game.
    </h2>
  </div>
);

export default WelcomeMessage;
