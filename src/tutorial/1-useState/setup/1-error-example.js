import React from 'react';

const ErrorExample = () => {
  let title = 'Original Title'

  const RandomizeTitle = () =>{
    title = 'Another Title'
    alert("Title changed. New title is: " + title)
  }
  return(
    <>
     <h2>{title}</h2>;
     <button type="button" className='btn' onClick={RandomizeTitle}>Randomize Title</button>
    </>
  )
};

export default ErrorExample;
