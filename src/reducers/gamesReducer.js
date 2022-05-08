import gamesService from '../services/games'
import { initializeSelectedGame } from './selectedGameReducer'

const gamesReducer = (state = {}, action) => {
  switch (action.type) {
    case 'INITIALIZE_GAMES':
      return action.data
    default:
      return state
  }
}

export const initializeGames = () => {
  return async dispatch => {
    const data = await gamesService.get()

    //Let's wait for games to be initialized
    await dispatch({
      type: 'INITIALIZE_GAMES',
      data: data
    })

    //And after that initialize selected game which depends on games
    return dispatch(initializeSelectedGame())
  }
}

export default gamesReducer