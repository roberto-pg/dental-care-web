import styled from 'styled-components'

export const AppointmentCreateContainer = styled.div`
  width: 100vw;
  height: 100vh;
  justify-content: center;
  display: flex;
  background-color: var(--main-background);

  @media screen and (max-width: 63rem) {
    height: 75rem;
  }
`

export const SectionLeft = styled.div`
  width: 25rem;
  height: 31.25rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 1.5rem 0 auto 2rem;
  border-radius: 0.625rem;
  background-color: var(--white);
  box-shadow: 0 0 2em var(--color-shadow);
  position: relative;
`

export const ContainerLogo = styled.div`
width: 24.2rem;
padding: 2rem 0 0 2rem;
`

export const DoctorBioContainer = styled.div`
  width: 20rem;
  height: 7.5rem;
  border-radius: 0.625rem;
  box-shadow: 0 0 2em #12C6D2;
  position: absolute;
  left: 2rem;
  top: 6.5rem;
`

export const ImageDoctor = styled.img`
  width: 5.5rem;
  height: 5.5rem;
  position: absolute;
  left: 1rem;
  top: 1rem;
`

export const DoctorNameText = styled.text`
  font-size: 1rem;
  font-weight: 700;
  font-family: 'Poppins';
  color: var(--text-get-in);
  position: absolute;
  left: 7.5rem;
  top: 2rem;
`

export const SpecialtyText = styled.text`
  font-size: 1rem;
  font-weight: 500;
  font-family: 'Poppins';
  color: var(--text-get-in);
  position: absolute;
  left: 7.5rem;
  top: 4rem;
`

export const ChoiseDateText = styled.h1`
  font-size: 1.25rem;
  font-weight: 700;
  font-family: 'Poppins';
  color: var(--text-get-in);
  position: absolute;
  left: 2rem;
  top: 16rem;
`

export const ChoiseDateContainer = styled.div`
  width: 15rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: start;
  background-color: var(--white);
  position: absolute;
  left: 2rem;
  top: 19rem;
`

export const HomeText = styled.text`
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-bar);
  font-family: 'Poppins';
  transition: .3s;
  position: absolute;
  left: 2rem;
  top: 28rem;
  cursor: pointer;
  &:hover {
    opacity: .7;
  }
`

export const CreateText = styled.text`
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-bar);
  font-family: 'Poppins';
  transition: .3s;
  position: absolute;
  right: 3rem;
  top: 28rem;
  cursor: pointer;
  &:hover {
    opacity: .7;
  }
`

export const SectionRight = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 55rem;
  height: 93%;
  border-radius: 0.625rem;
  background-color: var(--white);
  position: relative;
  margin: auto;
  padding: 1rem;
  box-shadow: 0 0 2em var(--color-shadow);
  overflow-y: scroll;

  &::-webkit-scrollbar {
        border: none;
    }

  @media screen and (max-width: 63rem) {
    position: absolute;
    border-radius: 0.625rem;
    top: 39rem;
  }
`
