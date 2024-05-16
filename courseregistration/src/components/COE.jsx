import React, { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Semselection from './Semselection';
import CourseAddition from './CourseAddition';
import Verify from './Verify';
import Steps from './steps';
import '../css/COE.css';
import Header from './Header'; // Import the Header component

function COE() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { component: <Semselection />, title: 'Semester', description: 'Choose Semester' },
    { component: <CourseAddition />, title: 'Courses', description: 'Add Courses' },
    { component: <Verify />, title: 'Submit', description: 'Verify and Submit' },
  ];

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <ChakraProvider>
      <div className="coe-container">
        <Header /> {/* Render the Header component */}
        <div className="main-content">
          
          <div className="steps-wrapper">
            {/* Pass the steps array and step change handler to the Steps component */}
            <Steps steps={steps} onStepChange={handleStepChange} />
          </div>
          <div className="step-content">
            {steps[activeStep]?.component} {/* Render the component for the active step */}
          </div>
        </div>
      </div>
    </ChakraProvider>
  );
}

export default COE;
