import React from 'react'
import { List, ListItem, Button, Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import DeleteIcon from '@mui/icons-material/Delete'

const Teams = () => {
  const teams = useSelector(state => state.teams)
  const pokemon = useSelector(state => state.pokemon)

  const navigate = useNavigate()

  const handleClick = (path) => {
    navigate(path)
  }

  const getPokemonForID = (id) => {
    return pokemon.find(item => item.id === id)
  }

  return (
    <div>
      <List>
        {teams.map(item => (
          <Grid container direction="row" alignItems="center">
            <ListItem sx={{ width: '475px' }} button key={item.id} onClick={() => handleClick(`/team/${item.id}`)}>
              {item.team.map(item => {
                const pokemon = getPokemonForID(item.pokemonID)
                return (
                  <img width='72' src={pokemon.sprite} alt={pokemon.name} key={item._id} />
                )
              })}
            </ListItem>
            <Button onClick={() => alert('are you sure?')}><DeleteIcon /></Button>
          </Grid>
        ))}
      </List>
    </div>
  )
}

export default Teams