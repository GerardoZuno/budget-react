import React from "react";
import Estimate from "./components/Estimate";

function App() {
  return (
    <div className="container">
      <header>
       
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal">
        <Estimate />
        </div>
      </header>
    </div>
  );
}

export default App;
