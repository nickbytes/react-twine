import { StyleSheet } from 'aphrodite';
import t from 'tachyons-js';

// font-family: 'Sahitya', serif;
// font-family: 'Yatra One', cursive;

const repeatingAnimationBlue = {
  '0%': {
    boxShadow: '20px -20px 55px 55px rgba(14, 94, 213, 0.75)',
  },

  '50%': {
    boxShadow: '20px -20px 95px 95px rgba(14, 94, 213, 0.75)',
  },

  '100%': {
    boxShadow: '20px -20px 55px 55px rgba(14, 94, 213, 0.75)',
  },
};

const repeatingAnimationRed = {
  '0%': {
    boxShadow: '20px -20px 75px 75px rgba(231, 23, 111, 0.75)',
  },

  '50%': {
    boxShadow: '20px -20px 135px 135px rgba(231, 23, 111, 0.75)',
  },

  '100%': {
    boxShadow: '20px -20px 75px 75px rgba(231, 23, 111, 0.75)',
  },
};

const styles = StyleSheet.create({
  container: { ...t.serif, ...t.pv5, ...t.ph2, maxWidth: '55em', margin: '0 auto' },
  leftContainer: {
    float: 'left',
    width: '55%',
    paddingTop: '5em',
  },
  rightContainer: {
    float: 'right',
    width: '30%',
  },
  doubleContainer: {
    width: '301px',
    height: '396px',
    overflow: 'hidden',
    ...t.bg_black,
    zIndex: '1',
  },
  imageContainer: {
    ...t.relative,
    zIndex: 'inherit',
    '::before': {
      content: '""',
      ...t.absolute,
      ...t.bottom_0,
      ...t.left_0,
      width: '1px',
      height: '1px',
      ...t.bg_red,
      zIndex: '-1',
      borderRadius: '40%',
      animationName: [repeatingAnimationBlue],
      animationDuration: '3s',
      animationIterationCount: 'infinite',
    },
    '::after': {
      content: '""',
      ...t.absolute,
      ...t.bottom_0,
      ...t.right_0,
      width: '1px',
      height: '1px',
      ...t.bg_blue,
      zIndex: '-1',
      borderRadius: '40%',
      animationName: [repeatingAnimationRed],
      animationDuration: '4s',
      animationIterationCount: 'infinite',
    },
  },

  paragraph: {
    ...t.f5,
    ...t.lh_copy,
    ...t.measure,
  },

  button: {
    outline: 'none',
    border: '0',
    ...t.bg_transparent,
    ...t.bb,
    ...t.blue,
    ...t.pointer,
    ...t.ma0,
    ...t.pa0,
  },
  display: {
    display: 'block',
  },
  noDisplay: {
    ...t.dn,
  },
});

export default styles;
