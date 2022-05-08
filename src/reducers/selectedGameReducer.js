const selectedGameReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SELECTED_GAME':
      return action.data
    default:
      return state
  }
}

export const initializeSelectedGame = () => {
  return (dispatch, getState) => {
    const defaultGame = getState().games
    const name = Object.keys(defaultGame)[0]

    dispatch({
      type: 'SET_SELECTED_GAME',
      data: name
    })
  }
}

export default selectedGameReducer