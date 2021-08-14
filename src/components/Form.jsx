import React, {useState}from 'react'
import Error from './Error'
import shortid from 'shortid'
import PropTypes from 'prop-types'


function Form({setGasto, setMakeExpense}) {

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
        

        const gasto = {
           descriptionExpense,
           quantityExpense,
           id: shortid.generate()
        }
        setGasto(gasto)
        setMakeExpense(true)

        setDescriptionExpense('')
        setQuantityExpense(0)
        

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
                value={quantityExpense}
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

Form.propTypes = {
    setGasto : PropTypes.func.isRequired,
    setMakeExpense: PropTypes.func.isRequired
}
export default Form
