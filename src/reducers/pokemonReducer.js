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
    const data = await pokemonService.get("firered-pokedex.json")

    console.log('data',data)

    dispatch({
      type: 'INIT',
      data: data
    })
  }
}

export default reducer