import React from 'react';
import { Link } from 'react-router-dom';
const Error = () => {
  return (
    <div>
      <h1>Page Not Found</h1>
      <Link to='/'><h2>Return Home</h2></Link>
    </div>
  );
};

export default Error;
