import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Screen1 from './containers/Screen1/Screen1';
import Screen2 from './containers/Screen2/Screen2';


function App() {
  return (
    <BrowserRouter>
      <div>


        <Routes>
          <Route path='/' element={<Screen1 />} />
          <Route path='screen2' element={<Screen2 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
