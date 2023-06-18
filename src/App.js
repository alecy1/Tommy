import * as React from "react";
import {Routes, Route} from 'react-router-dom';
import {Navbar} from './components/Navbar';
import {Home} from './components/home';
import {Razas} from './components/razas';
import {ArticuloDeGato} from './components/gato'
import {Feed} from './components/feed';
import {About} from './components/about';
import {Footer} from './components/footer';


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/razas' element={<Razas/>}>
          <Route index element={<ArticuloDeGato/>}/>
          <Route path='gato/:id' element={<ArticuloDeGato/>}/>
        </Route>
      <Route path='/feed' element={<Feed/>} />
      <Route path='/about' element= {<About/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;


