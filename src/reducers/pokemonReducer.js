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
    let pokemon = []

    for (let id = firstId; id <= lastId; id++) {
      const data = await pokemonService.get(id)
      pokemon.push(data)
    }

    dispatch({
      type: 'INIT',
      data: pokemon
    })
  }
}

export default reducer