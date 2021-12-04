import { format } from 'date-fns'
import api from '../../services/api'
import Swal from 'sweetalert2'
import { useRouter } from 'next/router'
import {
  ScheduleCardContainer,
  MonthContainer,
  IntroMonthContainer,
  Day,
  Month,
  WeekDayContainer,
  WeekDay,
  Hour,
  TrashContainer,
  TrashIcon
} from './styles'

type Schedule = {
  id: string;
  doctorId: string;
  monthDay: string;
  weekDay: string;
  hour: string;
  scheduled: boolean;
}

type ScheduleType = {
  doctor: Schedule[];
}

export default function ScheduleCard(props: ScheduleType) {
  const { doctor } = props
  const router = useRouter()

  async function removeSchedule(id: string, doctorId: string) {
    try {
      await api.delete(`delete-schedule/${id}`)
      router.push({
        pathname: 'doctor-schedule',
        query: {
          id: doctorId,
          deletedSchedule: id
        }
      })
      Swal.fire('Horário retirado da agenda')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {doctor?.map(doc => (
        <ScheduleCardContainer key={doc.id}>
          <MonthContainer>
            <IntroMonthContainer className={doc?.scheduled === false ? 'free' : ''}>
              <Day>{format(new Date(doc?.monthDay), 'dd')}</Day>
              <Month>{doc?.weekDay?.toUpperCase().substring(0, 3)}</Month>
            </IntroMonthContainer>
          </MonthContainer>
          <WeekDayContainer>
            <WeekDay>{doc?.weekDay}</WeekDay>
            <Hour>{doc?.hour}</Hour>
          </WeekDayContainer>
          <TrashContainer onClick={() => removeSchedule(doc?.id, doc?.doctorId)}>
            <TrashIcon />
          </TrashContainer>
        </ScheduleCardContainer>
      ))}
    </>
  )
}
