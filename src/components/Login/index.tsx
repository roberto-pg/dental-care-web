import { LoginNavBar } from '../NavBar'
import Logo from '../Logo'
import { FormEvent, useState } from 'react'
import api from '../../services/api'
import { login } from '../../services/auth'
import { cpfMask, numberOnly } from '../../utils/cpfMask'
import Swal from 'sweetalert2'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  LoginContainer,
  Content,
  SectionLeft,
  LoginBar,
  RegisterText,
  GetInText,
  GetInDescription,
  CPFContainer,
  CPFIconContainer,
  CPFIcon,
  CPFInput,
  PasswordContainer,
  PasswordInput,
  PasswordIconContainer,
  PasswordIcon,
  ForgotPassword,
  LoginButton,
  SectionRight
} from './styles'

function Login() {
  const [cpfFormatted, setCpfFormatted] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  async function handleLogin(event: FormEvent) {
    event.preventDefault()

    const cpf = numberOnly(cpfFormatted)

    const data = ({ cpf, password })

    try {
      const response = await api.post('authenticate/admin', data)
      login(response.data.token, String(response.data.user.id))
      router.push('home')
      setCpfFormatted('')
      setPassword('')
    } catch (error) {
      Swal.fire('Oops, algo deu errado', error.response.data.Error)
    }
  }

  function forgotPassword() {
    return (
      Swal.fire(
        'Esqueceu a senha?',
        'Entre em contato conosco',
        'question'
      )
    )
  }

  return (
    <LoginContainer>
      <LoginNavBar />
      <Content>
        <SectionLeft>
          <LoginBar>
            <Logo />
            <Link href="/admin">
              <RegisterText>Registrar</RegisterText>
            </Link>
          </LoginBar>
          <GetInText>ENTRAR</GetInText>
          <GetInDescription>Faça login para continuar</GetInDescription>
          <form onSubmit={handleLogin}>
            <CPFContainer>
              <CPFInput
                placeholder="Digite o CPF"
                value={cpfFormatted}
                onChange={(event) => { setCpfFormatted(cpfMask(event.target.value)) }}
              />
              <CPFIconContainer>
                <CPFIcon src="/images/profile.jpeg" />
              </CPFIconContainer>
            </CPFContainer>
            <PasswordContainer>
              <PasswordInput
                placeholder="Senha"
                type="password"
                value={password}
                onChange={(event) => { setPassword(event.target.value) }}
              />
              <PasswordIconContainer>
                <PasswordIcon src="/images/lock.png" />
              </PasswordIconContainer>
            </PasswordContainer>
            <ForgotPassword onClick={() => forgotPassword()}>Esqueceu a senha ?</ForgotPassword>
            <LoginButton type="submit">Login</LoginButton>
          </form>
        </SectionLeft>
        <SectionRight />
      </Content>
    </LoginContainer>
  )
}
export default Login
