import React from 'react'
import { useSelector } from 'react-redux'
import Pokemon from './Pokemon'

const PokemonGrid = () => {
  const pokemons = useSelector(state => state)

  return (
    <div>
      {pokemons.map(pokemon => 
        <Pokemon key={pokemon.id} pokemon={pokemon} />
      )}
    </div>
  )
}

export default PokemonGrid