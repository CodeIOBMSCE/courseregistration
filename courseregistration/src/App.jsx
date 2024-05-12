import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import COEPage from './components/COEPage'; // Update the import path here
import Home from './components/Home'; // Import other components/pages

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<COEPage/>} />
        <Route path="/coe" element={< COEPage/>} />
      </Routes>
    </div>
  );
}

export default App;
