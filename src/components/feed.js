import React, {useState} from 'react';

const tablaCaracteristicas = [
  {id:1,features:'Macho',peso:'3.5-7',gramos:'60-120'},
  {id:2,features:'Macho castrado',peso:'4.5-7.5',gramos:'50-100'},
  {id:3,features:'Hembra',peso:'2.5-6',gramos:'50-90'},
  {id:4,features:'Hembra castrada',peso:'3-7',gramos:'40-80'},
];
const tablaNutrientes = [
  {id:1,nutriente:'Proteina', cantidad:'Min. 26%'},
  {id:2,nutriente:'Extracto etéreo',cantidad:'Mín. 9%'},
  {id:3,nutriente:'Fibra',cantidad:'Máx. 3%'},
  {id:4,nutriente:'Cenizas',cantidad:'Máx. 10%'},
  {id:5,nutriente:'Calcio',cantidad:'Mín. 0,6% Máx. 1.6%'},
  {id:6,nutriente:'Fósforo',cantidad:'Mín. 0,5% Máx. 1.3%'},
  {id:7,nutriente:'Humedad',cantidad: 'Máx. 12%'},
  {id:8,nutriente:'Energia Metabolizante',cantidad:'3,400 kcal./kg M.S.'},
];
const comidaDeGato= [
    {
      id:1,
      title:'RAZA GATO PESCADO 10KG',
      descripcion:'Elaborado para satisfacer el fino paladar de los felinos, el alimento balanceado para gatos sabor pescado ofrece a tu mascota todo lo que necesita.',
      precio :'$14.990',
      imagen: 'raza_gato.jpg',
      nameImagen: 'Raza'
    }
];
export const Feed = () => {
	return(
        <div className="container">
          <SeccionComida data={comidaDeGato}/>
          <Tabs/>
        </div>
      );
}

function Fila(props) {
  const data = props.data;
	return (
        data.map(data => (
          <React.Fragment key={data.id}>
            <tr>
              	<td>{data.features}</td>
              	<td>{data.peso}</td>
              	<td>{data.gramos}</td>
            </tr>
          </React.Fragment>
      ))
  );
}

function Fila2(props){
  const dato = props.data;
	return (
    <>
    <tr className="fs-6 fw-bold"><th>Análisis Garantizado:</th></tr>
    {
      dato.map((data,i )=> (
        // Sin el 'key', React disparará una advertencia de key
        <React.Fragment key={i}>
        <tr>
          	<td>{data.nutriente}</td>
          	<td>{data.cantidad}</td>
        </tr>
        </React.Fragment>
      ))
    }
    </>
  );
}

function Tabla() {
  return (
    <>
    <table className="table table-striped table-hover">
      <thead>
        <tr>
        	<th>Caracteristicas del gato</th>
        	<th>Peso del gato(Kg)</th>
        	<th>Grs. de Alimento por dia</th>
        </tr>
      </thead>
      <tbody>
        <Fila data={tablaCaracteristicas}/>
        <Fila2 data={tablaNutrientes}/>
      </tbody>
    </table>
    </>
    );
}

function SeccionComida(props){
  const dato = props.data;
  const data = (
  dato.map((dato) => 
      <React.Fragment key={dato.id}>
        <div className="col- col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
          <figure>
          <img className="imgFeed" src={dato.imagen} alt={dato.nameImagen}/>
          <figcaption></figcaption>
          </figure>
        </div>
        <div className="col- col-sm-8 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
            <h3 style={{fontSize:'x-large',fontWeight:'bold'}}>{dato.title}</h3>
            <p style={{textAlign:'justify'}}>{dato.descripcion}</p>
            <p><strong>Precio:</strong> {dato.precio}</p>
        </div>
      </React.Fragment>
    )
  );
  return(<div className="row">{data}</div>);
}

const Tabs = () => {
const [currentTab, setCurrentTab] = useState('1');
const tabs = [
  {
    id:1,
    tabTitle:'Descripción',
    title:'Descripción',
    content:'El delicioso sabor del pescado que atrae tanto a los felinos, se complementa con carne y arroz para formar el alimento balanceado ideal para gatos. Contiene un complejo vitamínico mineral con Omega 3 y 6 y el agregado de Taurina, que contribuye a prevenir la ceguera, fortalecer la salud del corazón, disminuir la influencia del síndrome urológico felino y ayuda a que tu mascota tenga una excelente vitalidad.'
  },
  {
    id:2,
    tabTitle:'Información adicional',
    title:'Información adicional',
    content:'Peso total 10kg y sus dimensiones:	60 × 10 × 37 cm',
  },
  {
    id:3,
    tabTitle:'Ingredientes',
    title:'Ingredientes',
    content:'Harina de pescado, harina de vísceras de pollo, maíz, arroz, pellet de soja, gluten meal, grasa animal vacuna, harina de carne bovina, levadura deshidratada, resaltador de palatabilidad: hidrolizado, trigo, pellet de afrechillo de trigo, germen de trigo, cloruro de sodio, cloruro de potasio, acidificante (bisulfato de sodio), fosfato bicalcico, colina antifúngico (dipropionato de amonio), extracto de yuca, sulfato de zinc, oxido manganoso, sulfato ferroso, iodato de calcio, cobre tribásico, selenito de sodio, vitaminas A, D3, E, K3, B1, B2, B6, B12, D-pantotenato de calcio, acido nicotínico, acido fólico, biotina, antioxidante (BHT), lisina, metionina y taurina.'
  },
  {
    id:4,
    tabTitle:'Beneficios',
    title:'Beneficios',
    content:'Con un complejo vitamínico mineral con Omega 3 y 6 y el agregado de Taurina, contribuye a prevenir la ceguera, fortalece la salud del corazón, disminuye la influencia del síndrome urológico felino y ayuda a tu mascota a tener una excelente vitalidad.'
  },
  {
    id:5,
    tabTitle:'Tabla Nutricional',
    title:'Tabla Nutricional',
    content:<Tabla/>
  }

];

const handleTabClick = (e) =>{
  setCurrentTab(e.target.id);
}
    return(
      <div className="row">
          <div className="col- col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
              {tabs.map((tab,i) =>
                <button className="buttonFeed buttonFeed1" key={i} id={tab.id} disabled={currentTab===`${tab.id}`} onClick={handleTabClick}>{tab.tabTitle}</button>
              )}
          </div>
          <div className=' col- col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12'>
              {tabs.map((tab,i) =>
                <React.StrictMode key={i}>
                  {currentTab===`${tab.id}` && <span className="tabContent">{tab.content}</span>}  
                </React.StrictMode>
                )
              }
          </div>
      </div>
    );
}
