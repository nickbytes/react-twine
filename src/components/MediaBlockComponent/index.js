import React, { PropTypes } from 'react';
import ReactPlayer from 'react-player';
import { css } from 'aphrodite';
import styles from './style';

// Example video, manhattan in rain.
// https://www.youtube.com/watch?v=aN4F46PF0ro

const MediaBlockComponent = ({ url }) => (
  <div className={css(styles.container)}>
    <ReactPlayer url={url} playing />
  </div>
);

MediaBlockComponent.propTypes = {
  url: PropTypes.string.isRequired,
};

export default MediaBlockComponent;
