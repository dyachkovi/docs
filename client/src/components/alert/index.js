import React from 'react'
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

export default Alert