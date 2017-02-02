import React from 'react';
import { Link } from 'react-router';

const StartGameButtonComponent = () => {
  return (
    <div>
      <Link to="/intro">Begin your journey.</Link>
    </div>
  );
};

export default StartGameButtonComponent;
