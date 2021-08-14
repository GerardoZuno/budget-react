import React from 'react'
import { checkBudget } from '../helper.js'
import PropTypes from 'prop-types'


function BudgetControl({budget, remainingBudget}) {
    return (
        <>
        <div className="alert alert-primary">
            Presupuesto: $ {budget} 
        </div>
        <div className={checkBudget(budget, remainingBudget)}>
            Restante:  $ {remainingBudget}           
        </div>
        </>
    )
}

BudgetControl.propTypes = {
    budget: PropTypes.number.isRequired,
    remainingBudget: PropTypes.number.isRequired,
    


}

export default BudgetControl
