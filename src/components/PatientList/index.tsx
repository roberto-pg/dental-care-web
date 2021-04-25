import { PatientListNavBar } from '../NavBar'
import PatientCard from '../PatientCard'
import { useState, useEffect } from 'react'
import api from '../../services/api'
import Cookies from 'js-cookie'
import Swal from 'sweetalert2'
import { useRouter } from 'next/router'
import { cpfMask } from '../../utils/cpfMask'
import {
  DoctorProfileContainer,
  Content,
  SectionLeft,
  LeftSubtitleContainer,
  PatientListTitle,
  PatientListSubtitle,
  ScrollContainer,
  LeftBottomContainer,
  SectionRight,
  RightSubtitleContainer,
  PatientDataTitle,
  MiddleContainer1,
  LeftMiddleContainer1,
  NameLabel,
  EmailLabel,
  CpfLabel,
  PlainLabel,
  NumberLabel,
  RightMiddleContainer1,
  PatientDataContainer,
  PatientDataText,
  MiddleContainer2,
  ActiveLabel,
  YesButton,
  Checked,
  RightBottomContainer,
  DeleteButton
} from './styles'

type User = {
  id: number,
  name: string,
  email: string,
  cpf: string,
  card: string,
  plain: string,
  active: boolean,
  admin: boolean
}

function PatientList() {
  const router = useRouter()
  const [user, setUser] = useState<User[]>()
  const [userById, setUserById] = useState<User>()
  const userId = Cookies.get('userId')
  const { refresh } = router.query

  async function loadUser() {
    try {
      const response = await api.get('users')
      const userData = response.data.user
      setUser(userData)
    } catch (error) {
      Swal.fire('Oops, algo deu errado', error.response.data.Error)
    }
  }

  async function loadUserId() {
    try {
      const response = await api.get(`users/${userId}`)
      const userDataId = response.data
      setUserById(userDataId)
    } catch (error) {
      console.log(error)
    }
  }

  async function handleStatus(userId: number, userStatus: boolean) {
    try {
      const data = ({
        id: userId,
        active: !userStatus
      })
      await api.patch('users/active', data)
      router.push({
        pathname: 'patient-list',
        query: {
          refresh: Math.random()
        }
      })
    } catch (error) {
      Swal.fire('Oops, algo deu errado', error.response.data.Error)
    }
  }

  async function removeUser(userId: number) {
    const adminId = Cookies.get('adminId')
    if (Number(adminId) === userId) {
      Swal.fire('Falha na operação', 'Não é possível remover o administrador logado')
      return
    }
    Swal.fire({
      title: 'Você confirma a exclusão?',
      text: 'Essa ação não poderá ser revertida',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, pode remover!'
    }).then(async(result) => {
      if (result.isConfirmed) {
        try {
          await api.delete(`users/delete/${userId}`)
          setUserById(null)
          router.push({
            pathname: 'patient-list',
            query: {
              refresh: Math.random()
            }
          })
          Swal.fire(
            'Removido',
            'O paciente foi excluido do cadastro',
            'success'
          )
        } catch (error) {
          Swal.fire('Falha para excluir o paciente')
        }
      }
    })
  }

  useEffect(() => {
    loadUser()
    loadUserId()
  }, [refresh])

  return (
    <DoctorProfileContainer>
      <PatientListNavBar />
      <Content>
        <SectionLeft>
          <LeftSubtitleContainer>
            <PatientListTitle>Lista de pacientes</PatientListTitle>
            <PatientListSubtitle>Clique no nome para editar</PatientListSubtitle>
          </LeftSubtitleContainer>
          <ScrollContainer>
            <PatientCard users={user} />
          </ScrollContainer>
          <LeftBottomContainer></LeftBottomContainer>
        </SectionLeft>
        <SectionRight>
          <RightSubtitleContainer>
            <PatientDataTitle>Dados do paciente</PatientDataTitle>
            <Checked
              display={!userById ? 'no' : 'yes'}
              className={userById?.active ? 'free' : ''}
            />
          </RightSubtitleContainer>
          <MiddleContainer1>
            <LeftMiddleContainer1>
              <NameLabel>Nome:</NameLabel>
              <EmailLabel>Email:</EmailLabel>
              <CpfLabel>CPF:</CpfLabel>
              <PlainLabel>Convênio:</PlainLabel>
              <NumberLabel>Número:</NumberLabel>
            </LeftMiddleContainer1>
            <RightMiddleContainer1>
              <PatientDataContainer style={{ marginTop: '0.6rem' }} >
                <PatientDataText>{userById?.name}</PatientDataText>
              </PatientDataContainer>
              <PatientDataContainer style={{ marginTop: '0.7rem' }} >
                <PatientDataText>{userById?.email}</PatientDataText>
              </PatientDataContainer>
              <PatientDataContainer style={{ marginTop: '0.8rem' }} >
                <PatientDataText>{userById?.cpf ? cpfMask(userById?.cpf) : ''}</PatientDataText>
              </PatientDataContainer>
              <PatientDataContainer style={{ marginTop: '0.75rem' }} >
                <PatientDataText>{userById?.plain}</PatientDataText>
              </PatientDataContainer>
              <PatientDataContainer style={{ marginTop: '0.75rem' }} >
                <PatientDataText>{userById?.card}</PatientDataText>
              </PatientDataContainer>
            </RightMiddleContainer1>
          </MiddleContainer1>
          <MiddleContainer2 className={!userById ? 'no' : 'yes'}>
            <ActiveLabel>{userById?.active ? 'Desativar ?' : 'Ativar ?'}</ActiveLabel>
            <YesButton
              onClick={() => handleStatus(userById?.id, userById?.active)}
            >Sim</YesButton>
          </MiddleContainer2>
          <RightBottomContainer className={!userById ? 'no' : 'yes'}>
            <DeleteButton
              onClick={() => removeUser(userById?.id)}
            >Excluir Paciente</DeleteButton>
          </RightBottomContainer>
        </SectionRight>
      </Content>
    </DoctorProfileContainer>
  )
}

export default PatientList
