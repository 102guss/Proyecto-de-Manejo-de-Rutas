import './CrearCita.css'

export default function CrearCita () {
  return (
    <div>
      <h2>Crear Nueva Cita</h2>
      <form className='form-crear-cita'>
        <input type='text' placeholder='Nombre del paciente' />
        <input type='date' />
        <textarea placeholder='Motivo de la cita' rows='4' />
        <button type='submit'>Guardar Cita</button>
      </form>
    </div>
  )
}
