import React from 'react';
import {Link, Outlet} from 'react-router-dom';
import {gato} from "./RazasDeGato";

function Razas(){

  return(
      <>
         <div className="row space">
          <div className="col- col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="menuRazas">
            {gato.map((gato,i)=>(
              <React.Fragment key={gato.id}>
                <Link  to={`gato/${gato.id}`} className="link">{gato.raza}</Link>
              </React.Fragment>
              ))}
            </div>
          </div>
        </div>
        <Outlet/>
      </>
    );
}

export {Razas};



    