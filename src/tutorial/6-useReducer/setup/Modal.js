import React, { useEffect } from 'react';

const Modal = ({ modalContent, closeModal }) => {

  useEffect(() => {
    // Add a way to close the modal every 3 seconds
    setTimeout(() => {
      closeModal();
    }, 3000);
  })

  return <div className="modal">
    <p>{modalContent}</p>
  </div>;
};

export default Modal;
