import Link from 'next/link'
import Cookies from 'js-cookie'
import {
  DoctorCardContainer,
  SpecialtyText,
  DoctorNameText,
  ImageDoctor
} from './styles'
import { useContext } from 'react'
import { DoctorContext } from '../../contexts/Doctor'
const inSixtyMinutes = new Date(new Date().getTime() + 60 * 60 * 1000)

export default function DoctorCard() {
  const { doctor } = useContext(DoctorContext)

  function handleCookie(id: string) {
    Cookies.set('doctorId', id, {
      expires: inSixtyMinutes
    })
  }

  return (
    <>
      {doctor.map(doc => (
        <Link
          key={doc.id}
          href={{
            pathname: 'appointment-create'
          }}
        >
          <DoctorCardContainer
            className={(doc.active === true) ? 'active' : ''}
            onClick={() => handleCookie(doc?.id)}>
            <SpecialtyText>{doc.specialty}</SpecialtyText>
            <DoctorNameText>{doc.name}</DoctorNameText>
            <ImageDoctor src={doc.imageUrl} />
          </DoctorCardContainer>
        </Link>
      ))}
    </>
  )
}
