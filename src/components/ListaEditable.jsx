import Boton from './Boton'
import { useState } from "react"

function ListaEditable(props){

    const [nuevoItem, setNuevoItem] = useState('')
    const [items, setItems] = useState([])
    const [mostrarCompletados, setMostrarCompletados] = useState(false)

    const agregarTarea = () => {
        if (nuevoItem === '') return

        const nuevo = {
            id: Date.now(),
            texto: nuevoItem,
            completada: false
        }
        setItems([...items, nuevo])
        setNuevoItem('')
    }

    const toggleCompletado = (id) => {
        setItems (items.map((item) => 
            
            item.id === id ? {...item, completada : !item.completada} : item
            
        ))
        setItems(listaActualizada)
    }

    const itemsFiltrados = items.filter(
        (item) => item.completada === mostrarCompletados
    )

        return (
        <div className='max-w-md mx-auto mt-8 p-4 border rounded shadow'>
            <h2 className='text-x1 font-bold mb-4'>{props.titulo}</h2>
            <input 
                className='flex-1 border px-2 py-1 rounded-1'
                type="text"
                placeholder = {props.placeholder}
                value ={nuevoItem}
                onChange={(e) => setNuevoItem(e.target.value)} //el e s el evento, target quien disparo el evento y value el valor

            />
            <Boton label="Agregar" onClick={agregarTarea}></Boton>
            <div className='mb-4'>
                <label className='flex item-center space-x-2'>
                    <input 
                    type="checkbox" 
                    checked={mostrarCompletados}
                    onChange={() => setMostrarCompletados(!mostrarCompletados)}
                    />
                    <span>Mostrar items completados</span>
                </label>
            </div>

            <ul className='space-y-2'>
                {itemsFiltrados.length === 0 ? (<li>No hay items para mostrar</li>) : (itemsFiltrados.map(
                    (item) => (
                    <li 
                        className={`flex justify-between items-center p-2 border rounded ${item.completada ? 'bg-green-100' : 'bg-white'}`}
                        key={item.id}
                    >
                        <span
                            className={`flex-1 ${item.completada ? 'line-through text-gray-500' : ''}`}
                        >{item.texto}
                        </span>
                        <Boton
                            label={item.completada ? 'Desmarcar' : 'Completar'} 
                            onClick={() => toggleCompletado(item.id)} />
                        
                    </li>
                )))}
            </ul>


        </div>
    )
    }

    


export default ListaEditable