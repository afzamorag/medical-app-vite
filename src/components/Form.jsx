import React from 'react'
import Card from './Card'

const Form = () => {
    return (
        <div>
            <form>
                <label htmlFor="">Nombres</label>
                <input type="text" />
                <label htmlFor="">Obra social</label>
                <input type="text" />
                <label htmlFor="">Email</label>
                <input type="email" />
                <select>
                    <option value="">Seleccione una opción</option>
                    <option value="Dermatología">Dermatología</option>
                    <option value="Ortopedia">Ortopedia</option>
                    <option value="Cardiología">Cardiología</option>
                </select>
            </form>
            <Card />
        </div>
    )
}

export default Form