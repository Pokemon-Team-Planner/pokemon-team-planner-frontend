import { FormControl, MenuItem, Select } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const GameSelection = () => {
  const games = useSelector(state => state.games)
  const selectedGame = useSelector(state => state.selectedGame)
  const dispatch = useDispatch()
  

  const handleChange = (event) => {
    dispatch({type: 'SET_SELECTED_GAME', data: event.target.value})
  }

  const menuItems = []
  for (const key of Object.keys(games)) {
    menuItems.push(<MenuItem value={key} key={key}>{key}</MenuItem>)
  }

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 130 }}>
        <Select
          value={selectedGame}
          onChange={handleChange}
        >
          {menuItems}
        </Select>
      </FormControl>
    </div>
  )
}

export default GameSelection