import { StyleSheet } from 'aphrodite';
import t from 'tachyons-js';

const styles = StyleSheet.create({
  welcomeContainer: {
    margin: '3em auto',
    maxWidth: '55em',
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
    ...t.bg_dark_gray,
    fontSize: '0.7em',
    ...t.sans_serif,
    ...t.normal,
    ...t.pa1,
    ...t.br2,
    ...t.ml3,
  },
  subHeading: {
    ...t.serif,
    ...t.dark_gray,
    ...t.f5,
    ...t.lh_copy,
    ...t.measure,
    margin: '0',
    ...t.normal,
  },
  explainer: {
    ...t.dark_gray,
    lineHeight: '1.4em',
  },
});

export default styles;
