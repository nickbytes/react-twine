import { StyleSheet } from 'aphrodite';
import t from 'tachyons-js';

// font-family: 'Sahitya', serif;
// font-family: 'Yatra One', cursive;

const styles = StyleSheet.create({
  container: { ...t.serif, ...t.ma0, ...t.pv5, ...t.ph2 },
  storyBlock: { ...t.flex, ...t.pv3, maxWidth: '38em', margin: '0 auto' },
  input: {
    border: '0',
    borderBottom: '1px dashed #98b1bc',
    outline: 'none',
    background: 'transparent',
    '::-webkit-input-placeholder': {
      color: 'var(--red)',
      opacity: '0.7',
    },
    ':-moz-placeholder': {
      color: 'var(--red)',
      opacity: '0.7',
    },
    '::-moz-placeholder': {
      color: 'var(--red)',
      opacity: '0.7',
    },
    ':-ms-input-placeholder': {
      color: 'var(--red)',
      opacity: '0.7',
    },
  },
  list: {
    ...t.list,
    ...t.ma0,
  },
  item: {
    ...t.mb2,
  },
  label: {
    ...t.black,
    paddingLeft: '12px',
  },
  button: {
    outline: 'none',
    border: '0',
    ...t.bg_transparent,
    ...t.bb,
    ...t.blue,
    ...t.pointer,
    ...t.mh1,
    ...t.pa0,
  },
});

export default styles;
