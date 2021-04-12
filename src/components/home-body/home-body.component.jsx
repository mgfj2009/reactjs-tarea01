import React from "react";

import Data from "../../constant/data.js";
import Adivinanzas from "../adivinanzas/adivinanzas.component";

import "./home-body.styles.scss";


class HomeBody extends React.Component{

	constructor(){
		super();
		this.state =  { adivinanzas: Data };
	}

	render(){ 

		return ( 
			<div className="row">
				<div className="col-md-4"></div>
				<div className="col-md-4">
				{this.state.adivinanzas.map(({ id, ...otherAdivinanzasProps }) => (
			  		<Adivinanzas key={id} {...otherAdivinanzasProps} />
				))}					
				</div>
				<div className="col-md-1"></div>		
			</div>    
	  
		);
	
	  }


}

export default HomeBody;







