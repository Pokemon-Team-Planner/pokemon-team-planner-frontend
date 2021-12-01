import { applyMiddleware, createStore, combineReducers } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk"

import pokemonReducer from './reducers/pokemonReducer'
import pokemonTeamReducer from './reducers/pokemonTeamReducer'
import typeReducer from './reducers/typeReducer'

const reducer = combineReducers({
  pokemon: pokemonReducer,
  pokemonTeam: pokemonTeamReducer,
  types: typeReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store