import React, { useEffect } from "react"
import { initializePokemon } from "./reducers/pokemonReducer"
import { useDispatch } from "react-redux"
import PokemonGrid from "./components/PokemonGrid"
import { Container, Typography } from "@mui/material"

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('Initializing pokemon')
    dispatch(initializePokemon(1,9))
    
  }, [dispatch])

  return (
    <Container>
      <Typography
        variant="h2"
        align="center"
        gutterBottom
      >
        Pokemon Team Builder
      </Typography>
      <PokemonGrid />
    </Container>
  )
}

export default App