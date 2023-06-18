import React from "react";
import { gato } from "./RazasDeGato";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPaw,faShieldCat,faCat,faSpinner,faBars} from '@fortawesome/free-solid-svg-icons';
library.add(faPaw,faShieldCat,faCat,faSpinner,faBars)

function Bengala(){
  
  return(
          <>
            <div className="container">
              {gato.filter(gatoB => gatoB.raza === "Bengala").map(gato =>
                <React.Fragment key={gato.id}>
                  <div className="row">
                    <div className="col- col-sm-6 col-md-7 col-lg-7 col-xl-7 col-xxl-7 descripcion">
                      <h1 className="tituloRaza">{gato.raza}</h1>
                        <p className="parrafo">{gato.descripcion}</p>
                    </div>
                    <div className="col-12 col-sm-6 col-md-5 col-lg-5 col-xl-5 col-xxl-5"><br/>
                      <img src={gato.image} alt={gato.raza} className="imgRaza"/> 
                    </div>
                  </div>
                  <div className="row" style={{padding:"30px"}}>
                    <div className="fondoIcon"><span className="iconCatFather"><FontAwesomeIcon icon={faCat} /><span style={{fontSize:"0.5em"}}>¿Sabías que?</span></span></div>
                    <div className="col- col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"> 
                      <i className="iconCat"><FontAwesomeIcon icon={faPaw} /></i><span className="textIcon"> {gato.caracteristicas1}</span><br/>
                      <i className="iconCat"><FontAwesomeIcon icon={faPaw} /></i><span className="textIcon"> {gato.caracteristicas2}</span><br/>
                      <i className="iconCat"><FontAwesomeIcon icon={faPaw} /></i><span className="textIcon"> {gato.caracteristicas3}</span><br/>
                      <i className="iconCat"><FontAwesomeIcon icon={faPaw} /></i><span className="textIcon"> {gato.caracteristicas4}</span><br/>
                      <i className="iconCat"><FontAwesomeIcon icon={faPaw} /></i><span className="textIcon"> {gato.caracteristicas5}</span><br/>
                    </div>
                    <div className="col- col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                      <i className="iconCat"><FontAwesomeIcon icon={faPaw} /></i><span className="textIcon"> {gato.caracteristicas6}</span><br/>
                      <i className="iconCat"><FontAwesomeIcon icon={faPaw} /></i><span className="textIcon"> {gato.caracteristicas7}</span><br/>
                      <i className="iconCat"><FontAwesomeIcon icon={faPaw} /></i><span className="textIcon"> {gato.caracteristicas8}</span><br/>
                      <i className="iconCat"><FontAwesomeIcon icon={faPaw} /></i><span className="textIcon"> {gato.caracteristicas9}</span><br/>
                    </div>
                </div>
                <div className="row">
                  <div className="col- col-sm-6 col-md-5 col-lg-5 col-xl-5 col-xxl-5 personalidad">
                    <img src={gato.image2} alt={gato.raza} className="imgRaza"/>  
                  </div>
                  <div className="col- col-sm-6 col-md-7 col-lg-7 col-xl-7 col-xxl-7"><br/>
                    <h1 className="tituloRaza">Personalidad</h1>
                    <p className="parrafo">{gato.personalidad}</p>
                  </div>
                </div>
              </React.Fragment>
            )
          }
        </div>
      </>
    );
}

export {Bengala};



    