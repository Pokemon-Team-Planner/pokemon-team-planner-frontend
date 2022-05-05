import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Typography, Button } from '@mui/material'
import { addPokemon } from '../reducers/pokemonTeamReducer'
import { useNotification } from '../hooks'

const PokemonGridSimple = () => {
  const dispatch = useDispatch()
  const pokemonList = useSelector(state => state.pokemon)
  const types = useSelector(state => state.types)
  const onlyExclusive = useSelector(state => state.onlyExclusive)
  const notification = useNotification()
  const pokemonTeam = useSelector(state => state.pokemonTeam)

  const handleClick = (pokemon) => {

    if (pokemonTeam.length < 6) {
      dispatch(addPokemon(pokemon))
      notification.send(
        `${pokemon.name[0].toUpperCase()}${pokemon.name.slice(1)} added to team`,
        'success',
        2000
      )
      return
    }
    notification.send(
      `Team is already full`,
      'info',
      2000
    )
  }

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

  let pokemonToShow = pokemonList.filter(pokemon => isEitherTypeShown(pokemon))

  if (onlyExclusive) {
    pokemonToShow = pokemonToShow.filter(pokemon => pokemon.is_exclusive === true)
  }

  return (
    <div>
      <Typography variant="h6" mt='20px'>
        Available:
      </Typography>
        {pokemonToShow.map(pokemon => 
          <Button style={{ padding: 0, borderRadius: "16px" }} key={pokemon.id}>
            <img
              key={pokemon.id}
              src={pokemon.sprite}
              alt={pokemon.name}
              title={`${pokemon.name[0].toUpperCase()}${pokemon.name.slice(1)}`}
              onClick={() => handleClick(pokemon)}
              loading="lazy"
            />
          </Button>
        )}
    </div>
  )
}

export default PokemonGridSimple