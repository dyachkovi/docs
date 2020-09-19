import React from 'react'
import {reducer, initialState} from './reducer'
import TextField from '@material-ui/core/TextField';

const GithubUsers = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  
  React.useEffect(
    () => {
      const fn = async () => {
        const url = `https://api.github.com/search/users?q=${state.q}`
        dispatch({ type: 'load' })
        const response = await fetch(url)
        const body = await response.json()
        dispatch({ type: 'set users', payload: body.items || [] })
      }
      fn()


      

    /*  fetch(url)
        .then((response) => {
          return response.json()
        })
        .then((body) => {
          dispatch({type: 'set users', payload: body.items || []})
        })
        .catch((e) => {
          console.error(e)
        })    */
    }, 
    [state.q]
  )

  return (
    <div>
      <TextField 
        value={state.q}
        onChange={(event) => {
          dispatch({type:'set q', payload:event.target.value})
        }}
        label="Users login" 
        variant="outlined"
      />
      <div>
        {state.users.map(({login}) =>(
          <div key={login}>
            {login}
          </div>
        ))}
      </div>
    </div>
  )
}

export default GithubUsers