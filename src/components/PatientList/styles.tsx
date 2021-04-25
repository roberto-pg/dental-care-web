import styled from 'styled-components'
import { CheckboxChecked } from 'styled-icons/boxicons-solid'

export const DoctorProfileContainer = styled.div`
  width: 100vw;
  height: 100vh;
  justify-content: center;
  display: inline-block; 
  background-color: var(--main-background);

  @media screen and (max-width: 63rem) {
    height: 70rem;
  }
`

export const Content = styled.div`
  width: 62.5rem;
  height: 31.25rem;
  border-radius: 0.625rem;
  margin: auto;
  display: flex;
  box-shadow: 0 0 2rem var(--color-shadow);
  background-color: var(--right-background);

  @media screen and (max-width: 63rem) {
    width: 35.3125rem;
    height: 60rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const SectionLeft = styled.div`
  width: 25.625rem;
  height: 27rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  border-radius: 0.625rem;
  background-color: var(--white);
  margin: auto 1.875rem auto 3.75rem;

  @media screen and (max-width: 63rem) {
    margin: auto;
  }
`

export const LeftSubtitleContainer = styled.div`
  width: 25.625rem;
  height: 5rem;
  display: flex;
  flex-direction: column;
  border-radius: 0.625rem 0.625rem 0 0;
  background-color: var(--white);
`
export const PatientListTitle = styled.text`
  font-size: 1.25rem;
  font-weight: 700;
  padding: 1rem 0 0 2.5rem;
  font-family: 'Poppins';
  color: var(--text-get-in);
`

export const PatientListSubtitle = styled.text`
  font-size: 0.875rem;
  font-weight: 700;
  font-family: 'Poppins';
  padding: 0.5rem 0 0 2.5rem;
  color: var(--text-get-in);
`

export const ScrollContainer = styled.div`
  width: 25.625rem;
  height: 21rem;
  overflow-y: scroll;
`

export const LeftBottomContainer = styled.div`
  width: 25.625rem;
  height: 1rem;
  border-radius: 0 0 0.625rem 0.625rem;
  background-color: var(--white);
`

export const SectionRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25.625rem;;
  height: 27rem;
  border-radius: 0.625rem;
  background-color: var(--white);
  margin: auto 3.75rem auto 1.875rem;

  @media screen and (max-width: 63rem) {
    margin: auto;
  }
`

export const RightSubtitleContainer = styled.div`
  width: 25.625rem;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  border-radius: 0.625rem 0.625rem 0 0;
  background-color: var(--white);
`
export const PatientDataTitle = styled.h1`
  font-size: 1.25rem;
  font-weight: 600;
  font-family: 'Poppins';
  padding: 2rem 0 0 2rem;
  color: var(--text-get-in);
`

export const Checked = styled(CheckboxChecked)`
  width: 2rem;
  height: 2rem;
  margin: 2.2rem 1.6rem 0 2rem;
  display: ${props => (props.display === 'no' ? 'none' : '')};
  color: ${props => (props.className === 'free' ? 'var(--free)' : 'var(--not-free)')};
`

export const MiddleContainer1 = styled.div`
  display: flex;
  width: 25.625rem;
  height: 13rem;
  display: flex;
  background-color: var(--white);
`

export const LeftMiddleContainer1 = styled.div`
  width: 7rem;
  height: 15rem;
  display: flex;
  flex-direction: column;
  background-color: var(--white);
`

export const NameLabel = styled.h1`
  font-size: 0.875rem;
  font-weight: 600;
  font-family: 'Poppins';
  padding: 0.5rem 0 0 2rem;
  color: var(--text-get-in);
`

export const EmailLabel = styled.h1`
  font-size: 0.875rem;
  font-weight: 600;
  font-family: 'Poppins';
  padding-left: 2rem;
  color: var(--text-get-in);
`

export const CpfLabel = styled.h1`
  font-size: 0.875rem;
  font-weight: 600;
  font-family: 'Poppins';
  padding-left: 2rem;
  color: var(--text-get-in);
`

export const PlainLabel = styled.h1`
  font-size: 0.875rem;
  font-weight: 600;
  font-family: 'Poppins';
  padding-left: 2rem;
  color: var(--text-get-in);
`

export const NumberLabel = styled.h1`
  font-size: 0.875rem;
  font-weight: 600;
  font-family: 'Poppins';
  padding-left: 2rem;
  color: var(--text-get-in);
`

export const RightMiddleContainer1 = styled.div`
  width: 18.625rem;
  height: 15rem;
  display: flex;
  flex-direction: column;
  background-color: var(--white);
`

export const PatientDataContainer = styled.div`
  width: 16.5rem;
  height: 1.7rem;
  display: flex;
  border-bottom: 1px solid;
  border-color: var(--input-border-login);
`

export const PatientDataText = styled.h1`
  font-size: 0.875rem;
  font-weight: 500;
  font-family: 'Poppins';
  margin-top: 0.6rem;
  color: var(--text-get-in);
`

export const MiddleContainer2 = styled.div`
  width: 25.625rem;
  height: 4rem;
  display: none;
  display: ${props => (props.className === 'no' ? 'none' : 'flex')};
  background-color: var(--white);
`

export const ActiveLabel = styled.h1`
  font-size: 1rem;
  font-weight: 700;
  font-family: 'Poppins';
  padding: 0.5rem 0 0 2rem;
  color: var(--text-get-in);
`

export const YesButton = styled.button`
  width: 3.125rem;
  height: 1.5625rem;
  background-color: var(--save-button-background);
  font-size: 0.875rem;
  color: var(--white);
  font-family: 'Poppins';
  font-weight: 700;
  margin: 1.2rem 0 0 2rem;
  display: inline;
  border: none;
  border-radius: 5px;
  outline: 0;
  transition: .3s;
  cursor: pointer;
  &:hover,
  &:focus {
    opacity: .7;
  }
`

export const RightBottomContainer = styled.div`
  width: 25.625rem;
  height: 5rem;
  display: ${props => (props.className === 'no' ? 'none' : 'flex')};
  border-radius: 0 0 0.625rem 0.625rem;
  background-color: var(--white);
`

export const DeleteButton = styled.button`
  width: 25.625rem;
  height: 1.5625rem;
  background-color: var(--save-button-background);
  font-size: 0.875rem;
  color: var(--white);
  font-family: 'Poppins';
  font-weight: 700;
  margin: auto 2rem auto 1.875rem;
  border: none;
  border-radius: 5px;
  outline: 0;
  transition: .3s;
  cursor: pointer;
  &:hover,
  &:focus {
    opacity: .7;
  }
`
