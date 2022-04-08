const loginCredentialsReducer = (state = {username: 'admin1', password: 'salainen_on'}, action) => {
  switch (action.type) {
    case 'SET_USERNAME':
      return {...state, username: action.data}
    case 'SET_PASSWORD':
      return {...state, password: action.data}
    default:
      return state
  }
}

export default loginCredentialsReducer