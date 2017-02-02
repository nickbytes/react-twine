import React from 'react';
import { Link } from 'react-router';

const StartGameButtonComponent = () => {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <Link to="/intro">Begin your journey.</Link>
    </div>
  );
};

export default StartGameButtonComponent;
