import Logo from '../Logo'
import AppointmentCreationCard from '../AppointmentCreationCard'
import { useRouter } from 'next/router'
import api from '../../services/api'
import { useEffect, useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import { formatISO } from 'date-fns'
import Cookies from 'js-cookie'
import DatePicker, { registerLocale } from 'react-datepicker'
import pt from 'date-fns/locale/pt'
import Link from 'next/link'
import {
  AppointmentCreateContainer,
  SectionLeft,
  ContainerLogo,
  ChoiseDateText,
  DoctorBioContainer,
  ImageDoctor,
  DoctorNameText,
  SpecialtyText,
  ChoiseDateContainer,
  HomeText,
  CreateText,
  SectionRight
} from './styles'
registerLocale('pt', pt)

type DoctorById = {
  id: number;
  name: string;
  specialty: string;
  imageUrl: string;
  bio: string;
}

type DocIdType = {
  data: DoctorById
}

type Schedule = {
  id: number;
  doctorId: number;
  monthDay: string;
  weekDay: string;
  hour: string;
  scheduled: boolean;
  patientName: string;
  plain: string;
  card: string;
  editable: boolean;
}

type ScheduleType = {
  data: Schedule[];
}

function AppointmentCreation() {
  const router = useRouter()
  const { refresh } = router.query
  const id = Cookies.get('doctorId')
  const idNumber = Number(id)
  const refreshNumber = Number(refresh)
  const [doc, setDoc] = useState<DoctorById>()
  const [docSchedules, setDocSchedules] = useState<Schedule[]>()
  const [startDate, setStartDate] = useState(new Date())

  async function loadDoctor() {
    const response: DocIdType = await api.get(`doctors/id/${idNumber}`)
    const res = response.data
    setDoc(res)
  }

  async function loadDoctorSchedules() {
    try {
      const yearAndMonth = formatISO(new Date(startDate.toString())).substring(0, 7)
      const response: ScheduleType = await api.get(`schedules/doctorId/${idNumber}/${yearAndMonth}`)
      const scheduleList = response.data
      setDocSchedules(scheduleList)
    } catch (error) {
      console.log(error)
      setDocSchedules(null)
    }
  }

  function handleCookie() {
    Cookies.remove('userId')
  }

  useEffect(() => {
    loadDoctor()
    loadDoctorSchedules()
  }, [startDate, refreshNumber])

  return (
    <AppointmentCreateContainer>
      <SectionLeft>
        <ContainerLogo>
          <Logo />
        </ContainerLogo>
        <DoctorBioContainer >
          <ImageDoctor src={doc?.imageUrl} />
          <DoctorNameText>{doc?.name}</DoctorNameText>
          <SpecialtyText>{doc?.specialty}</SpecialtyText>
        </DoctorBioContainer>
        <ChoiseDateText>Escolha o mês</ChoiseDateText>
        <ChoiseDateContainer>
          <DatePicker
            locale="pt"
            selected={startDate}
            onChange={date => setStartDate(date as Date)}
            dateFormat="    MMMM' de 'yyyy"
            showMonthYearPicker
            showFullMonthYearPicker
          />
        </ChoiseDateContainer>
        <Link href='home'>
          <HomeText onClick={() => handleCookie()}>Home</HomeText>
        </Link>
        <Link href='doctor-schedule'>
          <CreateText onClick={() => handleCookie()}>Criar horários</CreateText>
        </Link>
      </SectionLeft>
      <SectionRight>
        <AppointmentCreationCard schedules={docSchedules} />
      </SectionRight>
    </AppointmentCreateContainer>
  )
}

export default AppointmentCreation
