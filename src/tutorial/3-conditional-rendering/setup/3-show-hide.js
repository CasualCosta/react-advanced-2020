import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(false)
  return (
    <>
      <button className='btn' onClick={() => setShow(!show)}>{show ? 'hide' : 'show'}</button>
      {show && <Item />}
    </>
  )
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth)
  const checkSize = () => setSize(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', checkSize)

    return (() => window.removeEventListener('resize', checkSize))
  }, [])

  return (
    <>
      <h2>window size</h2>
      <h1>{size}</h1>
    </>
  )
}

export default ShowHide;
