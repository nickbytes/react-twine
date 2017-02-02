import React from 'react';
import { css } from 'aphrodite';
import styles from './style';


const WelcomeMessage = () => {
  return (
    <div className={css(styles.welcomeContainer)}>
      <p className={css(styles.heading)}>Welcome to our game.</p>
    </div>
  );
};

export default WelcomeMessage;
