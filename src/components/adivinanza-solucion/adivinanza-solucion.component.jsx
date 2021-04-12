import React from "react";


const AdivinanzaSolucion = ({solucion}) => (

    <div className="clue">
        <p className="solucion solution" >
            <strong>Solución:</strong> {solucion}
        </p>
    </div>

);

export default AdivinanzaSolucion;
