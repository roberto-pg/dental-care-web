import styled from 'styled-components'
import Calendar from 'react-calendar'

export const StyledCalendar = styled(Calendar)`
  width: 14rem;
  height: 12rem;
  display: flex;
  flex-direction: column;
  margin: 0 2rem 0 1rem;
  align-items: center;
  font-size: 0.4rem;
  background: white;
  border: 1px solid var(--right-background);
  border-radius: 0.5rem;
  font-family: 'Poppins';

.react-calendar--doubleView {
  width: 700px;
}
.react-calendar--doubleView .react-calendar__viewContainer {
  display: flex;
  margin: auto;
}
.react-calendar--doubleView .react-calendar__viewContainer > * {
  width: 12rem;
  margin: auto;
}

*,
*:before,
*:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
button {
  margin: 0;
  border: 0;
  font-size: 0.7rem;
  font-weight: bold;
  outline: none;
}
button:enabled:hover {
  cursor: pointer;
}
.react-calendar__navigation {
  height: 1.5rem;
}
.react-calendar__navigation button {
  min-width: 1.5rem;
  background: none;
}
.react-calendar__navigation button:enabled:hover,
.react-calendar__navigation button:enabled:focus {
  background-color: #e6e6e6;
}
.react-calendar__navigation button[disabled] {
  background-color: #f0f0f0;
}
.react-calendar__month-view__weekdays {
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.45rem;
}
.react-calendar__month-view__weekdays__weekday {
  /* padding: 0.5em; */
}
.react-calendar__month-view__weekNumbers {
  /* font-weight: bold; */
}
.react-calendar__month-view__weekNumbers .react-calendar__tile {
  display: flex;
  align-items: center;
  justify-content: center;
  /* font-size: 0.75em; */
  /* padding: calc(0.75em / 0.75) calc(0.5em / 0.75); */
}

.react-calendar__month-view__days__day {
  /* color: black;
  font-weight: 700; */
}

.react-calendar__month-view__days__day--weekend {
  color: #d10000;
}
.react-calendar__month-view__days__day--neighboringMonth {
  color: #76baff;
}
.react-calendar__year-view .react-calendar__tile,
.react-calendar__decade-view .react-calendar__tile,
.react-calendar__century-view .react-calendar__tile {
  padding: 0 0;
}
.react-calendar__tile {
  max-width: 12rem;
  font-size: 0.55rem;
  text-align: center;
  /* padding: 0.75em 0.5em; */
  background: none;
}
.react-calendar__tile:disabled {
  background-color: #f0f0f0;
}
.react-calendar__tile:enabled:hover,
.react-calendar__tile:enabled:focus {
  background-color: #e6e6e6;
}
.react-calendar__tile--now {
  background: #ffff76;
}
.react-calendar__tile--now:enabled:hover,
.react-calendar__tile--now:enabled:focus {
  background: #ffffa9;
}
.react-calendar__tile--hasActive {
  background: #76baff;
}
.react-calendar__tile--hasActive:enabled:hover,
.react-calendar__tile--hasActive:enabled:focus {
  background: #a9d4ff;
}
.react-calendar__tile--active {
  background: #006edc;
  color: white;
}
.react-calendar__tile--active:enabled:hover,
.react-calendar__tile--active:enabled:focus {
  background: #1087ff;
}
.react-calendar--selectRange .react-calendar__tile--hover {
  background-color: #e6e6e6;
}
`
