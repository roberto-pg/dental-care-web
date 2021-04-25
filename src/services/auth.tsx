import Cookies from 'js-cookie'

export const login = (token: String, adminId: String) => {
  const inSixtyMinutes = new Date(new Date().getTime() + 60 * 60 * 1000)
  Cookies.set('jwt', token, {
    expires: inSixtyMinutes
  })

  Cookies.set('isLogged', 'true', {
    expires: inSixtyMinutes
  })

  Cookies.set('adminId', adminId, {
    expires: inSixtyMinutes
  })
}

export const getToken = () => Cookies.get('jwt')

export const getIsLogged = () => Cookies.get('isLogged')

export const getAdminId = () => Cookies.get('adminId')

export const logout = () => {
  Cookies.remove('jwt')
  Cookies.remove('isLogged')
  Cookies.remove('adminId')
  Cookies.remove('doctorId')
}
