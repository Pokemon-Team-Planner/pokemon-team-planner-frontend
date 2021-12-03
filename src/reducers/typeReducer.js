
const initialState = [
  {name: "normal", component: 'Normal', shown: true},
  {name: "fighting", component: 'Fighting', shown: true},
  {name: "flying", component: 'Flying', shown: true},
  {name: "poison", component: 'Poison', shown: true},
  {name: "ground", component: 'Ground', shown: true},
  {name: "rock", component: 'Rock', shown: true},
  {name: "bug", component: 'Bug', shown: true},
  {name: "ghost", component: 'Ghost', shown: true},
  {name: "steel", component: 'Steel', shown: true},
  {name: "fire", component: 'Fire', shown: true},
  {name: "water", component: 'Water', shown: true},
  {name: "grass", component: 'Grass', shown: true},
  {name: "electric", component: 'Electric', shown: true},
  {name: "psychic", component: 'Psychic', shown: true},
  {name: "ice", component: 'Ice', shown: true},
  {name: "dragon", component: 'Dragon', shown: true},
  {name: "dark", component: 'Dark', shown: true},
  {name: "fairy", component: 'Fairy', shown: true}
]

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_TYPE_FILTER':
      return state.map(type =>
          type.name !== action.data.name ?
          type :
          {...type, shown: !type.shown}
        )
    case 'SET_TYPE_FILTER_ALL':
      return state.map(type => (
        {...type, shown: true}
      ))
    case 'SET_TYPE_FILTER_NONE':
      return state.map(type => (
        {...type, shown: false}
      ))
    default:
      return state
  }
}

export const toggleTypeFilter = (name) => {
  return {
    type: 'TOGGLE_TYPE_FILTER',
    data: { name }
  }
}

export const setTypeFilterAll = () => {
  return {
    type: 'SET_TYPE_FILTER_ALL'
  }
}

export const setTypeFilterNone = () => {
  return {
    type: 'SET_TYPE_FILTER_NONE'
  }
}

export default reducer