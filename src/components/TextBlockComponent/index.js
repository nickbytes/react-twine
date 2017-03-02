import React, { PropTypes } from 'react';
import { css } from 'aphrodite';
import styles from './style';

const TextBlockComponent = ({ text }) => (
  <span className={css(styles.container)}>
    {text}
  </span>
);

TextBlockComponent.propTypes = { text: PropTypes.string.isRequired };

export default TextBlockComponent;
