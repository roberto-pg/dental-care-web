import DoctorSchedule from '../components/DoctorSchedule'
import withAuth from '../utils/withAuth'

function DoctorSchedulePage() {
  return (
    <DoctorSchedule />
  )
}

export default withAuth(DoctorSchedulePage)
