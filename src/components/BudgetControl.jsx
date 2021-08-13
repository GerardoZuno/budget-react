import React from 'react'

function BudgetControl({budget, remainingBudget}) {
    return (
        <>
        <div className="alert alert-primary">
            Presupuesto: $ {budget} 
        </div>
        <div className="alert">
            Restante:  $ {remainingBudget}           
        </div>
        </>
    )
}

export default BudgetControl
