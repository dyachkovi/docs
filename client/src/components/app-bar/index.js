import React from 'react'
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"

const ApplicationBar = ({ onMenuShow }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton color='inherit' onClick={onMenuShow}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">
          Docs
    </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default ApplicationBar