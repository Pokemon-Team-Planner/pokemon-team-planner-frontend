import { v4 as uuidv4 } from 'uuid';

const initialState = [
  {
    id: 1,
    uniqueId: uuidv4(),
    name: "bulbasaur",
    sprites: {
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    },
    types: [
      {
        type: {
          name: "grass"
        }
      },
      {
        type: {
          name: "poison"
        }
      }
    ]
  },
  {
    id: 7,
    uniqueId: uuidv4(),
    name: "squirtle",
    sprites: {
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
    },
    types: [
      {
        type: {
          name: "water"
        }
      }
    ]
  }
]

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT_POKEMONTEAM':
      return action.data
    case 'ADD_TO_POKEMONTEAM':
      return state.concat({...action.data, uniqueId: uuidv4()})
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