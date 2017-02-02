import React from 'react';
import { Link } from 'react-router';
import { css } from 'aphrodite';
import styles from './style';

const HomeLinkComponent = () => {
  return (
    <div className={css(styles.homeLink)}>
      <Link className={css(styles.link)}  to="/">Home</Link>
    </div>
  );
}

export default HomeLinkComponent;
