import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { useEffect } from 'react';
import { duration } from '@mui/material';

/* eslint-disable-next-line */
export interface ModalProps {
  Backdrop?: boolean;
  Animation?: 'Blur' | 'GrowFromBottom' | 'EmergeFromTop';
  Open: boolean;
  children: JSX.Element | JSX.Element[];
  Close: () => void;
}

interface IOverlay {
  Backdrop?: boolean;
}
const StyledOverlay = styled.div<IOverlay>`
  background-color: rgba(black, 0.8);
  /* backdrop-filter: blur(0.2rem); */
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10000;
`;

const StyledModal = styled.div`
  height: fit-content;
  width: fit-content;
  position: fixed;
  bottom: 0;
  z-index: 10001;
`;

export function Modal(props: ModalProps) {
  useEffect(() => {
    if (props.Open && props.Animation === 'GrowFromBottom') {
      gsap.fromTo(
        '.grow-from-bottom',
        { y: '100%' },
        { y: '0%', ease: 'Power2.easeInOut' }
      );
    }
  }, [props.Open]);

  if (!props.Open) return null;
  return ReactDOM.createPortal(
    <>
      <StyledOverlay onClick={props.Close} />
      <StyledModal
        className={
          props.Animation &&
          {
            GrowFromBottom: 'grow-from-bottom',
            EmergeFromTop: 'emerge-from-top',
            Blur: 'blur',
          }[props.Animation]
        }
      >
        {props.children}
      </StyledModal>
    </>,
    document.getElementById('portal') as HTMLElement
  );
}

export default Modal;
