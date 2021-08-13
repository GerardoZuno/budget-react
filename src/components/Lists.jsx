import React from 'react'
import Expense from './Expense'

function Lists({expenses}) {
    return (
        <div className="gastos-realizados">
            <h2>Listado</h2>
            {
                expenses.map(expenses =>(
                    <Expense key={expenses.id}  expenses={expenses}/>
                ))
            }
        </div>
    )
}

export default Lists
