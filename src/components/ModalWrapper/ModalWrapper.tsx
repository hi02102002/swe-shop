import React from 'react';
import { createPortal } from 'react-dom';
import { StyledModalWrapper } from './style';

const modal = document.querySelector('#modal') as Element;

const ModalWrapper: React.FC = ({ children }) => {
   return createPortal(
      <StyledModalWrapper>{children}</StyledModalWrapper>,
      modal
   );
};

export default ModalWrapper;
