import styled from 'styled-components'

export const LoginContainer = styled.div`
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
  box-shadow: 0 0 2rem var(--color-shadow);
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

export const AdminText = styled.h1`
  font-size: 1.25rem;
  font-weight: 500;
  font-family: 'Poppins';
  color: var(--text-get-in);
  padding: 4rem 9.5rem 5rem 4.5rem;
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
