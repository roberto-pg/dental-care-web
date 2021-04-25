import Logo from '../Logo/index'
import Link from 'next/link'
import Modal from '../Modal'
import { logout, getAdminId } from '../../services/auth'
import { FormEvent } from 'react'
import { useRouter } from 'next/router'
import api from '../../services/api'
import Cookies from 'js-cookie'
import {
  NavBar,
  ContainerButton,
  NavText,
  ExitButton
} from './styles'

type DoctorAppointmentType = {
  idDoctorAppointment: number
}

export function AdminNavBar() {
  return (
    <NavBar>
      <Logo />
      <ContainerButton>
        <Link href='/'>
          <ExitButton>Login</ExitButton>
        </Link>
      </ContainerButton>
    </NavBar>
  )
}

export function HomeNavBar() {
  const router = useRouter()

  async function logoutAdmin(e: FormEvent) {
    e.preventDefault()

    try {
      const id = getAdminId()
      await api.post(`logout/${id}`)
      logout()
      router.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <NavBar>
      <Logo />
      <ContainerButton>
        <Link href='doctor-register'>
          <NavText>Novo Doutor</NavText>
        </Link>

        <Link href='patient-list'>
          <NavText>Pacientes</NavText>
        </Link>
        <ExitButton onClick={logoutAdmin}>Sair</ExitButton>
      </ContainerButton>
    </NavBar>
  )
}

export function LoginNavBar() {
  return (
    <NavBar>
      <Logo />
      <ContainerButton>
        <Modal />
      </ContainerButton>
    </NavBar>
  )
}

export function DoctorRegisterNavBar() {
  return (
    <NavBar>
      <Logo />
      <ContainerButton>
        <Link href='home'>
          <ExitButton>Home</ExitButton>
        </Link>
      </ContainerButton>
    </NavBar>
  )
}

export function PatientRegisterNavBar() {
  return (
    <NavBar>
      <Logo />
      <ContainerButton>
        <Link href='patient-list'>
          <NavText>Pacientes</NavText>
        </Link>
        <Link href='home'>
          <ExitButton>Home</ExitButton>
        </Link>
      </ContainerButton>
    </NavBar>
  )
}

export function DoctorProfileNavBar(props: DoctorAppointmentType) {
  const { idDoctorAppointment } = props
  return (
    <NavBar>
      <Logo />
      <ContainerButton>
        <Link
          href={{
            pathname: 'appointment-create',
            query: { id: idDoctorAppointment }
          }}
        >
          <NavText>Agenda</NavText>
        </Link>
        <Link href='home'>
          <ExitButton>Home</ExitButton>
        </Link>
      </ContainerButton>
    </NavBar>
  )
}

export function PatientListNavBar() {
  function handleCookie() {
    Cookies.remove('userId')
  }

  return (
    <NavBar>
      <Logo />
      <ContainerButton>
        <Link href='patient-register'>
          <NavText onClick={() => handleCookie()}>Novo Paciente</NavText>
        </Link>
        <Link href='home'>
          <ExitButton onClick={() => handleCookie()}>Home</ExitButton>
        </Link>
      </ContainerButton>
    </NavBar>
  )
}
