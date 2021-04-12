import React from "react";


const AdivinanzaAyuda = ({ayuda}) => (
    <div className="clue">
    <p className="pistaSolucion">
        <strong>Pista:</strong> {ayuda}
    </p>
</div>
);

export default AdivinanzaAyuda;