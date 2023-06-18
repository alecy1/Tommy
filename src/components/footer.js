import * as React from "react";
import {Link} from 'react-router-dom';
import {gato} from "./RazasDeGato";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhone,faEnvelope} from '@fortawesome/free-solid-svg-icons';
library.add(faPhone,faEnvelope)


export const Footer = () => {
  return (
          <DespliegaFooter/> 
         )
}

function DespliegaFooter(){
  return(
    <footer className="footer">
    <div className="row">
      <div className="col- col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
        <ul className="menu-footer">
          <li className="menu-li titulo">Razas de gato</li>
          {gato.map((gato,i)=>
            <React.Fragment key={i}>
              <li><Link to={`razas/gato/${gato.id}`} className="menu-li">{gato.raza}</Link></li>
            </React.Fragment>
            )
          }
        </ul>
      </div>

      <div className="col- col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
        <ul className="menu-footer">
          <li className="menu-li titulo">Menu</li>
          <li><Link to="/" className="menu-li">Inicio</Link></li>
          <li><Link to="/feed" className="menu-li">Alimentacion</Link></li>
          <li><Link to="/about" className="menu-li">Contacto</Link></li>
        </ul>
      </div>

      <div className="col- col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <p className="text-justify">Si estás buscando dónde comprar tu pequeña mascota, un lindo gatito tenemos un gran abanico de mascotas en venta para ti.</p>
        <ul className="menu-footer">
          <li className="menu-li titulo">Contactame</li>
          <li className="menu-li"><FontAwesomeIcon icon={faPhone}/> 44-48 836 294</li>
          <li className="menu-li"><FontAwesomeIcon icon={faEnvelope}/> mascotas@tommy.com</li>
          <li className="menu-li">Github: https://github.com/alecy1</li>
          <li className="menu-li">Horario telefónico: Lun a Vie 9:00h a 18:00h</li>
        </ul>
      </div>
    </div>

    <div className="row arz-linea">
      <div className="col- col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <p className="text-center">&copy;  Company, Inc. All rights reserved.</p>
      </div>
    </div>
  </footer>
);
}
