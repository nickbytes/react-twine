import React, { PropTypes } from 'react';
import { css } from 'aphrodite';
import styles from './style';

const TextBlockComponent = ({ text, showing }) => {
  if (!showing) {
    return <span />;
  }
  return (
    <span className={css(styles.container)}>
      {text}
    </span>
  );
};

TextBlockComponent.propTypes = {
  text: PropTypes.string.isRequired,
  showing: PropTypes.bool.isRequired,
};

export default TextBlockComponent;
