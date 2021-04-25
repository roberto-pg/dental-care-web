import PatientList from '../components/PatientList'
import withAuth from '../utils/withAuth'

function PatientListPage() {
  return (
    <PatientList />
  )
}

export default withAuth(PatientListPage)
