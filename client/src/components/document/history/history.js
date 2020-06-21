import React from 'react'
import PropTypes from 'prop-types'
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

const HistoryItemIcon = ({icon}) => {
  switch (icon) {
    case null: 
      return <VisibilityOffIcon />

    case 'negotiated':
      return <CheckIcon />

    case 'return': 
      return <KeyboardReturnIcon />

    case 'cancel':
      return <CloseIcon />
    
    default: 
      return null
  }
}

const DocumentHistory = ({ history }) => {
  return (
    <List orientation="vertical">
      {history.map((step, index) => (
        <ListItem key={index}>
          <ListItemAvatar>
            <Avatar>
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={step.responsible}
            secondary={step.position}
          />
          <ListItemSecondaryAction>
            <HistoryItemIcon icon={step.state} />
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  )
}

DocumentHistory.propTypes = {
  visible: PropTypes.bool
}

export default DocumentHistory