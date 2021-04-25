import styled from 'styled-components'

export const NavBar = styled.div`
  width: 68.75rem;
  height: 3.125rem;
  margin: 1.25rem auto;
  display: flex;
  justify-content: space-between;
  background-color: var(--main-background);

  @media screen and (max-width: 75rem) {
    width: 60rem;
  }

  @media screen and (max-width: 63rem) {
    width: 31.25rem;
    justify-content: center;
  }
`

export const ContainerButton = styled.div`
  display: flex;
`

export const NavText = styled.h3`
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-bar);
  font-family: 'Poppins';
  margin: auto;
  padding-right: 2.5rem;
  transition: .3s;
  cursor: pointer;
  &:hover {
    opacity: .7;
  }

  @media screen and (max-width: 63rem) {
    padding-right: 1rem;
  }
`

export const ExitButton = styled.button`
  width: 6.25rem;
  height: 1.5625rem;
  font-size: 0.9375rem;
  color: var(--white);
  font-family: 'Poppins';
  font-weight: 600;
  margin: auto;
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
