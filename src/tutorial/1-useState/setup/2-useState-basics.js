import React, { useState } from 'react';

const UseStateBasics = () => {

  const [text, setText] = useState("Hello World!")

  let isChanged = false
  const ChangeTitle = () =>{
    if(isChanged) {
      setText("Olá Mundo!")
      isChanged = false
    } else {
      setText("Hello World!");
      isChanged = true;
    }
  }
  return (
    <>
      <h2>{text}</h2>;
      <button type="button" className='btn' onClick={ChangeTitle}>Change Title</button>
    </>
  )
};

export default UseStateBasics;
