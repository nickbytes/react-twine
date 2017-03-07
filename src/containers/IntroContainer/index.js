import { css } from 'aphrodite';
import Helmet from 'react-helmet';
import React, { Component } from 'react';

import TextBlockComponent from '../../components/TextBlockComponent';
import styles from './style';
import window from '../../assets/window.png';
import './index.css';

class IntroContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstBlockShowing: false,
      secondBlockShowing: false,
    };

    this.showNext = this.showNext.bind(this);
    this.showSecond = this.showSecond.bind(this);
  }

  showNext() {
    this.setState({
      firstBlockShowing: true,
    });
  }

  showSecond() {
    this.setState({
      secondBlockShowing: true,
    });
  }
  render() {
    const shouldDisplayFirst = css(
      this.state.firstBlockShowing ? styles.display : styles.noDisplay,
    );

    const buttonStatus = css(
      this.state.firstBlockShowing ? styles.disabled : styles.noDisabled,
    );

    const shouldDisplaySecond = css(
      this.state.secondBlockShowing ? styles.display : styles.noDisplay,
    );
    return (
      <div className={css(styles.container)}>
        <Helmet style={[{ type: 'text/css', cssText: 'html {background-color: #f9f9f9;}' }]} />
        <div className={css(styles.leftContainer)}>
          <p className={css(styles.paragraph)}>
            The alarm{' '}
            <button
              className={css(styles.button)}
              onClick={this.showNext}
              disabled={this.state.firstBlockShowing}
              >sounds</button>
            .
          </p>
          <div className={shouldDisplayFirst}>
            <p className={css(styles.paragraph)}>
              You glance past the alarm clock. Rain beats on the streets outside.
              You can see the lights from the pet store, bodega, smoke shop, and appliance
              store are already glowing into your window from below.
            </p>
            <p className={css(styles.paragraph)}>
              A sort of{' '}
              <button
                className={css(styles.button)}
                onClick={this.showSecond}
                disabled={this.state.secondBlockShowing}
                >
                aurora metropolis
              </button>
              .
            </p>

          </div>
        </div>
        <div className={`${shouldDisplaySecond} ${css(styles.rightContainer)}`}>
          <div className={css(styles.doubleContainer)}>
            <div className={css(styles.imageContainer)}>
              <img
                style={{ width: '100%', maxWidth: '100%' }}
                src={window}
                alt="window with neon light coming through"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IntroContainer;
