import { format, formatISO } from 'date-fns'
import pt from 'date-fns/locale/pt'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { FormEvent, useEffect, useState } from 'react'
import 'react-calendar/dist/Calendar.css'
import DatePicker, { registerLocale } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Swal from 'sweetalert2'
import api from '../../services/api'
import { hoursList } from '../../utils/hoursList'
import { StyledCalendar } from '../DoctorCalendar/styles'
import Logo from '../Logo'
import { DoctorProfileNavBar } from '../NavBar'
import ScheduleCard from '../ScheduleCard'
import {
  AppointmentButton, CalendarContainer, ContainerLogo, Content, DateBar, DescriptionText, DoctorAppointmentContainer, DoctorBioContainer, DoctorBioText, DoctorNameText, HourCardContainer, HourContainer,
  HourText, ImageDoctor, RightContainer, SaveContainer, ScrollCardContainer, ScrollHourContainer, SectionLeft, SectionRight1, SectionRight2,
  TextContainer,
  TitleText
} from './styles'
registerLocale('pt', pt)

type DoctorById = {
  id: string;
  name: string;
  specialty: string;
  imageUrl: string;
  bio: string;
}

type DocIdType = {
  data: DoctorById;
}

type Schedule = {
  id: string;
  doctorId: string;
  monthDay: string;
  weekDay: string;
  hour: string;
  scheduled: boolean;
  editable: boolean;
}

type ScheduleType = {
  data: Schedule[];
  doctor: Schedule[];
}

function DoctorSchedule() {
  const router = useRouter()
  const doctorId = Cookies.get('doctorId')
  const { deletedSchedule = 0 } = router.query
  const [selectedIndex, setSelectedIndex] = useState<number[]>([])
  const [doc, setDoc] = useState<DoctorById>()
  const [value, setValue] = useState<Date | Date[] | null>(new Date())
  const [docSchedules, setDocSchedules] = useState<Schedule[]>()
  const [startDate, setStartDate] = useState(new Date())

  async function loadDoctor() {
    const response: DocIdType = await api.get(`/doctor-id/${doctorId}`)
    const doctorData = response.data
    setDoc(doctorData)
  }

  async function loadDoctorSchedules() {
    try {
      const yearAndMonth = formatISO(new Date(startDate.toString())).substring(0, 7)
      const response: ScheduleType = await api.get(`schedules-by-doctor/${doctorId}/${yearAndMonth}`)
      const scheduleList = response.data
      setDocSchedules(scheduleList)
    } catch (error) {
      console.log(error)
      setDocSchedules(null)
    }
  }

  useEffect(() => {
    loadDoctor()
    loadDoctorSchedules()
  }, [startDate, deletedSchedule])

  // Função para selecionar ou deselecionar os horários a serem criados na agenda
  function handleSelectHour(index: number) {
    const alreadSelected = selectedIndex.findIndex(hour => hour === index)
    if (alreadSelected >= 0) {
      const filteredIndex = selectedIndex.filter(hour => hour !== index)
      setSelectedIndex(filteredIndex)
    } else {
      setSelectedIndex([...selectedIndex, index])
    }
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    if (selectedIndex.length === 0) {
      Swal.fire('Selecione os horários para criar a agenda')
      return
    }

    const hoursIndex = selectedIndex
    const timeToSchedule: { hour: string }[] = []
    hoursIndex.map(index => (
      timeToSchedule.push({ hour: hoursList[index] })
    ))

    function capitalizedWeekDay(string: string, separator = ' ') {
      return string
        .split(separator)
        .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join(separator)
    }

    const schedulesData = ({
      doctorName: doc.name,
      specialty: doc.specialty,
      monthDay: format(new Date(value.toString()), 'yyyy-MM-dd'),
      // monthDay: formatISO(new Date(value.toString())),
      weekDay: capitalizedWeekDay(format(new Date(value.toString()), 'EEEE', { locale: pt })),
      patientName: '',
      cpf: '',
      plain: '',
      card: '',
      scheduled: false,
      editable: true,
      timeToSchedule: timeToSchedule
    })
    try {
      await api.post(`schedules/${doc.id}`, schedulesData)
      Swal.fire('Agenda atualizada', 'confira os novos horários disponíveis')
      router.push({
        pathname: 'appointment-create',
        query: { id: doctorId }
      })
    } catch (error) {
      Swal.fire('Oops, algo deu errado', error.response.data.Error)
    }
  }

  return (
    <DoctorAppointmentContainer>
      <DoctorProfileNavBar idDoctorAppointment={Number(doctorId)} />
      <Content>
        <SectionLeft>
          <ContainerLogo>
            <Logo />
          </ContainerLogo>
          <DoctorBioContainer>
            <ImageDoctor src={doc?.imageUrl} />
            <DoctorNameText>{doc?.name}</DoctorNameText>
            <DescriptionText>{doc?.specialty}</DescriptionText>
          </DoctorBioContainer>
          <DoctorBioText>
            {doc?.bio}
          </DoctorBioText>
        </SectionLeft>
        <form onSubmit={handleSubmit}>
          <RightContainer>
            <SectionRight1>
              <DateBar>
                <DatePicker
                  locale="pt"
                  selected={startDate}
                  onChange={date => setStartDate(date as Date)}
                  dateFormat="    MMMM' de 'yyyy"
                  showMonthYearPicker
                  showFullMonthYearPicker
                />
              </DateBar>
              <ScrollCardContainer>
                <ScheduleCard doctor={docSchedules} />
              </ScrollCardContainer>
            </SectionRight1>
            <SectionRight2>
              <TextContainer>
                <TitleText>Crie novos horários<br />na agenda</TitleText>
              </TextContainer>
              <CalendarContainer>
                <StyledCalendar
                  // locale='pt-BR'
                  showNeighboringMonth={false}
                  calendarType='US'
                  onChange={setValue}
                  value={value}
                />
              </CalendarContainer>
              <HourCardContainer>
                <ScrollHourContainer>
                  {hoursList.map((hour, index) => (
                    <HourContainer
                      key={index}
                      onClick={() => handleSelectHour(index)}
                      className={selectedIndex.includes(index) ? 'selected' : ''}
                    >
                      <HourText>{hour}</HourText>
                    </HourContainer>
                  ))}
                </ScrollHourContainer>
              </HourCardContainer>
              <SaveContainer>
                <AppointmentButton type='submit'>Criar agenda</AppointmentButton>
              </SaveContainer>
            </SectionRight2>
          </RightContainer>
        </form>
      </Content>
    </DoctorAppointmentContainer>
  )
}

export default DoctorSchedule
