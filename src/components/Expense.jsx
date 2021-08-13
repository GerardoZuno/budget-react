import React from "react";

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

export default Expense;
