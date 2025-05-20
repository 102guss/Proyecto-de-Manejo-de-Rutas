import './CitaDetalle.css'
import { useParams } from 'react-router-dom'

export default function CitaDetalle () {
  const { id } = useParams()
  return (
    <div className='detalle-cita'>
      <h2>Detalles de la Cita</h2>
      <p><strong>ID de la cita:</strong> {id}</p>
    </div>
  )
}
