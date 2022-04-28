const onlyExclusiveReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_ONLY_EXCLUSIVE':
      return !state
    default:
      return state
  }
}


export default onlyExclusiveReducer