import { format } from 'date-fns'
import { useState } from 'react'
import api from '../../services/api'
import Swal from 'sweetalert2'
import { useRouter } from 'next/router'
import {
  AppointmentCreationCardContainer,
  CardSectionLeft,
  MonthDayContainer,
  Day,
  Month,
  CardSectionRight,
  WeekDayContainer,
  WeekDayText,
  EditButton,
  SaveButton,
  CancelButton,
  ClearButton,
  BottomContainer,
  PatientDataContainer,
  PatientTextLabel,
  DataInputContainer,
  PatientInput,
  PlainInput,
  CardInput,
  Select
} from './styles'

type Schedule = {
  id: number;
  doctorId: number;
  monthDay: string;
  weekDay: string;
  hour: string;
  scheduled: boolean;
  patientName: string;
  plain: string;
  card: string;
  editable: boolean;
}

type ScheduleType = {
  schedules: Schedule[];
}

function AppointmentCreationCard(props: ScheduleType) {
  const router = useRouter()

  const { schedules } = props
  const [cpf, setCpf] = useState('')
  const [plain, setPlain] = useState('')
  const [card, setCard] = useState('')

  async function enableEdit(id: number, edit: boolean) {
    const data = ({
      id: id,
      editable: edit
    })

    try {
      await api.patch('schedules/editable', data)
      router.push({
        pathname: 'appointment-create',
        query: {
          refresh: Math.random()
        }
      })
    } catch (error) {
      Swal.fire(error.response.data.Error)
    }
  }

  async function disableEdit(id: number, edit: boolean) {
    const data = ({
      id: id,
      editable: edit
    })
    try {
      await api.patch('schedules/editable', data)
      router.push('home')
    } catch (error) {
      Swal.fire(error.response.data.Error)
    }
  }

  async function createAppointment(id: number, doctorId: number) {
    const data = ({
      id: id,
      cpf: cpf,
      card: card,
      plain: plain,
      scheduled: true
    })

    try {
      await api.patch('schedules/scheduling', data)
      Swal.fire('Consulta agendada com sucesso')
      setCpf('')
      setCard('')
      setPlain('')
      router.push({
        pathname: 'appointment-create',
        query: {
          id: doctorId,
          refresh: Math.random()
        }
      })
    } catch (error) {
      Swal.fire(error.response.data.Error)
    }
  }

  async function clearAppointment(scheduleId: number, doctorId: number) {
    const data = ({
      id: scheduleId,
      patientName: '',
      cpf: '',
      plain: '',
      card: '',
      scheduled: false,
      editable: true
    })
    Swal.fire({
      title: 'Você quer desmarcar a consulta?',
      text: 'Essa ação não poderá ser revertida',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, pode desmarcar!'
    }).then(async(result) => {
      if (result.isConfirmed) {
        try {
          await api.patch('schedules/destroyScheduling', data)
          router.push('home')
          Swal.fire(
            'Confirmado',
            'A consulta foi cancelada',
            'success'
          )
        } catch (error) {
          Swal.fire(error.response.data.Error)
        }
      }
    })
  }

  return (
    <>
      {schedules?.map(schedule => (
        <AppointmentCreationCardContainer key={schedule.id}>
          <CardSectionLeft>
            <MonthDayContainer className={schedule?.scheduled === false ? 'free' : ''}>
              <Day>{format(new Date(schedule?.monthDay), 'dd')}</Day>
              <Month>{schedule?.weekDay?.toUpperCase().substring(0, 3)}</Month>
            </MonthDayContainer>
          </CardSectionLeft>
          <CardSectionRight>
            <WeekDayContainer>
              <WeekDayText>{`${schedule?.weekDay} - ${schedule?.hour}`}</WeekDayText>
              <CancelButton
                className={!schedule?.editable && !schedule?.scheduled ? 'true' : 'false'}
                onClick={() => disableEdit(schedule?.id, true)}
              >Cancelar</CancelButton>
              <SaveButton
                className={!schedule?.editable && !schedule?.scheduled ? 'true' : 'false'}
                onClick={() =>
                  !schedule?.scheduled
                    ? createAppointment(schedule?.id, schedule?.doctorId)
                    : {}
                }
              >Salvar</SaveButton>
              <EditButton
                className={schedule?.editable && !schedule?.scheduled ? 'true' : 'false'}
                onClick={() => enableEdit(schedule?.id, false)}
              >Editar</EditButton>
              <ClearButton
                className={!schedule?.editable && schedule?.scheduled ? 'true' : 'false'}
                onClick={() => clearAppointment(schedule?.id, schedule?.doctorId)}
              >Desmarcar</ClearButton>
            </WeekDayContainer>
            <form>
              <BottomContainer>
                <PatientDataContainer>
                  <PatientTextLabel>Paciente:</PatientTextLabel>
                  <PatientTextLabel style={{ paddingTop: '0.2rem' }}>Convênio:</PatientTextLabel>
                  <PatientTextLabel style={{ paddingTop: '0.2rem' }}>Número:</PatientTextLabel>
                </PatientDataContainer>
                <DataInputContainer>
                  <PatientInput
                    maxLength={11}
                    disabled={!!schedule?.patientName || schedule.editable}
                    placeholder={schedule?.patientName}
                    onChange={(event) => { setCpf(event.target.value) }}
                  />
                  <Select
                    onChange={(event) => { setPlain(event.target.value) }}
                    className={!schedule?.editable && !schedule?.scheduled ? 'free' : 'notFree'}
                  >
                    <option value="" hidden>
                Escolha o convênio
                    </option>
                    <option value="Particular">Particular</option>
                    <option value="Amil">Amil</option>
                    <option value="Interodonto">Interodonto</option>
                    <option value="Metlife">Metlife</option>
                    <option value="Porto Seguro">Porto Seguro</option>
                    <option value="Red Unna">Rede Unna</option>
                    <option value="Sul America">Sul America</option>
                  </Select>
                  <PlainInput
                    disabled={schedule?.scheduled}
                    className={schedule?.scheduled ? 'showPlain' : ''}
                    placeholder={schedule?.plain}
                    onChange={(event) => { setPlain(event.target.value) }}
                  />
                  <CardInput
                    disabled={
                      !!schedule?.card ||
                      schedule?.plain === 'Particular' ||
                      plain === 'Particular' || plain === '' ||
                      schedule.editable
                    }
                    placeholder={schedule?.card}
                    style={{ paddingTop: '0.2rem' }}
                    onChange={(event) => { setCard(event.target.value) }}
                  />
                </DataInputContainer>
              </BottomContainer>
            </form>
          </CardSectionRight>
        </AppointmentCreationCardContainer>
      ))}
    </>
  )
}

export default AppointmentCreationCard
