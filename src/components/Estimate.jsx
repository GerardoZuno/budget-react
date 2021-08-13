import React from 'react'

function Estimate() {
    return (
        <div>
            <h2>Coloca tu presupuesto</h2>
            <form> 

                <input
                 type="number"
                 placeholder="Coloca tu presupuesto"
                 className="u-full-width"

                  />

                  <input 
                  type="submit"
                  className="button-primary u-full-width"
                  value="Definir presupuesto"
                   />
            


            </form>
        </div>
    )
}

export default Estimate
