import styled from 'styled-components'

export const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  justify-content: center;
  display: inline-block; 
  background-color: var(--main-background);
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
    width: 31.25rem;
    height: 31.25rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`

export const SectionLeft = styled.div`
  width: 31.25rem;
  height: 31.25rem;
  border-radius: 0.625rem 0 0 0.625rem;
  display: flex;
  flex-direction: column;
  background-color: var(--white);

  @media screen and (max-width: 63rem) {
    width: 31.25rem;
    height: 31.25rem;
    border-radius: 0.625rem;
  }

`

export const LoginBar = styled.div`
  justify-content: space-between;
  align-items: center;
  width: 31.25rem;
  height: 3.125rem;
  display: flex;
  padding-left: 2.625rem;
  padding-right: 3.125rem;
  margin-top: 0.625rem;
  background: var(--white);
`

export const GetInText = styled.text`
  font-size: 1.4375rem;
  font-weight: 500;
  font-family: 'Poppins';
  color: var(--text-get-in);
  margin: 6.25rem 20rem 0 3.125rem;
  transition: .3s;
`

export const GetInDescription = styled.h1`
  font-size: 1rem;
  font-weight: 500;
  font-family: 'Poppins';
  color: var(--text-bar);
  padding-left: 3.125rem;
`

export const CPFContainer = styled.div`
  width: 28.125rem;
  display: flex;
  justify-content: space-between;
`

export const CPFInput = styled.input`
  width: 21.875rem;
  margin-left: 3.125rem;
  padding-top: 1.875rem;
  font-size: 1rem;
  font-family: 'Roboto';
  outline: 0;
  border-width: 0 0 1px;
  border-color: var(--input-border-login);
  
  &::placeholder {
       color: var(--cpf-placeholder);
   }
`

export const CPFIconContainer = styled.div`
  width: 3.125rem;
  padding-top: 1.25rem;
  padding-left: 1.25rem;
  border-style: solid;
  outline: 0;
  border-width: 0 0 1px;
  border-color: var(--input-border-login);
`

export const CPFIcon = styled.img`
  width: 1.5625rem;
  height: 1.5625rem;
`

export const PasswordContainer = styled.div`
  width: 28.125rem;
  display: flex;
  justify-content: space-between;
`

export const PasswordInput = styled.input`
  width: 25rem;
  margin-left: 3.125rem;
  padding-top: 1.875rem;
  font-size: 1rem;
  font-family: 'Roboto';
  outline: 0;
  border-width: 0 0 1px;
  border-color: var(--input-border-login);
  
  &::placeholder {
       color: var(--input-placeholder);
   }
`

export const PasswordIconContainer = styled.div`
  width: 3.125rem;
  padding-top: 1.25rem;
  padding-left: 1.25rem;
  border-style: solid;
  outline: 0;
  border-width: 0 0 1px;
  border-color: var(--input-border-login);
`

export const PasswordIcon = styled.img`
  width: 1.5625rem;
  height: 1.5625rem;
`

export const ForgotPassword = styled.h1`
  font-size: 0.9375rem;
  font-weight: 500;
  font-family: 'Poppins';
  color: var(--input-placeholder);
  text-align: end;
  padding-right: 3.125rem;
  padding-bottom: 0.625rem;
  transition: .3s;
  cursor: pointer;
  &:hover {
    color: var(--text-bar);
  }
`

export const LoginButton = styled.button`
  width: 25rem;
  height: 2.125rem;
  font-size: 1.125rem;
  color: var(--white);
  font-family: 'Poppins';
  font-weight: 700;
  margin-left: 3.125rem;
  display: inline;
  border: none;
  border-radius: 5px;
  outline: 0;
  background: linear-gradient(45deg, var(--login-button-left), var(--login-button-right));
  transition: .3s;
  cursor: pointer;
  &:hover,
  &:focus {
    opacity: .7;
  }
`

export const SectionRight = styled.div`
  width: 31.25rem;
  height: 31.25rem;
  border-radius: 0 0.625rem 0.625rem 0;
  display: flex;
  background-color: var(--white);
  background-image: url('/images/backLogin.png');

  @media screen and (max-width: 63rem) {
    display: none;
  }
`
