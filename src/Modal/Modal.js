// Modal.js

import React, { useRef } from 'react';
import styled from 'styled-components';

function Modal(props) {
  const { show, onClose, title, children } = props;
  const modalRef = useRef(null);

  const showButtons = true;

  return (
    <ModalContainer show={show}>
      <ModalContent ref={modalRef}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <h1>{title}</h1>
        {children}
        {showButtons && ( // 버튼을 표시할지 여부에 따라 조건부 렌더링
          <>
            <ModalButton onClick={onClose}>확인</ModalButton>
            <ModalButton onClick={onClose}>취소</ModalButton>
          </>
        )}
      </ModalContent>
    </ModalContainer>
  );
}
const ModalContainer = styled.div`
  display: ${props => (props.show ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  border-radius: 5px;
  width: 390px;
  height: 180px;
`;

const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  color: #333;
`;

const ModalButton = styled.button`
  width: 80px;
  height: 40px;
  background-color: black;
  color: white;
  border: 1px solid white;
  border-radius: 20px;
  cursor: pointer;
`;
export default Modal;