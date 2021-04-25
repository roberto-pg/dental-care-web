import AppointmentCreation from '../components/AppointmentCreation'
import withAuth from '../utils/withAuth'

function AppointmentCreationPage() {
  return <AppointmentCreation />
}

export default withAuth(AppointmentCreationPage)
