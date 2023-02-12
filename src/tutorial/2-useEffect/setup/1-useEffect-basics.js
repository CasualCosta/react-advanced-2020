import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if(value < 1)
      return;
    document.title = `New messages (${value})`
  })

  return (
    <>
      <h3>New messages:</h3>
      <h1>{value}</h1> 
      <button className='btn' onClick={() => setValue(value + 1)}>Message me</button>
    </>
  )
};

export default UseEffectBasics;
