import React, { useEffect } from "react"
import { initializePokemon } from "./reducers/pokemonReducer"
import { useDispatch } from "react-redux"
import PokemonGrid from "./components/PokemonGrid"

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('Initializing pokemon')
    dispatch(initializePokemon(1,3))
    
  }, [dispatch])

  return (
    <div>
      <h1>Pokemon Team Builder</h1>
      <PokemonGrid />
    </div>
  )
}

export default App