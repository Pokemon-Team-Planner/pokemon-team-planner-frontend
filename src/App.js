import React, { useState, useEffect } from "react"
import { initializePokemon } from "./reducers/pokemonReducer"
import { useDispatch } from "react-redux"
import PokemonGrid from "./components/PokemonGrid"
import { Container, Typography } from "@mui/material"
import PokemonTeam from "./components/PokemonTeam"
import SideFilterMenu from "./components/SideFilterMenu"
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';

import IconButton from '@mui/material/IconButton';

import MenuIcon from '@mui/icons-material/Menu';

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('Initializing pokemon')
    dispatch(initializePokemon(1,9))
    
  }, [dispatch])

  const [mobileOpen, setMobileOpen] = useState(false)
  const drawerWidth = 205
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" noWrap component="div">
          Pokemon Team Builder
          </Typography>
        </Toolbar>
      </AppBar>
      <SideFilterMenu
        drawerWidth={drawerWidth}
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Container>
          <PokemonTeam />
          <PokemonGrid />
        </Container>
      </Box>
    </Box>
    
  )
}

export default App