import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [name, setName] = useState("John Doe")
  const [isError, setIsError] = useState(false)
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';
  const condition = true
  const myVariable = condition ? 'condition is true' : 'condition is false'

  return (
    <>
      {isError && <h2>Error found.</h2>}
      <button className='btn' onClick={(() => {setIsError(!isError)})}>toggle error</button>
      {isError ?
      <h3>There is an error.</h3> :
      <h3>There is no error.</h3>}
    </>
  )
};

export default ShortCircuit;
