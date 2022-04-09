import React from 'react'
import { Button, Grid, Typography } from '@mui/material'
import Pokemon from './Pokemon'
import { useSelector, useDispatch } from 'react-redux'
import { Box } from '@mui/system'
import { removePokemon } from '../reducers/pokemonTeamReducer'
import { v4 as uuidv4 } from 'uuid';
import questionMarkSprite from '../assets/question-mark.png'
import teamService from '../services/team'

const PokemonTeam = () => {
  const dispatch = useDispatch()
  const pokemonTeam = useSelector(state => state.pokemonTeam)

  const missingPokemon = {
    id: 0,
    uniqueId: uuidv4(),
    name: "?",
    sprite: `${questionMarkSprite}`,
    types: [
      {
        name: "?"
      }
    ]
  }

  const emptyTeamMembers = []
  for (let i = pokemonTeam.length; i < 6; i++) {
    let emptyTeamMember = {...missingPokemon, uniqueId: uuidv4()}
    emptyTeamMembers.push(<Pokemon key={emptyTeamMember.uniqueId} pokemon={emptyTeamMember} />)
  }

  const handleSave = () => {
    const team = pokemonTeam.map(pokemon => {
      return { pokemonID: pokemon.id }
    })

    const data = {
      gameVersionPokedex: "firered-pokedex.json",
      team
    }
    teamService.create(data)
  }

  return (
    <Box paddingBottom="20px">
      <Typography variant="h6">
        My team:
      </Typography>
      <Grid container>
        {pokemonTeam.map(pokemon => 
          <Pokemon
            key={pokemon.uniqueId}
            pokemon={pokemon}
            handleClick={ () =>
              dispatch(removePokemon(pokemon))} />
        )}
        {emptyTeamMembers}
      </Grid>
      <Button onClick={handleSave}>Save</Button>
    </Box>
  )
}

export default PokemonTeam