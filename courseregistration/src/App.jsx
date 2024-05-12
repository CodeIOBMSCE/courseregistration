import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import COEPage from './components/COEPage'; // Update the import path here
import Home from './components/Home'; // Import other components/pages
import Header from './components/Header'; // Import Header component


function App() {

  return (
    <div>
    <Header /> {/* Include Header component */}
      <Routes>
        <Route path="/" element={<COEPage/>} />
      </Routes>
    </div>
  );
}

export default App;
