import * as React from 'react'
import PropTypes from 'prop-types'
import List from '@mui/material/List'
import Box from '@mui/material/Box'
import ListItem from '@mui/material/ListItem'
import Paper from '@mui/material/Paper'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import PokeballIcon from '@mui/icons-material/CatchingPokemon'
import ListIcon from '@mui/icons-material/List'
import { Link as RouterLink } from 'react-router-dom'

//Makes ListItemLink to use RouterLink as its basis
function ListItemLink(props) {
  const { icon, primary, to } = props

  const renderLink = React.useMemo(
    () =>
      React.forwardRef(function Link(itemProps, ref) {
        return <RouterLink to={to} ref={ref} {...itemProps} role={undefined} />
      }),
    [to],
  )

  return (
    <li>
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  )
}

ListItemLink.propTypes = {
  icon: PropTypes.element,
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}

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
