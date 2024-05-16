import React from 'react';
import {
  Box,
  Stepper,
  Step,
  StepIndicator,
  StepSeparator,
  StepStatus,
  StepTitle,
  StepDescription,
  StepIcon,
  StepNumber,
  useSteps,
} from '@chakra-ui/react';
import '../css/steps.css';

const Steps = ({ steps, onStepChange, activeStep }) => {
  const { setActiveStep } = useSteps({
    index: activeStep, // Use the activeStep prop as the initial active step index
    count: steps.length,
  });

  const handleStepClick = (index) => {
    setActiveStep(index);
    onStepChange(index); // Notify parent component about the step change
  };

  return (
    <div className="steps-container">
      <Stepper index={activeStep} orientation="vertical" height="500px" gap="0">
        {steps.map((step, index) => (
          <Step key={index} onClick={() => handleStepClick(index)}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>

            <Box flexShrink="0">
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </Box>

            <StepSeparator />
          </Step>
        ))}
      </Stepper>
      <div className="step-navigation">
        <button
          className="nav-button"
          disabled={activeStep === 0}
          onClick={() => handleStepClick(activeStep - 1)}
        >
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <button
          className="nav-button"
          disabled={activeStep === steps.length - 1}
          onClick={() => handleStepClick(activeStep + 1)}
        >
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
    </div>
  );
};

export default Steps;
