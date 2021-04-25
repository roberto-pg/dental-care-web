import AdminCreation from '../components/AdminCreation'
import withAuth from '../utils/withAuth'

function AdminCreationPage() {
  return <AdminCreation />
}

export default withAuth(AdminCreationPage)
