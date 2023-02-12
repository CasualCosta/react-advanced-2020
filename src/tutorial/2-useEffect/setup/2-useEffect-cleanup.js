import { cleanup } from '@testing-library/react';
import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', () => setSize(window.innerWidth))
    
    // return (() => {
    //   console.log("Clean up function.")
    // })
  }, [])

  return (
    <>
      <h3>width</h3>
      <h1>{size}</h1>
    </>
  )
};

export default UseEffectCleanup;
