export const initialState = {
  q: '',
  users: [],
  isLoading: false
}

export const reducer = (state, {type, payload}) => {
  // set q, set users, load
  switch (type) {
    case 'set q':
      return {
        ...state,
        q: payload
      }

    case 'set users':
      return {
        ...state,
        users: payload,
        isLoading: false
      }

    case 'load':
      return {
        ...state,
        isLoading: true
      }
  }
}