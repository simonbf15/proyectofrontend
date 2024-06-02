import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { queryByTestId } from '@testing-library/react';
function App() {

  const [query, setQuery] = useState([])
  const [cursos, setCursos] = useState('')
  const [buscar, setBuscar] = useState('')

  useEffect(() => { "/cursos/:id"
    fetch('http://localhost:8080/cursos/:id?query=${search}')
      .then(response => response.json())
      .then(data => setCursos(data.results))
      .catch(error => console.error('error al buscar el curso solicitado', error))

  }, [])


  const cargarDatos = (e) =>{
console.log('estas buscando: ' + {query})
setQuery(e.target.value)
  }


const Buscar = (e) => {
    setBuscar(query)
  }

    return (
      <div className="App">

        <div className='buscador'>
          <input
            type='text'
            placeholder='Introducir curso deseado...'
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={() => Buscar}>Buscar</button>
        </div>


      </div>
    );
  }

  export default App;
