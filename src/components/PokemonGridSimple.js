import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Typography, Button } from '@mui/material'
import { addPokemon } from '../reducers/pokemonTeamReducer'

const PokemonGridSimple = () => {
  const dispatch = useDispatch()
  const pokemonList = useSelector(state => state.pokemon)
  const types = useSelector(state => state.types)

  const isEitherTypeShown = (pokemon) => {
    let shown = false
    pokemon.types.forEach(pokemonType => {
      let matchedType = types.find(type => type.name === pokemonType.name)
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
        {pokemonToShow.map(pokemon => 
          <Button style={{ padding: 0, borderRadius: "16px" }} key={pokemon.id}>
            <img
              key={pokemon.id}
              src={pokemon.sprite}
              alt={pokemon.name}
              title={`${pokemon.name[0].toUpperCase()}${pokemon.name.slice(1)}`}
              onClick={() => 
                dispatch(addPokemon(pokemon))
              }
              loading="lazy"
            />
          </Button>
        )}
    </div>
  )
}

export default PokemonGridSimple