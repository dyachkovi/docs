import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RefreshIcon from '@material-ui/icons/Refresh';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import PropTypes from 'prop-types'

import Menu from './components/menu'
import Document from './components/document'
import AppBar from './components/app-bar'
import reducer, {startState} from './reducer'
import documentsReducer, {initialState} from './domain/documents-reducer'
import ServerMock from './server-mock'

const server = new ServerMock()

const useStyles = makeStyles({
  fabAdd: {
    position: 'fixed',
    right: 16,
    bottom: 16
  },
  fabRefresh: {
    position: 'fixed',
    right: 48,
    top: 72
  }
});

function App() {
  const [state, dispatch] = React.useReducer(reducer, startState)
  const [documentsState, documentsDispatch] = React.useReducer(documentsReducer, initialState)
  const classes = useStyles()

  const menuShow = () => dispatch({type: 'menu show'})
  const menuHide = () => dispatch({type: 'menu hide'})
  const onAddClick = () => {
    server.addDocument()
  }
  const onRefresh = () => {
    const p = server.getDocuments()
    p.then(
      (documents) => {
        documentsDispatch({type:'set', payload:documents})
      }
    )
  }

  return (
    <div>
      <AppBar onMenuShow={menuShow} />
      <Menu 
        onClose={menuHide}
        onMenuItemClick={(menuItem) => alert(menuItem)}
        visible={state.menuVisible}
      />
      <Fab
        onClick={onRefresh}
        color="secondary"
        className={classes.fabRefresh}
      >
        <RefreshIcon />
      </Fab>
      <Fab 
        onClick={onAddClick} 
        color="primary"
        className={classes.fabAdd}
      >
        <AddIcon />
      </Fab>
      <div>
        {documentsState.documents.map((doc, index) => {
          return <Document key={index} {...doc} />
        })}
      </div>
    </div>
  )
}

App.propTypes = {
  menuVisible: PropTypes.bool,
  setMenuVisible: PropTypes.func,
}

export default App;
