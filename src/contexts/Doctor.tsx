import { createContext, ReactNode, useState } from 'react'

type DoctorData = {
  id: number;
  name: string;
  specialty: string;
  imageUrl: string;
  bio: string;
}

type EquipeData = {
  doctor: DoctorData[];
  getDoc: (doctorApi: DoctorData[]) => void
}

type DoctorProviderProps = {
  children: ReactNode
}

export const DoctorContext = createContext({} as EquipeData)

export default function DoctorProvider({ children }: DoctorProviderProps) {
  const [doctor, setDoctor] = useState([])

  function getDoc(doctorApi: DoctorData[]) {
    setDoctor(doctorApi)
  }

  return (
    <DoctorContext.Provider value={{
      doctor,
      getDoc
    }}
    >
      {children}
    </DoctorContext.Provider>
  )
}
