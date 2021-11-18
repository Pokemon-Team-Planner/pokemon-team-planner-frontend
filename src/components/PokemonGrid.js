import React from 'react'
import { useSelector } from 'react-redux'
import Pokemon from './Pokemon'
import { Grid } from '@mui/material'

const PokemonGrid = () => {
  const pokemons = useSelector(state => state)

  return (
    <div>
      <Grid container>
        {pokemons.map(pokemon => 
          <Pokemon key={pokemon.id} pokemon={pokemon} />
        )}
      </Grid>
    </div>
  )
}

export default PokemonGrid