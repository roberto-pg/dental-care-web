import DoctorCard from '../../components/DoctorCard'
import Logo from '../Logo'
import { HomeNavBar } from '../../components/NavBar'
import {
  ChoiseDoctorText,
  ContainerLogo,
  Content,
  DoctorText,
  LoginContainer,
  SectionLeft,
  SectionRight,
  SectionRightContainer
} from './styles'

export default function Home() {
  return (
    <LoginContainer>
      <HomeNavBar />
      <Content>
        <SectionLeft>
          <ContainerLogo>
            <Logo />
          </ContainerLogo>
          <DoctorText>Vamos começar ?</DoctorText>
          <ChoiseDoctorText>Escolha um Doutor para acessar a agenda</ChoiseDoctorText>
        </SectionLeft>
        <SectionRightContainer>
          <SectionRight >
            <DoctorCard />
          </SectionRight>
        </SectionRightContainer>
      </Content>
    </LoginContainer>
  )
}
