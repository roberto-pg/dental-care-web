import styled from 'styled-components'

export const DoctorCardContainer = styled.div`
width: 8rem;
height: 8rem;
display: inline;
padding: 0;
border-radius: 0.625rem;
background: white;
cursor: pointer;

&:hover {
      opacity: 0.7;
    }
`

export const SpecialtyText = styled.h1`
  font-size: 0.625rem;
  font-weight: bold;
  font-family: 'Poppins';
  color: var(--text-bar);
  text-align: center;
  line-height: 0.4rem;
`

export const DoctorNameText = styled.h1`
  font-size: 0.625rem;
  font-weight: bold;
  font-family: 'Poppins';
  color: var(--text-bar);
  text-align: center;
`

export const ImageDoctor = styled.img`
  width: 4.5rem;
  height: 4.5rem;
  margin: 0.2rem 1.7rem 0 1.7rem;
`
