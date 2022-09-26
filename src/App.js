import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Model3 from './components/details/Model3';
import Models from './components/details/Models';
import Modelx from './components/details/Modelx';
import Modely from './components/details/Modely';
import Solarpanel from './components/details/Solarpanel';
import Solarroof from './components/details/Solarroof';

import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";





function App() {
  return (
    <div className="App">

      <Router>
         <Header />
         <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/model_3' element={<Model3 />}></Route>
            <Route path='/model_s' element={<Models />}></Route>
            <Route path='/model_x' element={<Modelx />}></Route>
            <Route path='/model_y' element={<Modely />}></Route>
            <Route path='/solar_panel' element={<Solarpanel />}></Route>
            <Route path='/solar_roof' element={<Solarroof />}></Route>

         </Routes>
         

      </Router>
      
      
     

    </div>
  );
}

export default App;
