import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Typography, Checkbox, Button } from '@mui/material'
import { toggleTypeFilter, setTypeFilterAll, setTypeFilterNone } from '../reducers/typeReducer'

const TypeFilter = () => {
  const dispatch = useDispatch()
  const types = useSelector(state => state.types)


  return (
    <div>
      <Typography variant="h6" sx={{'marginLeft': '10px'}}>
        Types:
      </Typography>
      {types.map((type) => {
        let Component = type.component

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