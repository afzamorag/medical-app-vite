import React, { useState } from 'react'
import Card from './Card'

const Form = () => {
    const[user, setUser] = useState({
        nombre: '',
        obraSocial: '',
        email: '',
        medico: ''
    })

    const [show, setShow] = useState(false)
    const [err, setErr] = useState(false)

    const handleSubmit = (event) =>{
        event.preventDefault()
        if(user.nombre.length > 8 && user.medico !== ''){
            setShow(true)
            setErr(false)
        }else{
            setShow(false)
            setErr(true)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Nombres</label>
                <input type="text" value={user.nombre} onChange={(e) => setUser({...user, nombre: e.target.value})}/>
                <label>Obra social</label>
                <input type="text" value={user.obraSocial} onChange={(e) => setUser({...user, obraSocial: e.target.value})}/>
                <label>Email</label>
                <input type="email" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})}/>
                <select value={user.medico} onChange={(e) => setUser({...user, medico: e.target.value})}>
                    <option value="">Seleccione una opción</option>
                    <option value="Dermatología">Dermatología</option>
                    <option value="Ortopedia">Ortopedia</option>
                    <option value="Cardiología">Cardiología</option>
                </select>
                <button>Enviar</button>
            </form>
            {err ? 'No ha ingresado la totalidad de la información' : null}
            {show ? <Card nombre = {user.nombre} medico = {user.medico}/>: null}            
        </div>
    )
}

export default Form