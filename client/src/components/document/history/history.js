import React from 'react'
import PropTypes from 'prop-types'
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';

const DocumentHistory = ({ history }) => {
  return (
    <Stepper activeStep={2} orientation="vertical">
      {history.map((step) => (
        <Step>
          <StepLabel>
            {step.responsible}
          </StepLabel>
          <StepContent>
            {step.responsible}
          </StepContent>
        </Step>
      ))}
    </Stepper>
  )
}

DocumentHistory.propTypes = {
  visible: PropTypes.bool
}

export default DocumentHistory