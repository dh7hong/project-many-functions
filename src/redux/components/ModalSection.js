// ModalSection.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import "../../App.css";

Modal.setAppElement('#root'); // This should be set to your app's root element

const ModalSection = () => {
  const [isFirstModalOpen, setIsFirstModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

  const openFirstModal = () => setIsFirstModalOpen(true);
  const closeFirstModal = () => setIsFirstModalOpen(false);
  
  const openSecondModal = () => setIsSecondModalOpen(true);
  const closeSecondModal = () => setIsSecondModalOpen(false);

  return (
    <div style={{ display: 'flex', gap: '10px', marginBottom: '50px' }}>
      <button className="firstModalButton"
        onClick={openFirstModal}
      >
        Open Modal
      </button>
      <Modal
        isOpen={isFirstModalOpen}
        onRequestClose={closeFirstModal}
        contentLabel="First Modal"
        shouldCloseOnOverlayClick={false}
      >
        <p>There are two buttons, "Close" and "Confirm", and the modal does not close when the outer area is clicked.</p>
        <button onClick={closeFirstModal}>Close</button>
        <button onClick={() => console.log('on!')}>Confirm</button>
      </Modal>

      <button className="secondModalButton"
        onClick={openSecondModal}
        style={{
          borderRadius: '5px',
          width: '200px',
          height: '50px',
          backgroundColor: 'transparent',
          color: 'red',
          borderColor: 'red'
        }}
      >
        Open Modal
      </button>
      <Modal
        isOpen={isSecondModalOpen}
        onRequestClose={closeSecondModal}
        contentLabel="Second Modal"
      >
        <button onClick={closeSecondModal} style={{ float: 'right' }}>&times;</button>
        <p>There is one close button, when you press outside this area, the modal closes.</p>
      </Modal>
    </div>
  );
};

export default ModalSection;
