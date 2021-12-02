import pokemonService from '../services/pokemon'

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT':
      return action.data
    default:
      return state
  }
}

export const initializePokemon = (firstId, lastId) => {
  return async dispatch => {
    const data = await pokemonService.getRange(firstId, lastId)

    dispatch({
      type: 'INIT',
      data
    })
  }
}

export default reducer