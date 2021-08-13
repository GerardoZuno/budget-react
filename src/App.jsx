import React, {useState} from "react";
import Budget from "./components/Budget";

function App() {

  const [budget, setBudget] = useState(0)
  const [remainingBudget, setRemainingBudget] = useState(0)


  return (
    <div className="container">
      <header>
       
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal">
        <Budget 
        setBudget={setBudget}
        setRemainingBudget={setRemainingBudget}/>
        </div>
      </header>
    </div>
  );
}

export default App;
