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

  const handleStepChange = (step) => {
    setActiveStep(step);
    console.log('Current Step:', step); // Log the current step to the console
  };

  const steps = [
    { component: <Semselection onSelectSemester={() => {}} onNextStep={() => handleStepChange(1)} />, title: 'Semester', description: 'Choose Semester' },
    { component: <CourseAddition onNextStep={() => handleStepChange(2)} />, title: 'Courses', description: 'Add Courses' },
    { component: <Verify />, title: 'Submit', description: 'Verify and Submit' },
  ];

  return (
    <ChakraProvider>
      <div className="coe-container">
        <Header /> {/* Render the Header component */}
        <div className="main-content">
          <div className="steps-wrapper">
            {/* Pass the steps array and step change handler to the Steps component */}
            <Steps steps={steps} onStepChange={handleStepChange} activeStep={activeStep} />
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
