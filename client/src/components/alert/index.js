import React from 'react'
import PropTypes, { func } from 'prop-types'
import './index.css'
import Button from '@material-ui/core/Button'

const Alert = ({message, type, onClose, visible}) => {
  if (!visible) {
    return null
  }
  return (
    <div className='alert'>
      {message}
      <Button onClick={onClose} color='secondary' variant='outlined' classes={{label: 'gr'}}>Close</Button>
    </div>
  )
}

Alert.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func,
  message: PropTypes.func,
  type: PropTypes.bool
}

export default Alert