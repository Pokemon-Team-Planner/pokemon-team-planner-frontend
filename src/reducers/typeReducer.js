import { ReactComponent as Normal } from '../assets/type-icons/normal.svg'
import { ReactComponent as Fighting } from '../assets/type-icons/fighting.svg'
import { ReactComponent as Flying } from '../assets/type-icons/flying.svg'
import { ReactComponent as Poison } from '../assets/type-icons/poison.svg'
import { ReactComponent as Ground } from '../assets/type-icons/ground.svg'
import { ReactComponent as Rock } from '../assets/type-icons/rock.svg'
import { ReactComponent as Bug } from '../assets/type-icons/bug.svg'
import { ReactComponent as Ghost } from '../assets/type-icons/ghost.svg'
import { ReactComponent as Steel } from '../assets/type-icons/steel.svg'
import { ReactComponent as Fire } from '../assets/type-icons/fire.svg'
import { ReactComponent as Water } from '../assets/type-icons/water.svg'
import { ReactComponent as Grass } from '../assets/type-icons/grass.svg'
import { ReactComponent as Electric } from '../assets/type-icons/electric.svg'
import { ReactComponent as Psychic } from '../assets/type-icons/psychic.svg'
import { ReactComponent as Ice } from '../assets/type-icons/ice.svg'
import { ReactComponent as Dragon } from '../assets/type-icons/dragon.svg'
import { ReactComponent as Dark } from '../assets/type-icons/dark.svg'
import { ReactComponent as Fairy } from '../assets/type-icons/fairy.svg'

const initialState = [
  {name: "normal", component: Normal, shown: true},
  {name: "fighting", component: Fighting, shown: true},
  {name: "flying", component: Flying, shown: true},
  {name: "poison", component: Poison, shown: true},
  {name: "ground", component: Ground, shown: true},
  {name: "rock", component: Rock, shown: true},
  {name: "bug", component: Bug, shown: true},
  {name: "ghost", component: Ghost, shown: true},
  {name: "steel", component: Steel, shown: true},
  {name: "fire", component: Fire, shown: true},
  {name: "water", component: Water, shown: true},
  {name: "grass", component: Grass, shown: true},
  {name: "electric", component: Electric, shown: true},
  {name: "psychic", component: Psychic, shown: true},
  {name: "ice", component: Ice, shown: true},
  {name: "dragon", component: Dragon, shown: true},
  {name: "dark", component: Dark, shown: true},
  {name: "fairy", component: Fairy, shown: true}
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