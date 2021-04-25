import styled from 'styled-components'

const ContainerLogo = styled.div`
  width: 9.375rem;
  display: flex;

  @media screen and (max-width: 63rem) {
    width: 7.5rem;
    margin-right: 1rem;
  }
`

const ImageLogo = styled.img`
  width: 1.875rem;
  height: 1.875rem;
  margin: auto;

  @media screen and (max-width: 63rem) {
    width: 1.675rem;
    height: 1.675rem;
  }
`

const Company = styled.h2`
  font-size: 0.9375rem;
  font-family: 'Poppins';
  margin: auto;
  background: -webkit-linear-gradient(left, var(--company-left) 70%, var(--company-right) 0%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: 63rem) {
    font-size: 0.75rem;
  }
`

export {
  ContainerLogo,
  ImageLogo,
  Company
}
