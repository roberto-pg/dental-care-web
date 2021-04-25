import Modal from 'styled-react-modal'
import styled from 'styled-components'

export const ModalContact = Modal.styled`
  width: 23rem;
  height: 23rem;
  background-image: url('/images/backModal.png');
`

export const ModalBase = styled.div`
  width: 23rem;
  height: 23rem;
  display: flex;
  flex-direction: column;
  background-color: transparent;
`

export const ModalText = styled.text`
  font-size: 1rem;
  font-weight: 700;
  font-family: 'Poppins';
  color: var(--text-get-in);
  margin-left: 3rem;
  line-height: 1.2rem;
`

export const ExitButton = styled.button`
  width: 6.25rem;
  height: 1.5625rem;
  font-size: 0.9375rem;
  color: var(--white);
  font-family: 'Poppins';
  font-weight: 600;
  margin-top: 0.8rem;
  text-justify: center;
  border: none;
  outline: 0;
  border-radius: 0.3125rem;
  background: linear-gradient(45deg, var(--exit-button-left), var(--exit-button-right));
  transition: .3s;
  cursor: pointer;
  &:hover,
  &:focus {
    opacity: .7;
  }
`
