import React from 'react';
import { Routes , Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';

const HatsPage = () =>{
  return(
    <div>
      <h1>hats</h1>
    </div>
  );
};

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/hats' element={<HatsPage />} />
      </Routes>
    </div>
  );
}

export default App;
