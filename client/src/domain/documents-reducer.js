export const initialState = {
  documents: []
}

export default (state, {type, payload}) => {
  switch (type) {
    case 'set':
      return {
        ...state,
        documents: payload
      }
    default:
      throw new Error(`Unhandled type ${type}`)
  }
}