import React, {useRef, useEffect} from "react";
import {Link} from 'react-router-dom';
import {gato} from "./RazasDeGato";

export const Home = () => {
  return(
          <>
            <Video/>
            <MainContent/>
          </>
        );
}

function MainContent()
  {
    const data = (
      gato.map((gato,i)=>
        <React.Fragment key={i}>
          <div className="col- col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
            <div key={gato.id} className="card">
              <figure>
                <img src={gato.image} alt={gato.raza} className="card-img" />
                  <figcaption className="card-title ">{gato.raza}</figcaption>
              </figure>
                <Link  to={`razas/gato/${gato.id}`} className="button button1">Mas información</Link>
            </div>
          </div>
        </React.Fragment>
      ));
        return (<div className="z-container"><div className="row">{data}</div></div>)
  }

    
function Video(){
  const videoOfTommy = useRef(null);
  const attemptPlay = () => {
    videoOfTommy && videoOfTommy.current && videoOfTommy.current.play().catch(error =>{
      console.error("Error attempting to play", error);
    });
  };
  useEffect(() => {
    attemptPlay();
  },[]);

  return(
          <>
          <div className="row">
              <video className="col- col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"
                playsInline
                loop
                muted 
                alt="Tommy is cute"
                src="videos/cat4.mp4"
                type="video/mp4"
                ref={videoOfTommy}
              />
          </div>
          </>
        )
}

