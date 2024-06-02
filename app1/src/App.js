import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { queryByTestId } from '@testing-library/react';
function App() {

  const [query, setQuery] = useState([])
  const [cursos, setCursos] = useState('')
  const [buscar, setBuscar] = useState('')

  /* useEffect(() => { 
     fetch('http://localhost:8080/cursos/:id?query=${search}')
       .then(response => response.json())
       .then(data => setCursos(data.results))
       .catch(error => console.error('error al buscar el curso solicitado', error))
 
   }, [])
   
   aca tengo que cargar bien el endpoint 
   */


  const cargarDatos = (e) => {
    setQuery(e.target.value)
    console.log('estas buscando: ' + query)

  }


  const Buscar = (e) => {
    setBuscar(query)
    console.log('se cargó la busqueda: ' + buscar)
  }

  return (
    <div className="App">

      <div className='buscador'>
        <input
          type='text'
          placeholder='Introducir curso deseado...'
          onChange={cargarDatos}
        />
        <button onClick={Buscar}>Buscar</button>
      </div>

      <div className='muestraCursos'>

      </div>

    </div>
  );
}

export default App;
