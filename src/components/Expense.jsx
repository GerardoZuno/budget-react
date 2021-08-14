import React from "react";
import PropTypes from 'prop-types'


function Expense({expenses}) {
  return (
    <li className="gastos">
      <p>
          {expenses.descriptionExpense}
          <span className="gasto">
           $ {expenses.quantityExpense}
          </span>
      </p>
    </li>
  );
}
Expense.propTypes = {
  expenses: PropTypes.object.isRequired
}

export default Expense;
