import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography';

const DocumentInformation = () => {
  return (
    <Typography variant='body1'>
      some information
    </Typography>
  )
}

DocumentInformation.propTypes = {
  visible: PropTypes.bool
}

export default DocumentInformation