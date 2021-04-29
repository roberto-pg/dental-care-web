import axios from 'axios'
import Swal from 'sweetalert2'
import { getToken } from './auth'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL
  // baseURL: 'http://localhost:3335'
})

api.interceptors.request.use(async config => {
  const token = getToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

api.interceptors.response.use((response) => {
  return response
},
(error) => {
  if (error.response) {
    switch (error.response.status) {
    case 401:
      Swal.fire('A conexão expirou...', 'Para continuar faça um novo login')
      setTimeout(() => {
        window.location.href = 'https://dental-care.vercel.app'
        // window.location.href = 'http://localhost:3000'
      }, 3 * 1000)
      break
      // Tratamentos de outros status de erro podem ser adicionados aqui
    default:
      break
    }
  }
  return Promise.reject(error)
})

export default api
