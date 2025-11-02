import { Link, useNavigate } from "react-router-dom"
import Boton from "./Boton"
import { useState } from "react"

function Saludo(props) {
    const navigate = useNavigate()
    const [valor, setValor] = useState(0)

    const handleValorInicial = (event) => {
        setValor(parseInt(event.target.value) || 0)
    }

    const click = () => {
        navigate(`/contador/${valor}`)
    }

    return (
        <div>
            <h1>Hola {props.nombre} {props.apellido}</h1>
            <input
                type="number"
                value={valor}
                onChange={handleValorInicial}
                placeholder="Valor inicial del contador..."
            />

            {/* Para navegar a otra ruta se puede usar Link y useNavigate */}

            <Boton label="Ir a Contador" onClick={click} />

            <Link to='/lista'>
                <Boton label="Ir a Lista de Tareas" />
            </Link>
        </div>
    )
}

export default Saludo