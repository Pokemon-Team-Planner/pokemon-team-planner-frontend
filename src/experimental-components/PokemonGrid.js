import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Pokemon from '../components/Pokemon'
import { Grid, Typography } from '@mui/material'
import { addPokemon } from '../reducers/pokemonTeamReducer'

const PokemonGrid = () => {
  const dispatch = useDispatch()
  const pokemonList = useSelector(state => state.pokemon)
  const types = useSelector(state => state.types)

  const isEitherTypeShown = (pokemon) => {
    let shown = false
    pokemon.types.forEach(pokemonType => {
      let matchedType = types.find(type => type.name === pokemonType.type.name)
      if (matchedType.shown === true) {
        shown = true
      }
    })
    return shown
  }

  const pokemonToShow = pokemonList.filter(pokemon => isEitherTypeShown(pokemon))

  return (
    <div>
      <Typography variant="h6">
        Available:
      </Typography>
      <Grid container>
        {pokemonToShow.map(pokemon => 
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