import { useParams } from 'react-router-dom'

export default function CitaDetalle () {
  const { id } = useParams()

  return (
    <div>
      <h2>Detalles de la Cita</h2>
      <p>ID de la cita: {id}</p>
      <p>Aquí se mostraría más información si se usara un backend o estado global.</p>
    </div>
  )
}
