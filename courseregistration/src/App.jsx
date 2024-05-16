import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import COE from './components/COE'; 

function App() {

  return (
    <div>
     {/* Include Header component */}
      <Routes>
        <Route path="/" element={<COE/>} />
      </Routes>
    </div>
  );
}

export default App;
