import styled from 'styled-components'

export const DoctorRegisterContainer = styled.div`
  width: 100vw;
  height: 100vh;
  justify-content: center;
  display: inline-block; 
  background-color: var(--main-background);

  @media screen and (max-width: 63rem) {
    height: 75rem;
  }
`

export const Content = styled.div`
  width: 62.5rem;
  height: 31.25rem;
  border-radius: 0.625rem;
  margin: auto;
  display: flex;
  //box-shadow: 0 0 20px var(--color-shadow);
  box-shadow: 0 0 2em var(--color-shadow);
  background-color: var(--white);

  @media screen and (max-width: 63rem) {
    width: 35.3125rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const SectionLeft = styled.div`
  width: 27.2rem;
  height: 31.25rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  border-radius: 0.625rem 0 0 0.625rem;
  background-color: var(--white);

  @media screen and (max-width: 63rem) {
    margin-bottom: 7rem;
  }
`

export const ContainerLogo = styled.div`
width: 27.2rem;
padding: 3.75rem 10.5rem 0 4.5rem;
`

export const DoctorRegisterText = styled.h1`
  font-size: 1.25rem;
  font-weight: 700;
  font-family: 'Poppins';
  color: var(--text-get-in);
  padding: 2rem 7.5rem 0 4.5rem;
  text-align: center;
  line-height: 1.8rem;
`

export const DoctorText = styled.h1`
  font-size: 1.25rem;
  font-weight: 500;
  font-family: 'Poppins';
  color: var(--text-get-in);
  padding: 1rem 7rem 5rem 4.5rem;
  text-align: center;
  line-height: 1.8rem;
`

export const SectionRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 35.3125rem;
  height: 31.25rem;
  border-radius: 0 0.625rem 0.625rem 0;
  background-color: var(--right-background);

  @media screen and (max-width: 63rem) {
    border-radius: 0.625rem;
  }
`

export const FormRegister = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 35.3125rem;
  height: 31.25rem;
`

export const Select = styled.select`
  width: 25rem;
  height: 2.5rem;
  font-size: 1rem;
  font-family: 'Poppins';
  font-weight: 500;
  text-indent: 2rem;
  border-radius: 5px;
  border: none;
  outline: 0;
  cursor: pointer;
  background: white;
  color: gray;
 
  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`
