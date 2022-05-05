import React from 'react'
import { List, ListItem, Button, Grid, Container } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import teamService from '../services/team'
import { deleteTeam } from '../reducers/teamsReducer'
import { useNotification } from '../hooks'

const Teams = () => {
  const teams = useSelector(state => state.teams)
  const pokemon = useSelector(state => state.pokemon)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const notification = useNotification()

  const handleClick = (id) => {
    navigate(`/teams/${id}`)
  }

  const getPokemonForID = (id) => {
    return pokemon.find(item => item.id === id)
  }

  const handleDelete = async (id) => {
    try {
      await teamService.remove(id)
      dispatch(deleteTeam(id))

      notification.send('team deleted', 'success')
    } catch (error) {
      console.error(error)
      notification.send(`team deletion failed: ${error.message}`, 'error')
    }
  }

  return (
    <div>
      <Container
        maxWidth='md'
        disableGutters='true'
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <List>
          {teams.map(item => (
            <Grid key={item.id} container direction="row" alignItems="center">
              <ListItem sx={{ width: '475px' }} button onClick={() => handleClick(item.id)}>
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
      </Container>
    </div>
  )
}

export default Teams