import React, { useEffect } from 'react';

const Modal = ({modalContent, closeModal }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 1500);
  })
  return (
    <div className='modal'>
      <p> {modalContent} </p>
    </div>
  )
};

export default Modal;
