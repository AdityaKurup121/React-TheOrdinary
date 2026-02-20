import React, { useEffect } from 'react';

/**
 * Modal Component
 * Props: title, message, onClose (function)
 */
function Modal({ title, message, onClose }) {
  useEffect(() => {
    // Add fade-in animation
    const modal = document.querySelector('.modal-overlay');
    if (modal) {
      setTimeout(() => modal.classList.add('show'), 10);
    }
  }, []);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleBackdropClick}>
      <div className="modal-content">
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="modal-close" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          <p>{message}</p>
        </div>
        <div className="modal-footer">
          <button className="modal-btn-close" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
