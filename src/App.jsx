import React, { useState } from "react";
import Budget from "./components/Budget";
import BudgetControl from "./components/BudgetControl";
import Form from "./components/Form";
import Lists from "./components/Lists";

function App() {
  const [budget, setBudget] = useState(0);
  const [remainingBudget, setRemainingBudget] = useState(0);
  const [isBudget, setIsBudget] = useState(true);
  const [expenses, setExpenses] = useState([])


 

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal">
          {isBudget ?(
            <Budget
              setBudget={setBudget}
              setRemainingBudget={setRemainingBudget}
              setIsBudget={setIsBudget}
            />
          ) : (
            <div className="row">
            <div className="one-half column">
              <Form setExpenses={setExpenses} expenses={expenses}/>
            </div>
            <div className="one-half column">
              <Lists expenses={expenses}/>
              <BudgetControl
               budget={budget} 
               remainingBudget={remainingBudget}
               />
              </div>
          </div>
          )}
         
         </div>

      </header>
    </div>
  );
}

export default App;
