import React from 'react';
import { css } from 'aphrodite';
import styles from './style';

const TextBlockComponent = ({text}) => {
  return (
    <p className={css(styles.container)}>
      {text}
    </p>
  );
};

export default TextBlockComponent;
