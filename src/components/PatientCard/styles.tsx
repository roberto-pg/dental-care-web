import styled from 'styled-components'
import { CheckboxChecked } from 'styled-icons/boxicons-solid'

export const PatientCardContainer = styled.div`
width: 20rem;
height: 3rem;
display: flex;
border-radius: 0.4rem;
margin: 1rem auto 0 auto;
background-color: var(--right-background);
transition: 0.3s;
cursor: pointer;

&:hover {
      opacity: 0.8;
    }
`

export const LeftContainer = styled.div`
  width: 17rem;
  height: 3rem;
  display: flex;
  flex-direction: column;
  border-radius: 0.4rem 0 0 0.4rem; 
  background-color: var(--login-button-right);
`

export const PacientListTitle = styled.h1`
  font-size: 0.875rem;
  font-weight: 500;
  font-family: 'Poppins';
  padding: 0.4rem 0 0 1rem;
  line-height: 0;
  color: var(--text-bar);
`

export const PacientListSubtitle = styled.h1`
  font-size: 0.75rem;
  font-weight: 500;
  font-family: 'Poppins';
  padding-left: 1rem;
  line-height: 0;
  color: var(--text-bar);
`

export const Checked = styled(CheckboxChecked)`
  width: 2.5rem;
  height: 2.5rem;
  margin: auto;
  color: ${props => (props.className === 'free' ? 'var(--free)' : 'var(--not-free)')};
`

export const RightContainer = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;
  border-radius: 0 0.4rem 0.4rem 0;
  background-color: var(--right-background);
`
