import React, {useState} from 'react'
import Error from './Error';
import PropTypes from 'prop-types'



function Budget({setBudget, setRemainingBudget, setIsBudget}) {

    const [quantity, setQuantity] = useState(0);
    const [error, setError] = useState(false);


    const defineEstimate = (e) => {
       setQuantity(parseInt(e.target.value, 10))
    }

    const addEstimate = (e) => {
        e.preventDefault()
        if(quantity < 1 || isNaN(quantity)){
            setError(true)
            return
        }

        setError(false)
        setBudget(quantity)
        setRemainingBudget(quantity)
        setIsBudget(false)


    }

    return (
        <div>
            <h2>Coloca tu presupuesto</h2>
            {
                error ? (
                   <Error mensaje="El Presupuesto es Incorrecto"/>
                ) : null
            }
            <form onSubmit={addEstimate}> 

                <input
                 type="number"
                 placeholder="Coloca tu presupuesto"
                 className="u-full-width"
                 onChange={defineEstimate}

                  />

                  <input 
                  type="submit"
                  className="button-primary u-full-width"
                  value="Definir presupuesto"
                   />
            


            </form>
        </div>
    )
}

Budget.propTypes = {
    setIsBudget: PropTypes.func.isRequired,
    setRemainingBudget: PropTypes.func.isRequired,
    setBudget: PropTypes.func.isRequired


}

export default Budget
