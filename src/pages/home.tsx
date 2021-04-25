import Home from '../components/HomePage'
import { GetServerSideProps } from 'next'
import api from '../services/api'
import { useContext } from 'react'
import { DoctorContext } from '../contexts/Doctor'

type DoctorData = {
  id: number;
  name: string;
  specialty: string;
  imageUrl: string;
  bio: string;
}

type EquipeData = {
  doctorApi: DoctorData[];
}

export default function HomePage({ doctorApi }: EquipeData) {
  const { getDoc } = useContext(DoctorContext)
  getDoc(doctorApi)

  return (
    <Home />
  )
}

export const getServerSideProps: GetServerSideProps = async({ req }) => {
  try {
    const { jwt, isLogged } = req.cookies

    if (!isLogged || isLogged !== 'true' || !jwt) {
      return {
        redirect: {
          destination: '/',
          permanent: false
        }
      }
    }

    const response = await api.get('doctors', {
      headers: { Authorization: `Bearer ${jwt}` }
    })
    const doctorApi = await response.data

    if (!doctorApi) {
      return {
        notFound: true
      }
    }

    return {
      props: {
        doctorApi
      }
    }
  } catch (error) {
    console.log(error.response.data)
  }
}
