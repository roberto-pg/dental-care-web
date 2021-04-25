import PatientRegister from '../components/PatientRegister'
import withAuth from '../utils/withAuth'

function PatientRegisterPage() {
  return <PatientRegister />
}

export default withAuth(PatientRegisterPage)
