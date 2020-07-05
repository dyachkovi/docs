import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import OutboxIcon from '@material-ui/icons/Unarchive';
import SettingsIcon from '@material-ui/icons/Settings';

const Menu = ({
  visible,
  onClose,
  onMenuItemClick
}) => {
  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={visible}
    >
      <div>
        <IconButton onClick={onClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListItem button onClick={() => onMenuItemClick('Inbox')}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={'Inbox'} />
        </ListItem>
        <ListItem button onClick={() => onMenuItemClick('Outbox')}>
          <ListItemIcon>
            <OutboxIcon />
          </ListItemIcon>
          <ListItemText primary={'Outbox'} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button onClick={() => onMenuItemClick('Settings')}>
            <ListItemIcon>
              <SettingsIcon /> 
            </ListItemIcon>
            <ListItemText primary={'Settings'} />
          </ListItem>
      </List>
    </Drawer>
  )
}

export default Menu