import styled from 'styled-components'

export const DoctorAppointmentContainer = styled.div`
  width: 100vw;
  height: 100vh;
  justify-content: center;
  display: inline-block; 
  background-color: var(--main-background);

  @media screen and (max-width: 63rem) {
    height: 105rem;
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
  width: 25rem;
  height: 31.25rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  border-radius: 0.625rem 0 0 0.625rem;
  background-color: var(--white);
  position: relative;
`

export const ContainerLogo = styled.div`
width: 27.2rem;
padding: 2rem 10.5rem 0 3rem;
`

export const DoctorBioText = styled.text`
  font-size: 1.4rem;
  font-weight: 500;
  font-family: 'Poppins';
  color: var(--text-get-in);
  position: absolute;
  left: 5rem;
  top: 17rem;
`

export const DoctorBioContainer = styled.div`
  width: 20rem;
  height: 7.5rem;
  border-radius: 0.625rem;
  box-shadow: 0 0 2em #12C6D2;
  position: absolute;
  left: 3rem;
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

export const DescriptionText = styled.text`
  font-size: 1rem;
  font-weight: 500;
  font-family: 'Poppins';
  color: var(--text-get-in);
  position: absolute;
  left: 7.5rem;
  top: 4rem;
`
export const RightContainer = styled.div`
  width: 37.5rem;
  height: 31.25rem;
  display: flex;
  border-radius: 0 0.625rem 0.625rem 0;
  background-color: var(--white);

  @media screen and (max-width: 63rem) {
    width: 35.3125rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const SectionRight1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 17rem;
  height: 28.75rem;
  border-radius: 0.625rem;
  margin: auto;
  background-color: var(--right-background);

  @media screen and (max-width: 63rem) {
    position: absolute;
    border-radius: 0.625rem;
    top: 69rem;
  }
`

export const DateBar = styled.div`
  width: 17rem;
  height: 1rem;
  display: flex;
  margin: 1rem 0 0.5rem 0;
  border-radius: 0.625rem 0.625rem 0 0;
  justify-content: center;
  background-color: var(--right-background);
`

export const ScrollCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 17rem;
  height: 25rem;
  /* border-radius: 0 0 0.625rem 0; */
  background-color: var(--right-background);
  overflow-y: scroll;

  &::-webkit-scrollbar {
        border: none;
    }
`

export const SectionRight2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 17rem;
  height: 28.75rem;
  margin: auto;
  border-radius: 0.625rem;
  background-color: var(--right-background);

  @media screen and (max-width: 63rem) {
    position: absolute;
    border-radius: 0.625rem;
    top: 39rem;
  }
`

export const TextContainer = styled.div`
  width: 17rem;
  height: 2.75rem;
  display: flex;
  border-radius: 0.625rem 0.625rem 0 0;
  background-color: var(--right-background);
`

export const TitleText = styled.text`
  font-size: 0.875rem;
  font-weight: 700;
  font-family: 'Poppins';
  margin: auto 1.1rem;
  color: var(--text-get-in);
`

export const CalendarContainer = styled.div`
  width: 17rem;
  height: 12.5rem;
  display: flex;
  box-sizing: content-box;
  background-color: var(--right-background);
`

export const HourCardContainer = styled.div`
  width: 17rem;
  height: 10.5rem;
  background-color: var(--right-background);
`

export const ScrollHourContainer = styled.div`
  width: 17rem;
  height: 11.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;
  overflow-y: auto;
  padding: 0.5rem 0.5rem 0.5rem 1.2rem;
  background-color: var(--right-background);

  &::-webkit-scrollbar {
        border: none;
    }
`

export const HourContainer = styled.div`
  width: 2.5rem;
  height: 1.25rem;
  display: flex;
  border-radius: 0.3125rem;
  background-color: ${props => (props.className === 'selected' ? 'var(--save-button-background)' : 'var(--white)')};
  transition: .3s;
  cursor: pointer;
  
  &:hover,
  &:focus {
    background: var(--save-button-background);
    opacity: .7;
  }
`

export const HourText = styled.h1`
  font-size: 0.75rem;
  font-weight: 700;
  font-family: 'Poppins';
  margin: auto;
  color: var(--text-black);
  -webkit-user-select: none;
  `

export const SaveContainer = styled.div`
  width: 17rem;
  height: 3rem;
  display: flex;
  margin: 0.5rem 0.5rem 0 0.5rem;
  background-color: var(--right-background);

  @media screen and (max-width: 63rem) {
    border-radius: 0 0 0.625rem 0.625rem;
  }
`

export const AppointmentButton = styled.button`
  width: 14.1rem;
  height: 1.5rem;
  font-size: 0.75rem;
  color: var(--white);
  font-family: 'Poppins';
  font-weight: 700;
  display: inline;
  border: none;
  border-radius: 0.3125rem;
  margin: 1rem;
  outline: 0;
  background: var(--save-button-background);
  transition: .3s;
  cursor: pointer;
  
  &:hover,
  &:focus {
    opacity: .7;
  }
`
