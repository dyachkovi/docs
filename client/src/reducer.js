export default (state, {type, payload}) => {
  const now = Date.now()

  switch (type) {
    case 'menu show': 
      if (now - state.menuActionDate < 100) {
        return {...state}
      }
      return {...state, menuVisible: true, menuActionDate: now}

    case 'menu hide' :
      if (now - state.menuActionDate < 100) {
        return {...state}
      }
      return {...state, menuVisible: false, menuActionDate: now}

    default: 
      throw new Error(`Unhanled action type ${JSON.stringify(type)}`)
  }
}

export const startState = {
  menuVisible: false,
  menuActionDate: 0
}