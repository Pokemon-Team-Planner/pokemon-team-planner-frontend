import React from 'react'
import { Grid, Typography } from '@mui/material'
import Pokemon from './Pokemon'
import { useSelector, useDispatch } from 'react-redux'
import { Box } from '@mui/system'
import { removePokemon } from '../reducers/pokemonTeamReducer'

const PokemonTeam = () => {
  const dispatch = useDispatch()
  const pokemonTeam = useSelector(state => state.pokemonTeam)
  console.log(pokemonTeam)

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
      </Grid>
    </Box>
  )
}

export default PokemonTeam