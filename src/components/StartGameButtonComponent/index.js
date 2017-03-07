import React from 'react';
import { Link } from 'react-router';

const StartGameButtonComponent = () => (
  <div style={{ maxWidth: '55em', margin: '0 auto', padding: '40px 1em' }}>
    <Link style={{ color: '#000' }} to="/intro">Begin.</Link>
  </div>
  );

export default StartGameButtonComponent;
