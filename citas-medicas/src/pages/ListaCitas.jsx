import { Link } from 'react-router-dom'

const citas = [
  { id: 1, paciente: 'Juan Pérez' },
  { id: 2, paciente: 'María Gómez' },
  { id: 3, paciente: 'Carlos Ramírez' }
]

export default function ListaCitas () {
  return (
    <div>
      <h2>Lista de Citas</h2>
      <ul>
        {citas.map(cita => (
          <li key={cita.id}>
            <Link to={`/citas/${cita.id}`}>Cita #{cita.id} - {cita.paciente}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
