import Cookies from 'js-cookie'
import Link from 'next/link'
import {
  PatientCardContainer,
  LeftContainer,
  PacientListTitle,
  PacientListSubtitle,
  Checked,
  RightContainer
} from './styles'
const inSixtyMinutes = new Date(new Date().getTime() + 60 * 60 * 1000)

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

type UserType = {
  users: User[]
}

function PatientCard(props: UserType) {
  const { users } = props

  function handleCookie(id: number) {
    Cookies.set('userId', String(id), {
      expires: inSixtyMinutes
    })
  }

  return (
    <>
      {users?.map(user => (
        <Link
          key={user?.id}
          href={{
            pathname: 'patient-list',
            query: {
              refresh: user?.id
            }
          }}
        >
          <PatientCardContainer
            onClick={() => handleCookie(user?.id)}
          >
            <LeftContainer>
              <PacientListTitle>{user?.name}</PacientListTitle>
              <PacientListSubtitle>{user?.plain}</PacientListSubtitle>
            </LeftContainer>
            <RightContainer>
              <Checked className={user?.active ? 'free' : ''}/>
            </RightContainer>
          </PatientCardContainer>
        </Link>
      ))}
    </>
  )
}

export default PatientCard
