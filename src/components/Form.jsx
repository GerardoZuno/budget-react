import React, {useState}from 'react'

function Form() {
    return (
        <form>
            <h2>Agrega tus Gastos</h2>
            <div className="campo">
                <label >Nombre Gasto</label>
                <input 
                type="text"
                className="u-full-width"
                placeholder="Ej. Transporte" />
            </div>
            <div className="campo">
                <label >Cantidad Gasto</label>
                <input 
                type="number"
                className="u-full-width"
                placeholder="Cantidad gasto" />
            </div>
            <input 
            type="submit"
            className="u-full-width button-primary"
            value="Agregar Gasto" />
        </form>
    )
}

export default Form
