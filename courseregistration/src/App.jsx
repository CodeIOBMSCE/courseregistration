import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import COE from './components/COE'; 
import Registration from './components/Registration';
import StudentCourseRegistration from './components/StudentRegistration';
import Login from './components/Login';
import Landing from './components/Landing' 
import HOD from './components/HOD'


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/COE" element={<COE/>} />
        <Route path="/HOD" element={<HOD/>} />
        <Route path="/proctor" element={<Registration/>} />
        <Route path="/studentregistration" element={<StudentCourseRegistration/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Landing" element={<Landing/>} />

      </Routes>
    </div>
  );
}

export default App;
