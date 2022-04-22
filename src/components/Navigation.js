import * as React from 'react'
import List from '@mui/material/List'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import PokeballIcon from '@mui/icons-material/CatchingPokemon'
import ListIcon from '@mui/icons-material/List'
import ListItemLink from './ListItemLink'

export default function ListRouter() {
  return (
    <Box sx={{ width: 360 }}>
      <Paper elevation={0}>
        <List aria-label="main mailbox folders">
          <ListItemLink to="/" primary="Home" icon={<PokeballIcon />} />
          <ListItemLink to="/teams" primary="Teams" icon={<ListIcon />} />
        </List>
      </Paper>
    </Box>
  )
}