import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import ListaCitas from './pages/ListaCitas'
import CrearCita from './pages/CrearCita'
import CitaDetalle from './pages/CitaDetalle'

export default function App () {
  return (
    <div>
      <h1>Gestión de Citas Médicas</h1>
      <nav>
        <Link to='/'>Inicio</Link> |{' '}
        <Link to='/citas'>Lista de Citas</Link> |{' '}
        <Link to='/crear'>Crear Cita</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/citas' element={<ListaCitas />} />
        <Route path='/crear' element={<CrearCita />} />
        <Route path='/citas/:id' element={<CitaDetalle />} />
        <Route path='*' element={<p>Página no encontrada</p>} />
      </Routes>
    </div>
  )
}
