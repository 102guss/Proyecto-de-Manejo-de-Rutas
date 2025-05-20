import './ListaCitas.css'
import { Link } from 'react-router-dom'

const citas = [
  { id: 1, paciente: 'Juan Pérez', fecha: '2025-05-22' },
  { id: 2, paciente: 'María Gómez', fecha: '2025-05-23' }
]

export default function ListaCitas () {
  return (
    <div className='lista-citas'>
      <h2>Lista de Citas</h2>
      {citas.map(cita => (
        <div key={cita.id} className='cita'>
          <p><strong>Paciente:</strong> {cita.paciente}</p>
          <p><strong>Fecha:</strong> {cita.fecha}</p>
          <Link to={`/citas/${cita.id}`}>Ver detalles</Link>
        </div>
      ))}
    </div>
  )
}
