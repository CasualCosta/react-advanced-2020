import React, { useState } from 'react';

const UseStateObject = () => {
//   const [person, setPerson] = useState({
//     name: 'john',
//     age: 20,
//     message: 'heya!'
//   })
//   const changeMessage = () => {
//     setPerson({
//       ...person,
//       message: 'heya!'
//     })
//   }

  const [name, setName] = useState('Michael')
  const [age, setAge] = useState(12)
  const [message, setMessage] = useState("Howdy!")

  const changeMessage = () => {
    setMessage("Hello!")
  }
  return (
    <>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h4>{message}</h4>
      <button className='btn' onClick={changeMessage}>change message</button>
    </>
  )
};

export default UseStateObject;
