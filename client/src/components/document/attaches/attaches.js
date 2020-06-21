import React from 'react'
import PropTypes from 'prop-types'
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import GetAppIcon from '@material-ui/icons/GetApp';

import Exts from './exts'

const FileIcon = ({name}) => {
  const [ _, ext ] = name.split('.')
  const IconComponent = Exts[ext] || Exts.default 
  
  return <IconComponent />
}

const DocumentAttaches = ({attaches}) => {
  return (
    <List orientation="vertical">
      {attaches.map(({name, url}, index) => (
        <ListItem key={index}>
          <ListItemAvatar>
            <Avatar>
              <FileIcon name={name} />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={name}
          />
          <ListItemSecondaryAction>
            <IconButton>
              <GetAppIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  )
}

DocumentAttaches.propTypes = {
  visible: PropTypes.bool
}

export default DocumentAttaches