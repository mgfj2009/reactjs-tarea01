import React from 'react';

import './about.styles.scss';

const About = () => (
<div className="container-fluid">
    <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
        <blockquote>
            <p>Nota</p>
            <p>Implementaciones en la aplicación:</p>
            <ul>
                <li>Uso de componentes (stateless y stateful)</li>
                <li>Arquitectura de estado</li>
                <li>Comunicación de componentes - Props y CustomProps</li>
                <li>Definir rutas y navegación.</li>
                <li>Libreria Bootsrap</li>
            </ul>
        </blockquote>
        </div>
        <div className="col-md-3"></div>
    </div>
</div>
)

export default About;
