import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ListaEditable from './components/ListaEditable';
import Contador from './components/Contador';
import Saludo from './components/Saludo';


function App() {
  const user = {
    nombre: "Luca",
    apellido: "Ferrante",
  }

  const [mostrarContador, setMostrarContador] = useState(false)

  return (
    // <div className="flex flex-col items-center justify-center h-screen">
    //   <Saludo usuario={user}></Saludo>
    //   <Contador></Contador>
    // </div>
    //       <ListaEditable
    //     titulo="Lista de Tareas"
    //     placeholder = "Escribe una tarea"
    //  />

    /*<div className="flex flex-col items-center justify-center h-screen">
      <label className='flex item-center space-x-2'>
        <input
          type="checkbox"
          onChange={() => setMostrarContador(!mostrarContador)}
        />
        <span>Mostrar contador</span>
      </label>
      {mostrarContador && (<Contador />)}
    </div>*/

    <div className="flex flex-col items-center justify-center h-screen">
      <Routes>
        <Route path='/' element={<Saludo nombre="Luca" apellido="Ferrante" />} />
        <Route path='/contador' element={<Contador />} />
        <Route path='/contador/:valorRecibido' element={<Contador />} />
        <Route path='/lista' element={<ListaEditable titulo="Lista de tareas" placeholder="Ingrese una tarea" />} />
      </Routes>
    </div>

  )
}

export default App
