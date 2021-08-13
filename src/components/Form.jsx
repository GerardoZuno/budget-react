import React, {useState}from 'react'
import Error from './Error'

function Form() {

    const [descriptionExpense, setDescriptionExpense] = useState('')
    const [quantityExpense, setQuantityExpense] = useState(0)
    const [error, setError] = useState(false)


    const addExpense = (e) => {
        e.preventDefault()
        if(quantityExpense < 1 || isNaN(quantityExpense)
         || descriptionExpense.trim() === '') {
            setError(true) 
            return
        }

        setError(false) 

    }


    return (
        <form onSubmit={addExpense}>
            <h2>Agrega tus Gastos</h2>
            {
                error ? <Error mensaje="Ambos campos son obligatorios
                 o presupuesto incorrecto"/> : null
            }
            <div className="campo">
                <label >Nombre Gasto</label>
                <input 
                type="text"
                className="u-full-width"
                placeholder="Ej. Transporte"
                value={descriptionExpense}
                onChange={e => setDescriptionExpense(e.target.value)}
                 />
            </div>
            <div className="campo">
                <label >Cantidad Gasto</label>
                <input 
                type="number"
                className="u-full-width"
                placeholder="Cantidad gasto"
                onChange={e => setQuantityExpense(parseInt(e.target.value, 10))}
                 />
            </div>
            <input 
            type="submit"
            className="u-full-width button-primary"
            value="Agregar Gasto" />
        </form>
    )
}

export default Form
