import React from 'react'
import Expense from './Expense'
import PropTypes from 'prop-types'

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

Lists.propTypes = {
    expenses: PropTypes.array.isRequired
}

export default Lists
