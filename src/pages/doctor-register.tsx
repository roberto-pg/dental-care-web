import DoctorRegister from '../components/DoctorRegister'
import withAuth from '../utils/withAuth'

function DoctorRegisterPage() {
  return <DoctorRegister />
}

export default withAuth(DoctorRegisterPage)
