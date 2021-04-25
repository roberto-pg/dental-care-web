import styled from 'styled-components'
import { DeleteForever } from '@styled-icons/material-rounded/DeleteForever'

export const ScheduleCardContainer = styled.div`
  width: 12rem;
  height: 3rem;
  display: flex;
  border-radius: 0.4rem;
  margin: 0.5rem;
  background-color: var(--white);
`

export const MonthContainer = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;
  border-radius: 0.4rem 0 0 0.4rem;
  background-color: var(--white);
`
export const IntroMonthContainer = styled.div`
  width: 2.2rem;
  height: 2.2rem;
  display: flex;
  margin: auto;
  flex-direction: column;
  border-radius: 0.4rem;
  background-color: ${props => (props.className === 'free' ? 'var(--free)' : 'var(--not-free)')};
`

export const Day = styled.h1`
  font-size: 0.75rem;
  font-weight: 600;
  font-family: 'Poppins';
  color: black;
  margin: 0 auto;
`

export const Month = styled.h1`
  font-size: 0.625rem;
  font-weight: 600;
  font-family: 'Poppins';
  color: black;
  margin: 0 auto;
`

export const WeekDayContainer = styled.div`
  width: 7rem;
  height: 3rem;
  display: flex;
  flex-direction: column;
  background-color: var(--white);
`

export const WeekDay = styled.h1`
  font-size: 0.6875rem;
  font-weight: 700;
  font-family: 'Poppins';
  color: black;
  margin: 0.3rem 0 0 1rem;
`

export const Hour = styled.h1`
  font-size: 0.6875rem;
  font-weight: 700;
  font-family: 'Poppins';
  color: black;
  margin: 0 1rem;
`

export const TrashContainer = styled.div`
  width: 2rem;
  height: 3rem;
  display: flex;
  border-radius: 0 0.4rem 0.4rem 0;
  background-color: var(--white);
`

export const TrashIcon = styled(DeleteForever)`
  width: 1.5rem;
  height: 1.5rem;
  margin: 0.4rem auto;
  color: var(--text-bar);
  transition: .5s;
  cursor: pointer;

  &:hover {
    background: var(--save-button-background);
  }
`
