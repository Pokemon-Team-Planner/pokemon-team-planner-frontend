import React from 'react'
import { List, ListItem, Button, Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import teamService from '../services/team'
import { deleteTeam } from '../reducers/teamsReducer'
import { deleteNotification, setNotification } from '../reducers/notificationReducer'

const Teams = () => {
  const teams = useSelector(state => state.teams)
  const pokemon = useSelector(state => state.pokemon)
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleClick = (path) => {
    navigate(path)
  }

  const getPokemonForID = (id) => {
    return pokemon.find(item => item.id === id)
  }

  const handleDelete = async (id) => {
    try {
      await teamService.remove(id)
      dispatch(deleteTeam(id))

      dispatch(setNotification('team deleted', 'success'))
      setTimeout(() => {
        dispatch(deleteNotification())
      }, 5000)
    } catch (error) {
      console.error(error)
      dispatch(setNotification(`team deletion failed: ${error.message}`, 'error'))
      setTimeout(() => {
        dispatch(deleteNotification())
      }, 5000)
    }
  }

  return (
    <div>
      <List>
        {teams.map(item => (
          <Grid key={item.id} container direction="row" alignItems="center">
            <ListItem sx={{ width: '475px' }} button onClick={() => handleClick(`/team/${item.id}`)}>
              {item.team.map(item => {
                const pokemon = getPokemonForID(item.pokemonID)
                return (
                  <img width='72' src={pokemon.sprite} alt={pokemon.name} key={item._id} />
                )
              })}
            </ListItem>
            <Button onClick={() => handleDelete(item.id)}><DeleteOutlineOutlinedIcon /></Button>
          </Grid>
        ))}
      </List>
    </div>
  )
}

export default Teams