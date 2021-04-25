import { PatientRegisterNavBar } from '../NavBar'
import { Input } from '../Input'
import Logo from '../Logo'
import SaveButton from '../SaveButton/index'
import { FormEvent, useState } from 'react'
import api from '../../services/api'
import { cpfMask, numberOnly } from '../../utils/cpfMask'
import Swal from 'sweetalert2'
import { useRouter } from 'next/router'
import {
  PatientRegisterContainer,
  Content,
  SectionLeft,
  ContainerLogo,
  PatientRegisterText,
  PatientText,
  SectionRight,
  Select
} from './styles'

function PatientRegister() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [cpfFormatted, setCpfFormatted] = useState('')
  const [plain, setPlain] = useState('')
  const [card, setCard] = useState('')
  const router = useRouter()

  async function handlePatientRegister(event: FormEvent) {
    event.preventDefault()

    const cpf = numberOnly(cpfFormatted)

    const data = ({
      name,
      email,
      cpf,
      plain,
      card,
      password: '123mudar',
      admin: false
    })

    try {
      await api.post('users', data)
      Swal.fire('Tudo certo', 'o paciente foi cadastrado')
      router.push('patient-list')
    } catch (error) {
      Swal.fire('Oops, algo deu errado', error.response.data.Error)
    }
  }

  return (
    <PatientRegisterContainer>
      <PatientRegisterNavBar />
      <Content>
        <SectionLeft>
          <ContainerLogo>
            <Logo />
          </ContainerLogo>
          <PatientRegisterText>Paciente sem cadastro ?</PatientRegisterText>
          <PatientText>Para cadastrar um novo Paciente no sistema, é só preencher os campos ao lado e clicar em Salvar</PatientText>
        </SectionLeft>
        <form onSubmit={handlePatientRegister}>
          <SectionRight>
            <Input
              placeholder="Nome"
              style={{ marginTop: '2.5rem' }}
              value={name}
              onChange={(event) => { setName(event.target.value) }}
            />
            <Input
              placeholder="Email"
              type="email"
              style={{ marginTop: '2.5rem' }}
              value={email}
              onChange={(event) => { setEmail(event.target.value) }}
            />
            <Input
              placeholder="CPF"
              style={{ marginTop: '2.5rem' }}
              value={cpfFormatted}
              onChange={(event) => { setCpfFormatted(cpfMask(event.target.value)) }}
            />
            <Select
              onChange={(event) => { setPlain(event.target.value) }}
              style={{ marginTop: '2.125rem' }}
            >
              <option value="" hidden>
                Escolha o convênio
              </option>
              <option value="Particular">Particular</option>
              <option value="Amil">Amil</option>
              <option value="Interodonto">Interodonto</option>
              <option value="Metlife">Metlife</option>
              <option value="Porto Seguro">Porto Seguro</option>
              <option value="Rede Unna">Red Unna</option>
              <option value="Sul America">Sul America</option>
            </Select>
            <Input
              disabled={plain === '' || plain === 'Particular'}
              placeholder={plain !== '' && plain !== 'Particular' ? 'Número do beneficiário' : '' }
              style={{ marginTop: '2.5rem' }}
              value={card}
              onChange={(event) => { setCard(event.target.value) }}
            />
            <SaveButton style={{ margin: '2.5rem auto' }}>Salvar</SaveButton>
          </SectionRight>
        </form>
      </Content>
    </PatientRegisterContainer>
  )
}

export default PatientRegister
