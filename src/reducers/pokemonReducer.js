import pokemonService from '../services/pokemon'

const pokemonReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_POKEMON':
      return action.data
    default:
      return state
  }
}

export const initializePokemon = (selectedGame) => {
  return async (dispatch, getState) => {
    const file = getState().games[selectedGame].data
    const data = await pokemonService.get(file)

    console.log('data',data)

    dispatch({
      type: 'INIT_POKEMON',
      data: data
    })
  }
}

export default pokemonReducer