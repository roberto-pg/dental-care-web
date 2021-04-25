import { Select } from './styles'

function SpecialtySelect() {
  return (
    <Select style={{ marginTop: '2.125rem' }}>
      <option value="" hidden>
        Escolha a especialidade
      </option>
      <option value="1">Avaliação</option>
      <option value="2">Cirurgia</option>
      <option value="3">Dentística</option>
      <option value="4">Endodontia</option>
      <option value="5">Implantodontia</option>
      <option value="6">Ortodontia</option>
      <option value="7">Periodontia</option>
      <option value="8">Prótese</option>
    </Select>
  )
}

export default SpecialtySelect
