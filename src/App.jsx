import React, { useState } from "react";
import Budget from "./components/Budget";
import Form from "./components/Form";

function App() {
  const [budget, setBudget] = useState(0);
  const [remainingBudget, setRemainingBudget] = useState(0);
  const [isBudget, setIsBudget] = useState(true);

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
              <Form />
            </div>
            <div className="one-half column">2</div>
          </div>
          )}
         
         </div>

      </header>
    </div>
  );
}

export default App;
