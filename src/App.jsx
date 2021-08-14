import React, { useState, useEffect } from "react";
import Budget from "./components/Budget";
import BudgetControl from "./components/BudgetControl";
import Form from "./components/Form";
import Lists from "./components/Lists";

function App() {
  const [budget, setBudget] = useState(0);
  const [remainingBudget, setRemainingBudget] = useState(0);
  const [isBudget, setIsBudget] = useState(true);
  const [expenses, setExpenses] = useState([])
  const [gasto, setGasto] = useState({})
  const [makeExpense, setMakeExpense] = useState(false)


  useEffect(() =>{
    if(makeExpense){
      setExpenses([
        ...expenses,
        gasto
    ])
    } 
    setMakeExpense(false)

    const remaining = remainingBudget - gasto.quantityExpense
    setRemainingBudget(remaining)
    
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gasto])

 

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
              <Form setGasto={setGasto}
               setMakeExpense={setMakeExpense}
               />
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
