import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import COE from './components/COE'; 
import Registration from './components/Registration';


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<COE/>} />
        <Route path="/proctor" element={<Registration/>} />
      </Routes>
    </div>
  );
}

export default App;
