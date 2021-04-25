import { useState, FormEvent } from 'react'
import Swal from 'sweetalert2'
import { useRouter } from 'next/router'

import { DoctorRegisterNavBar } from '../NavBar'
import { Input, Input2, Label } from '../Input'
import Logo from '../Logo'
import SaveButton from '../SaveButton/index'
import api from '../../services/api'
import {
  DoctorRegisterContainer,
  Content,
  SectionLeft,
  ContainerLogo,
  DoctorRegisterText,
  DoctorText,
  SectionRight,
  FormRegister,
  Select
} from './styles'

function DoctorRegister() {
  const [name, setName] = useState('')
  const [specialty, setSpecialty] = useState('')
  const [bio, setBio] = useState('')
  const [imageUrl, setImageUrl] = useState(null)
  const [imageName, setImageName] = useState('Escolha uma foto')
  const router = useRouter()

  async function handleDoctorRegister(event: FormEvent) {
    event.preventDefault()

    if (!imageUrl) {
      Swal.fire('Escolha uma foto')
      return
    }

    if (name.length < 1) {
      Swal.fire('Informe o nome')
      return
    }

    if (specialty.length < 1) {
      Swal.fire('Informe a especialidade')
      return
    }

    if (bio.length < 1) {
      Swal.fire('Forneça uma breve biografia')
      return
    }

    const data = new FormData()
    data.append('name', name)
    data.append('specialty', specialty)
    data.append('bio', bio)
    data.append('imageUrl', imageUrl)
    console.log(specialty)
    try {
      await api.post('doctors', data)
      Swal.fire('Tudo certo!', 'Tem Doutor novo na equipe 😊 ')
      router.push('home')
    } catch (error) {
      Swal.fire('Oops, algo deu errado', error.response.data.Error)
    }
  }

  function handleImage(event: any) {
    setImageName((event.target.value).split('C:\\fakepath\\'))
    setImageUrl(event.target.files[0])
  }

  return (
    <DoctorRegisterContainer>
      <DoctorRegisterNavBar />
      <Content>
        <SectionLeft>
          <ContainerLogo>
            <Logo />
          </ContainerLogo>
          <DoctorRegisterText>Novidades na equipe ?</DoctorRegisterText>
          <DoctorText>Para cadastrar um novo Doutor no sistema, é só preencher os campos ao lado e clicar em Salvar</DoctorText>
        </SectionLeft>
        <SectionRight>
          <FormRegister onSubmit={handleDoctorRegister}>
            <Input
              placeholder="Nome:     20 caracteres"
              maxLength={20}
              style={{ marginTop: '3.125rem' }}
              value={name}
              onChange={(event) => { setName(event.target.value) }}
            />
            <Select
              onChange={(event) => { setSpecialty(event.target.value) }}
              style={{ marginTop: '2.125rem' }}
            >
              <option value="" hidden>
                Escolha a especialidade
              </option>
              <option value="Avaliação">Avaliação</option>
              <option value="Cirurgia">Cirurgia</option>
              <option value="Dentística">Dentística</option>
              <option value="Endodontia">Endodontia</option>
              <option value="Implantodontia">Implantodontia</option>
              <option value="Ortodontia">Ortodontia</option>
              <option value="Periodontia">Periodontia</option>
              <option value="Prótese">Prótese</option>
            </Select>
            <Input
              placeholder="Bio:     255 caracteres"
              maxLength={255}
              style={{ marginTop: '2.125rem' }}
              value={bio}
              onChange={(event) => { setBio(event.target.value) }}
            />
            <Label htmlFor="imageSelect">{imageName} &#187;</Label>
            <Input2
              id="imageSelect"
              type="file"
              value=""
              onChange={(event) => { handleImage(event) }}
            />
            <SaveButton type="submit" style={{ margin: '1.125rem auto' }}>Salvar</SaveButton>
          </FormRegister>
        </SectionRight>
      </Content>
    </DoctorRegisterContainer>
  )
}

export default DoctorRegister
