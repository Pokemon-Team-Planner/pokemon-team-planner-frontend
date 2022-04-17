import React, { useState, useEffect } from "react"
import { Typography, Box, Toolbar, AppBar, CssBaseline } from "@mui/material"
import { initializePokemon } from "./reducers/pokemonReducer"
import { useDispatch, useSelector } from "react-redux"
//import PokemonGrid from "./components/PokemonGrid"
import PokemonGridSimple from "./components/PokemonGridSimple"
import PokemonTeam from "./components/PokemonTeam"
import SideFilterMenu from "./components/SideFilterMenu"
import LoginModal from "./components/LoginModal"
import Notification from "./components/Notification"
import teamService from "./services/team"

import IconButton from '@mui/material/IconButton'

import MenuIcon from '@mui/icons-material/Menu'

const App = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  useEffect(() => {
    console.log('Initializing pokemon')
    dispatch(initializePokemon(1,151))
    
  }, [dispatch])

  useEffect(() => {
    if (user) {
      teamService.setToken(user.token)
    }
  }, [user])

  const [mobileOpen, setMobileOpen] = useState(false)
  const drawerWidth = 160
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
        <Toolbar style={{display:'flex', justifyContent:"space-between", width:'100%'}}>
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
            {process.env.REACT_APP_NAME}
          </Typography>
          <LoginModal />
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
        <Notification />
        <PokemonTeam />
        <PokemonGridSimple />
      </Box>
    </Box>
    
  )
}

export default App