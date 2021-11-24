import { v4 as uuidv4 } from 'uuid'

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_POKEMONTEAM':
      return action.data
    case 'ADD_TO_POKEMONTEAM':
      return state.length < 6
      ? state.concat({...action.data, uniqueId: uuidv4()})
      : state
    case 'REMOVE_FROM_POKEMONTEAM':
      return state.filter(pokemon => pokemon.uniqueId !== action.data.uniqueId)
    default:
      return state
  }
}

export const addPokemon = (data) => {
  return {
    type: 'ADD_TO_POKEMONTEAM',
    data
  }
}

export const removePokemon = (data) => {
  return {
    type: 'REMOVE_FROM_POKEMONTEAM',
    data
  }
}

export default reducer