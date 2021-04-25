import styled from 'styled-components'

export const Input = styled.input`
  width: 25rem;
  height: 2.5rem;
  font-size: 1rem;
  font-family: 'Poppins';
  font-weight: 500;
  color: var(--text-bar);
  text-indent: 2rem;
  border-radius: 5px;
  border: none;
  outline: 0;
  cursor: pointer;
  
  &::placeholder {
       color: var(--input-placeholder);
   }
`

export const Input2 = styled.input`
  display: none;
`

export const Label = styled.label`
  background-color: var(--white);
  border-radius: 5px;
  color: var(--text-bar);
  font-family: 'Poppins';
  font-weight: 500;
  width: 400px;
  text-indent: 2rem;
  cursor: pointer;
  margin: 30px;
  padding: 10px 0px;
`
