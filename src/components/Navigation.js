import * as React from 'react'
import List from '@mui/material/List'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import PokeballIcon from '@mui/icons-material/CatchingPokemon'
import ListIcon from '@mui/icons-material/List'
import { useLocation, useNavigate } from 'react-router-dom'
import { ListItem, ListItemIcon, ListItemText } from '@mui/material'

export default function ListRouter() {
  const navigate = useNavigate()
  const location = useLocation()

  const menuItems = [
    {
      text: 'Home',
      icon: <PokeballIcon />,
      path: '/'
    },
    {
      text: 'Teams',
      icon: <ListIcon />,
      path: '/teams'
    }
  ]

  return (
    <Box sx={{ width: 360 }}>
      <Paper elevation={0}>
        <List>
          {menuItems.map(item => (
            <ListItem
              button
              key={item.text}
              onClick={() => navigate(item.path)}
              sx={{ background: location.pathname === item.path ? '#f4f4f4' : 'transparent' }}
            >
              {item.icon ? <ListItemIcon>{item.icon}</ListItemIcon> : null}
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  )
}