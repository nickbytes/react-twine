import { StyleSheet } from 'aphrodite';
import t from 'tachyons-js';

const styles = StyleSheet.create({
  welcomeContainer: {
    margin: '3em auto',
    maxWidth: '600px',
    padding: '20px',
  },
  heading: {
    ...t.serif,
    ...t.black,
    ...t.f4,
    margin: '25px 0',
  },
  version: {
    ...t.white,
    ...t.moon_gray,
    fontSize: '0.7em',
    ...t.serif,
  },
  subHeading: {
    ...t.serif,
    ...t.moon_gray,
    fontSize: '1em',
    margin: '0',
  },
  explainer: {
    ...t.moon_gray,
    lineHeight: '1.4em',
  },
});

export default styles;
