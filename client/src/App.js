import React from 'react';
import PropTypes from 'prop-types'

import Menu from './components/menu'
import Document from './components/document'
import AppBar from './components/app-bar'
import reducer, {startState} from './reducer'
import documentsReducer, {initialState} from './domain/documents-reducer'

function App() {
  const [state, dispatch] = React.useReducer(reducer, startState)
  const [documentsState, documentsDispatch] = React.useReducer(documentsReducer, initialState)

  const menuShow = () => dispatch({type: 'menu show'})
  const menuHide = () => dispatch({type: 'menu hide'})

  return (
    <div>
      <AppBar onMenuShow={menuShow} />
      <Menu 
        onClose={menuHide}
        onMenuItemClick={(menuItem) => alert(menuItem)}
        visible={state.menuVisible}
      />
      <button onClick={() => documentsDispatch({type: 'add'})}>
        add
      </button>
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
