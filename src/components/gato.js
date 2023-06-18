import React, {useState} from 'react';
import { gato } from "./RazasDeGato";
import {imagenes} from "./ImagenesDeGato";
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPaw,faShieldCat,faCat,faSpinner,faBars} from '@fortawesome/free-solid-svg-icons';
library.add(faPaw,faShieldCat,faCat,faSpinner,faBars)


export const ArticuloDeGato = () => {
  const params  = useParams(); 
  const id = params.id;
  const articulo = id ? <ArticuloDeGato1/> : <ArticuloDeGato2/>;
  return articulo;
}

function ArticuloDeGato1(){
  const params  = useParams(); 
  const id = params.id;
  return(
          <>
          <div className="container">
            {
              gato.filter(gatoB => gatoB.id == id ).map(gato =>
                <React.Fragment key={gato.id}>
                  <div className="row">
                    <div className="col- col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 descripcion">
                      <h1 className="tituloRaza">{gato.raza}</h1>
                      <p className="parrafo">{gato.descripcion}</p>
                    </div>
                      <Galery id={id} raza={gato.raza}/>
                  </div>
                  <div className="row" style={{padding:"30px"}}>
                    <div className="fondoIcon"><span className="iconCatFather"><FontAwesomeIcon icon={faCat} /><span style={{fontSize:"0.5em"}}>¿Sabías que?</span></span></div>
                      <div className="col- col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"> 
                        <i className="iconCat"><FontAwesomeIcon icon={faPaw} /></i><span className="textIcon">{gato.caracteristicas1}</span><br/>
                        <i className="iconCat"><FontAwesomeIcon icon={faPaw} /></i><span className="textIcon">{gato.caracteristicas2}</span><br/>
                        <i className="iconCat"><FontAwesomeIcon icon={faPaw} /></i><span className="textIcon">{gato.caracteristicas3}</span><br/>
                        <i className="iconCat"><FontAwesomeIcon icon={faPaw} /></i><span className="textIcon">{gato.caracteristicas4}</span><br/>
                        <i className="iconCat"><FontAwesomeIcon icon={faPaw} /></i><span className="textIcon">{gato.caracteristicas5}</span><br/>
                      </div>
                      <div className="col- col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <i className="iconCat"><FontAwesomeIcon icon={faPaw} /></i><span className="textIcon">{gato.caracteristicas6}</span><br/>
                        <i className="iconCat"><FontAwesomeIcon icon={faPaw} /></i><span className="textIcon">{gato.caracteristicas7}</span><br/>
                        <i className="iconCat"><FontAwesomeIcon icon={faPaw} /></i><span className="textIcon">{gato.caracteristicas8}</span><br/>
                        <i className="iconCat"><FontAwesomeIcon icon={faPaw} /></i><span className="textIcon">{gato.caracteristicas9}</span><br/>
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


function ArticuloDeGato2(){
  return(
          <>          
            <div className="container">
              {
                gato.filter(gatoB => gatoB.id === 1 ).map(gato =>
                  <React.Fragment key={gato.id}>
                  <div className="row">
                    <div className="col- col-sm-6 col-md-7 col-lg-7 col-xl-7 col-xxl-7 descripcion">
                      <h1 className="tituloRaza">{gato.raza}</h1>
                      <p className="parrafo">{gato.descripcion}</p>
                    </div>
                      <Galery id="1" raza={gato.raza}/>
                  </div>
                  <div className="row" style={{padding:"30px"}}>
                    <div className="fondoIcon"><span className="iconCatFather"><FontAwesomeIcon icon={faCat} /><span style={{fontSize:"0.5em"}}>¿Sabías que?</span></span></div>
                      <div className="col- col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"> 
                        <i className="iconCat"><FontAwesomeIcon icon={faPaw} /></i><span className="textIcon">{gato.caracteristicas1}</span><br/>
                        <i className="iconCat"><FontAwesomeIcon icon={faPaw} /></i><span className="textIcon">{gato.caracteristicas2}</span><br/>
                        <i className="iconCat"><FontAwesomeIcon icon={faPaw} /></i><span className="textIcon">{gato.caracteristicas3}</span><br/>
                        <i className="iconCat"><FontAwesomeIcon icon={faPaw} /></i><span className="textIcon">{gato.caracteristicas4}</span><br/>
                        <i className="iconCat"><FontAwesomeIcon icon={faPaw} /></i><span className="textIcon">{gato.caracteristicas5}</span><br/>
                      </div>
                      <div className="col- col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <i className="iconCat"><FontAwesomeIcon icon={faPaw} /></i><span className="textIcon">{gato.caracteristicas6}</span><br/>
                        <i className="iconCat"><FontAwesomeIcon icon={faPaw} /></i><span className="textIcon">{gato.caracteristicas7}</span><br/>
                        <i className="iconCat"><FontAwesomeIcon icon={faPaw} /></i><span className="textIcon">{gato.caracteristicas8}</span><br/>
                        <i className="iconCat"><FontAwesomeIcon icon={faPaw} /></i><span className="textIcon">{gato.caracteristicas9}</span><br/>
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

function Galery(props){
  const id = props.id;
  const name = props.raza;
  const [currentImages, setCurrentImages] = useState(0);
  const handleImage = (e) => {
    setCurrentImages(e.target.id);
  }
  const raza = imagenes.filter(imagen => imagen.name === name || imagen.id == id );
  return( 
    <>
    <div className="col- col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
       {raza.map((raza,i) =>
        <React.Fragment key={i}>
          {currentImages === i &&(<img src={raza.src} alt="bengala" className="imageIzq "/>)|| currentImages === `${raza.id}`&&(<img src={raza.src} alt="bengala" className="imageIzq "/>)}
        </React.Fragment>
      )}
    </div>
    <div className="col- col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2 ">
      {raza.map((raza,i) =>
        <img src={raza.src} alt="bengala" className="botonImg" key={raza.id}  id={raza.id}  onClick={(handleImage)} />
      )}
    </div>
    </>
    );
}