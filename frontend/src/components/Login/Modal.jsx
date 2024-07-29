import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom';


const Modal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef(null);

  const handleClose = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };


  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  return createPortal(
    isOpen ? (
      <div className="fixed top-0 left-0 w-full z-[9999999999999] h-full flex items-center justify-center bg-black bg-opacity-40"
      onClick={(e) => handleClose(e)}>
        <div ref={modalRef} className="bg-white sm:w-[400px] md:w-[500px] w-full mx-10 p-5 md:p-8 rounded-[10px]">
          {children}
        </div>
      </div>
    ) : null,
    document.body
  );
};


export default Modal
