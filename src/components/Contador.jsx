import Boton from './Boton'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Contador() {
    const { valorRecibido } = useParams()
    const [contador, setContador] = useState(parseInt(valorRecibido) || 0)
    const salto = 1


    useEffect(() => {
        console.log('contador dibujando')
        return () => {
            console.log('Desmontando contador')
        }
    },[contador])

    const miArray = () => {
        const array = [{
            id: 1,
            valor: 1
        },
        {
            id: 2,
            valor: 7
        },
        {
            id: 3,
            valor: 14
        },
        {
            id: 4,
            valor: 11
        }
        ]

        const arrayFiltrado = array.filter(item => item.valor > 10)

        return (
            <p>{arrayFiltrado.map((item) => {
                return <div><span key={item.id}>{item.id}-{item.valor}</span></div>
            })}</p>
        )
    }

    const incrementar = () => setContador(contador + salto)
    const decrementar = () => setContador(contador - salto)
    const resetear = () => setContador(0)

    return (
        <div>
            {miArray()}
            <h1 className="text-5xl font-bold mb-8 px-6 py-4 border-4 border-blue-700  bg-gray-100 rounded">
                Contador: {contador}
            </h1>

            <div className="flex flex-col space-y-4">
                <Boton label="Incrementar" onClick={incrementar}></Boton>
                <Boton label="Decrementar" onClick={decrementar}></Boton>
                <Boton label={contador != 0 ? ("Resetear") : ("NO hago nada")} onClick={resetear}></Boton>
            </div>
        </div>
    )
}

export default Contador