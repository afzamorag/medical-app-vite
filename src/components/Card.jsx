import React from 'react'

const Card = ({nombre, medico}) => {

    const date = new Date()
    const dia = date.getDate()
    const mes = date.getMonth()

    return (
        <div>
             <h2>Los datos de su cita son:</h2>
            <h3>Nombre: {nombre}</h3>           
            <h3>Especialidad: {medico}</h3>
            <h3>Fecha: {dia + 7}/{mes + 1} a las 16:00 horas</h3>
        </div>
    )
}

export default Card