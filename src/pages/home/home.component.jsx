import React from 'react';
import HomeBody from '../../components/home-body/home-body.component';

import './home.styles.scss';

const Home = () => (

    <div className="row">
    <div className="col-md-1"></div>
    <div className="col-md-10">
        <h1 className="title">Adivinanzas</h1>
        <HomeBody />
    </div>
    <div className="col-md-1"></div>		
</div>  

);

export default Home;
