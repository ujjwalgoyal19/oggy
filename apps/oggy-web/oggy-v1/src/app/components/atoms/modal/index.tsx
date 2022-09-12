import React from 'react';
import ReactDOM from 'react-dom';
import styled, { css } from 'styled-components';

/* eslint-disable-next-line */
export interface ModalProps {
  Backdrop?: boolean;
  Open: boolean;
  children: JSX.Element | JSX.Element[];
  Close: () => void;
}

interface IOverlay {
  Backdrop?: boolean;
}
const StyledOverlay = styled.div<IOverlay>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export function Modal(props: ModalProps) {
  if (!props.Open) return null;
  return ReactDOM.createPortal(
    <>
      <StyledOverlay onClick={props.Close} />
      {props.children}
    </>,
    document.getElementById('portal') as HTMLElement
  );
}

export default Modal;
