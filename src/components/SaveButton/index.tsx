import styled from 'styled-components'

const SaveButton = styled.button`
  width: 25rem;
  height: 2.5rem;
  font-size: 1.125rem;
  color: var(--white);
  font-family: 'Poppins';
  font-weight: 700;
  display: inline;
  border: none;
  outline: 0;
  border-radius: 5px;
  background: var(--save-button-background);
  transition: .3s;
  cursor: pointer;
  &:hover,
  &:focus {
    opacity: .7;
  }
`

export default SaveButton
