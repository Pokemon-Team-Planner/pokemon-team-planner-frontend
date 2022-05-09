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

  const styles = {
    select: {
      '.MuiOutlinedInput-input': {
        color: '#fff',
      },
      '.MuiOutlinedInput-notchedOutline': {
        borderColor: '#fff',
      },
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: '#fff',
        borderWidth: '0.15rem',
      },
      '.MuiSelect-icon': {
        color: '#fff'
      }
    },
  }

  return (
    <div>
      <FormControl sx={{ m: 0, minWidth: 130, color: 'white' }}>
        <Select
          value={selectedGame}
          onChange={handleChange}
          sx={styles.select}
        >
          {menuItems}
        </Select>
      </FormControl>
    </div>
  )
}

export default GameSelection