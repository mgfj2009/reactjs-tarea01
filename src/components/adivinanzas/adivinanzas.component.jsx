import React from "react";

import AdivinanzaAyuda from "../adivinanza-ayuda/adivinanza-ayuda.component";
import AdivinanzaSolucion from "../adivinanza-solucion/adivinanza-solucion.component";


import "./adivinanzas.styles.scss";


class Adivinanzas extends React.Component{

    constructor(){
        super();

        this.state = {
            showAyuda : false,
            showSolucion : false
        }
    }

    handleAyuda = ()=>{
        this.setState({showAyuda: true});
    }

    handleSolucion = ()=>{
        this.setState({showSolucion: true})
    }
    
    render(){
        const {adivinanza, solucion, ayuda} = this.props;
        return (
            <div className="text-center">
                <div className="item text-left">
                    <div className="box heightBox adivinanzaItem"> 
                        <p>{adivinanza}</p>
                            {this.state.showAyuda ? <AdivinanzaAyuda ayuda={ayuda} /> : ''}
                            {this.state.showSolucion ? <AdivinanzaSolucion solucion={solucion}  />    : ''}

                        <div className="buttons small">
                            <button className="btn btn-secondary" onClick={this.handleAyuda.bind(this)} >Ayuda</button> 
                            <button className="btn btn-primary" onClick={this.handleSolucion.bind(this)} >Solucion</button> 
                        </div>
                    </div>
                </div>
            </div>            
        )
    }
    
}

export default Adivinanzas;





