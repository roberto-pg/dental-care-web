import { useState } from 'react'
import {
  ModalContact,
  ModalBase,
  ModalText,
  ExitButton
} from './styles'

function StyledModal() {
  const [isOpen, setIsOpen] = useState(false)

  function toggleModal(e) {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <ExitButton onClick={toggleModal}>Contato</ExitButton>
      <ModalContact
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}>
        <ModalBase>
          <ModalText
            style={{
              cursor: 'pointer',
              margin: '1rem 0 3rem 19rem'
            }}
            onClick={toggleModal}
          >Fechar</ModalText>
          <ModalText style={{ fontSize: '1.25rem' }}>Atendimento ao cliente</ModalText>
          <ModalText style={{ marginTop: '1rem' }}>Email</ModalText>
          <ModalText>dentalcare@email.com</ModalText>
          <ModalText style={{ marginTop: '1rem' }}>whatsApp</ModalText>
          <ModalText>11 999995555</ModalText>
          <ModalText style={{ marginTop: '1rem' }}>Telefone</ModalText>
          <ModalText>11 999995555</ModalText>
          <ModalText>11 55554444</ModalText>
        </ModalBase>
      </ModalContact>
    </div>
  )
}

export default StyledModal
