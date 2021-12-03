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
    const dataSet = data.map(pokemon => (
      {id: pokemon.id, name: pokemon.name, types: pokemon.types, sprites: pokemon.sprites}
    ))

    console.log('dataset',dataSet)

    dispatch({
      type: 'INIT',
      data: dataSet
    })
  }
}

export default reducer