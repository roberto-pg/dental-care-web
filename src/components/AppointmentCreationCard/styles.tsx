import styled from 'styled-components'

export const AppointmentCreationCardContainer = styled.div`
  width: 25rem;
  height: 6.5rem;
  display: flex;
  border-radius: 1.25rem;
  align-items: center;
  margin: 1rem;
  background-color: var(--white);
  box-shadow: 0 0 0.5em var(--color-shadow);

  &:hover {
    border: 1px solid;
    border-color: var(--text-bar);
  }
`
export const CardSectionLeft = styled.div`
  display: flex;
  width: 6.5rem;
  height: 6.3rem;
  border-radius: 1.25rem 0 0 1.25rem;
  background-color: var(--white);
`

export const MonthDayContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 5.3rem;
  height: 5.3rem;
  align-items: center;
  justify-content: center;
  border-radius: 1.25rem;
  margin: auto 0 auto 0.5rem;
  background-color: ${props => (props.className === 'free' ? 'var(--free)' : 'var(--not-free)')};
`

export const Day = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  font-family: 'Poppins';
  color: var(--white);
  margin: 0;
`

export const Month = styled.h1`
  font-size: 1.125rem;
  font-weight: 700;
  font-family: 'Poppins';
  color: var(--white);
  margin: 0;
`

export const CardSectionRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 18rem;
  height: 6.3rem;
  border-radius: 0 1.25rem 1.25rem 0;
  background-color: var(--white);
`

export const WeekDayContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 18rem;
  height: 2rem;
  border-radius: 0 1.25rem 0 0;
  background-color: var(--white);
`

export const WeekDayText = styled.h1`
  font-size: 0.8125rem;
  font-weight: 700;
  font-family: 'Poppins';
  color: var(--text-get-in);
  padding: auto;
`

export const EditButton = styled.button`
  width: 3.5rem;
  height: 1.25rem;
  background-color: var(--save-button-background);
  font-size: 0.75rem;
  color: var(--white);
  font-family: 'Poppins';
  font-weight: 700;
  margin: 0.5rem 1rem 0 2rem;
  border: none;
  border-radius: 5px;
  outline: 0;
  transition: .3s;
  cursor: pointer;
  display: ${props => (props.className === 'true' ? 'inline' : 'none')};
  
  &:hover,
  &:focus {
    opacity: .7;
  }
`

export const SaveButton = styled.button`
  width: 3.5rem;
  height: 1.25rem;
  background-color: var(--save-button-background);
  font-size: 0.75rem;
  color: var(--white);
  font-family: 'Poppins';
  font-weight: 700;
  margin: 0.5rem 1rem 0 0;
  border: none;
  border-radius: 5px;
  outline: 0;
  transition: .3s;
  cursor: pointer;
  display: ${props => (props.className === 'true' ? 'inline' : 'none')};
  
  &:hover,
  &:focus {
    opacity: .7;
  }
`

export const CancelButton = styled.button`
  width: 4.3rem;
  height: 1.25rem;
  background-color: var(--save-button-background);
  font-size: 0.75rem;
  color: var(--white);
  font-family: 'Poppins';
  font-weight: 700;
  margin: 0.5rem 0 0 0;
  border: none;
  border-radius: 5px;
  outline: 0;
  transition: .3s;
  cursor: pointer;
  display: ${props => (props.className === 'true' ? 'inline' : 'none')};
  
  &:hover,
  &:focus {
    opacity: .7;
  }
`

export const ClearButton = styled.button`
  width: 6rem;
  height: 1.35rem;
  background-color: var(--save-button-background);
  font-size: 0.875rem;
  color: var(--white);
  font-family: 'Poppins';
  font-weight: 700;
  margin: 0.5rem 1rem 0 2rem;
  border: none;
  border-radius: 5px;
  outline: 0;
  transition: .3s;
  cursor: pointer;
  display: ${props => (props.className === 'true' ? 'inline' : 'none')};
  
  &:hover,
  &:focus {
    opacity: .7;
  }
`

export const BottomContainer = styled.div`
  display: flex;
  width: 18rem;
  height: 4rem;
  border-radius: 0 0 1.25rem 0;
  background-color: var(--white);
`

export const PatientDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 4.3rem;
  height: 4rem;
  background-color: var(--white);
`

export const PatientTextLabel = styled.text`
  font-size: 0.75rem;
  font-weight: 700;
  font-family: 'Poppins';
  color: var(--text-get-in);
`

export const DataInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 16.8125rem;
  height: 4rem;
  border-radius: 0 0 1.25rem 0;
  background-color: var(--white);
`

export const PatientInput = styled.input`
  width: 12.5rem;
  border-width: 0 0 1px;
  outline: 0;
  border-color: var(--input-border-login);
  margin-left: 0.5rem;
  &::placeholder {
       color: var(--text-black);
   }
`

export const PlainInput = styled.input`
  width: 12.5rem;
  border-width: 0 0 1px;
  outline: 0;
  border-color: var(--input-border-login);
  margin-left: 0.5rem;
  display: ${props => (props.className === 'showPlain' ? 'flex' : 'none')};
  &::placeholder {
       color: var(--text-black);
   }
`

export const CardInput = styled.input`
  width: 12.5rem;
  border-width: 0 0 1px;
  outline: 0;
  border-color: var(--input-border-login);
  margin-left: 0.5rem;
  &::placeholder {
       color: var(--text-black);
   }
`

export const Select = styled.select`
  width: 12.5rem;
  font-size: 0.8rem;
  font-family: 'Poppins';
  font-weight: 500;
  text-indent: 0.4rem;
  border-radius: 5px;
  border: none;
  outline: 0;
  cursor: pointer;
  background: white;
  color: gray;
  display: ${props => (props.className === 'notFree' ? 'none' : 'flex')};
 
  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`
