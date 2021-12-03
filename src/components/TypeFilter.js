import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Typography, Checkbox, Button } from '@mui/material'
import { toggleTypeFilter, setTypeFilterAll, setTypeFilterNone } from '../reducers/typeReducer'

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


const TypeFilter = () => {
  const dispatch = useDispatch()
  const types = useSelector(state => state.types)

  const typeComponentList = {
    Normal,
    Fighting,
    Flying,
    Poison,
    Ground,
    Rock,
    Bug,
    Ghost,
    Steel,
    Fire,
    Water,
    Grass,
    Electric,
    Psychic,
    Ice,
    Dragon,
    Dark,
    Fairy
  }

  return (
    <div>
      <Typography variant="h6" sx={{'marginLeft': '10px'}}>
        Types:
      </Typography>
      {types.map((type) => {
        let Component = typeComponentList[type.component]

        return (
          <Checkbox
            title={type.name}
            key={type.name}
            checked={type.shown}
            inputProps={{ 'aria-label': type.name }}
            checkedIcon={<Component className={`${type.name} type-icon`} />}
            icon={<Component className="type-icon" style={{background: "lightgray"}} />}
            onChange={() => dispatch(toggleTypeFilter(type.name))}
          />
        )
      })}
      <Button onClick={() => dispatch(setTypeFilterAll())}>All</Button>
      <Button onClick={() => dispatch(setTypeFilterNone())}>None</Button>
  </div>
  )
}

export default TypeFilter