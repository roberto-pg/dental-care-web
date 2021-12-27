import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import { formatISO } from 'date-fns'
import Cookies from 'js-cookie'
import DatePicker, { registerLocale } from 'react-datepicker'
import pt from 'date-fns/locale/pt'
import Link from 'next/link'
import Swal from 'sweetalert2'
import Logo from '../Logo'
import api from '../../services/api'
import AppointmentCreationCard from '../AppointmentCreationCard'
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
  SectionRight,
  CheckButton
} from './styles'
registerLocale('pt', pt)

type DoctorById = {
  id: string;
  name: string;
  specialty: string;
  imageUrl: string;
  bio: string;
  active: boolean;
}

type DocIdType = {
  data: DoctorById
}

type Schedule = {
  id: string;
  doctorId: string;
  monthDay: string;
  weekDay: string;
  hour: string;
  scheduled: boolean;
  patientName: string;
  plan: string;
  card: string;
  editable: boolean;
}

type ScheduleType = {
  data: Schedule[];
}

function AppointmentCreation() {
  const router = useRouter()
  const { refresh } = router.query
  const doctorId = Cookies.get('doctorId')
  const refreshNumber = Number(refresh)
  const [doc, setDoc] = useState<DoctorById>()
  const [docSchedules, setDocSchedules] = useState<Schedule[]>()
  const [startDate, setStartDate] = useState(new Date())

  useEffect(() => {
    loadDoctor()
    loadDoctorSchedules()
  }, [startDate, refreshNumber])

  async function loadDoctor() {
    const response: DocIdType = await api.get(`doctor-id/${doctorId}`)
    const res = response.data
    setDoc(res)
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

  async function changeActiveDoctor(isActiveOrNot: boolean) {
    const data = ({
      id: doctorId,
      active: !isActiveOrNot
    })

    Swal.fire({
      title: isActiveOrNot === true ? 'Deseja desativar?' : 'Deseja ativar?',
      text: 'Essa ação altera o status do dentista',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: isActiveOrNot === true ? 'Sim, pode desativar!' : 'Sim, pode ativar!'
    }).then(async(result) => {
      if (result.isConfirmed) {
        try {
          await api.patch('/doctor-active', data)
          router.push({
            pathname: '/home'
          })
          Swal.fire(
            'Operação realizada',
            isActiveOrNot === true ? 'Desativado' : 'Ativado',
            'success'
          )
        } catch (error) {
          Swal.fire('Falha na operaçao')
        }
      }
    })
  }

  async function createSchedules(active: boolean) {
    if (active === true) {
      router.push({
        pathname: '/doctor-schedule'
      })
    } else {
      Swal.fire('Essa agenda está desativada')
    }
  }

  return (
    <AppointmentCreateContainer>
      <SectionLeft>
        <ContainerLogo>
          <Logo />
        </ContainerLogo>
        <DoctorBioContainer >
          <ImageDoctor src={doc?.imageUrl} />
          <CheckButton
            className={doc?.active ? 'free' : ''}
            onClick={() => changeActiveDoctor(doc?.active)}
          />
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
          <HomeText onClick={() => {}}>Home</HomeText>
        </Link>
        <CreateText onClick={() => createSchedules(doc?.active)}>Criar horários</CreateText>
      </SectionLeft>
      <SectionRight>
        <AppointmentCreationCard schedules={docSchedules} />
      </SectionRight>
    </AppointmentCreateContainer>
  )
}

export default AppointmentCreation
