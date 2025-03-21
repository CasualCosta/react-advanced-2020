import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
  }

  useEffect(() => {
    return refContainer.current.focus()
  })
  
  console.log(refContainer.current)
  return (
    <>
      <form className='form' onSubmit={handleSubmit} >
        <div>
          <input type='text' ref={refContainer} />
        </div>
        <button type='submit'>submit</button>
      </form>
    </>
  )
};

export default UseRefBasics;
