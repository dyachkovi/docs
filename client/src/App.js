import React from 'react';
import PropTypes from 'prop-types'

import Menu from './components/menu'
import AppBar from './components/app-bar'
import reducer, {startState} from './reducer'

function App() {
  const [state, dispatch] = React.useReducer(reducer, startState)
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
    </div>
  )
}

App.propTypes = {
  menuVisible: PropTypes.bool,
  setMenuVisible: PropTypes.func,
}

export default App;
