import { AdminNavBar } from '../NavBar'
import { Input } from '../Input'
import Logo from '../Logo'
import SaveButton from '../SaveButton/index'
import { FormEvent, useState } from 'react'
import api from '../../services/api'
import { cpfMask, numberOnly } from '../../utils/cpfMask'
import Swal from 'sweetalert2'
import { useRouter } from 'next/router'
import {
  LoginContainer,
  Content,
  SectionLeft,
  ContainerLogo,
  AdminText,
  SectionRight
} from './styles'

function AdminCreation() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [cpfFormatted, setCpfFormatted] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  async function handleAdminRegister(event: FormEvent) {
    event.preventDefault()

    const cpf = numberOnly(cpfFormatted)

    const data = ({
      name,
      email,
      cpf,
      password,
      plain: 'Particular',
      admin: true
    })

    try {
      await api.post('users', data)
      setName('')
      setEmail('')
      setCpfFormatted('')
      setPassword('')
      Swal.fire('Tudo certo', 'O novo administrador foi cadastrado')
      router.push('/')
    } catch (error) {
      Swal.fire('Oops, algo deu errado', error.response.data.Error)
    }
  }

  return (
    <LoginContainer>
      <AdminNavBar />
      <Content>
        <SectionLeft>
          <ContainerLogo>
            <Logo />
          </ContainerLogo>
          <AdminText>Para cadastrar um novo administrador no sistema, é só preencher os campos ao lado e clicar em Salvar</AdminText>
        </SectionLeft>
        <SectionRight>
          <form onSubmit={handleAdminRegister}>
            <Input
              placeholder="Nome"
              style={{ margin: '3.25rem 0 0 4.5rem' }}
              value={name}
              onChange={(event) => { setName(event.target.value) }}
            />
            <Input
              placeholder="Email"
              type="email"
              style={{ margin: '3.25rem 0 0 4.5rem' }}
              value={email}
              onChange={(event) => { setEmail(event.target.value) }}
            />
            <Input
              placeholder="CPF"
              style={{ margin: '3.25rem 0 0 4.5rem' }}
              value={cpfFormatted}
              onChange={(event) => { setCpfFormatted(cpfMask(event.target.value)) }}
            />
            <Input
              placeholder="Senha"
              type="password"
              style={{ margin: '3.25rem 0 0 4.5rem' }}
              value={password}
              onChange={(event) => { setPassword(event.target.value) }}
            />
            <SaveButton type="submit" style={{ margin: '3.25rem 0 0 4.5rem' }}>Salvar</SaveButton>
          </form>
        </SectionRight>
      </Content>
    </LoginContainer>
  )
}

export default AdminCreation
