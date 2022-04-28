import { applyMiddleware, createStore, combineReducers } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import pokemonReducer from './reducers/pokemonReducer'
import pokemonTeamReducer from './reducers/pokemonTeamReducer'
import typeReducer from './reducers/typeReducer'
import loginCredentialsReducer from './reducers/loginCredentialsReducer'
import userReducer from './reducers/userReducer'
import notificationReducer from "./reducers/notificationReducer"
import teamsReducer from "./reducers/teamsReducer"
import onlyExclusiveReducer from "./reducers/onlyExclusiveReducer"

const reducer = combineReducers({
  pokemon: pokemonReducer,
  pokemonTeam: pokemonTeamReducer,
  types: typeReducer,
  loginCredentials: loginCredentialsReducer,
  user: userReducer,
  notification: notificationReducer,
  teams: teamsReducer,
  onlyExclusive: onlyExclusiveReducer
})

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['notification']
}

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = createStore(
  persistedReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)
export const persistor = persistStore(store)