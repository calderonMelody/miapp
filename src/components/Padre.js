import React from "react"
import Hijo from "./Hijo"

function Padre (){
    let regalo = "moto"
    return(
        <>
            <h1>Componente padre</h1>
            <Hijo 
            propRegalo={regalo}
            />
        </>

    )
}
export default Padre