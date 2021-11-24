import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Pokemon from './Pokemon'
import { Grid, Typography } from '@mui/material'
import { addPokemon } from '../reducers/pokemonTeamReducer'

const PokemonGrid = () => {
  const dispatch = useDispatch()
  const pokemons = useSelector(state => state.pokemon)

  return (
    <div>
      <Typography variant="h6">
        Available:
      </Typography>
      <Grid container>
        {pokemons.map(pokemon => 
          <Pokemon
            key={pokemon.id}
            pokemon={pokemon}
            handleClick={() => 
              dispatch(addPokemon(pokemon))
            }
         />
        )}
      </Grid>
    </div>
  )
}

export default PokemonGrid