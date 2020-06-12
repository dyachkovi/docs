export default (component) => {
  return ({visible, ...props}) => {
    if (visible === false) {
      return null
    }

    return component(props)
  }
}