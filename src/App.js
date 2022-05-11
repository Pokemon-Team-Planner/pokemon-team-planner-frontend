import React, { useState, useEffect } from "react"
import { Typography, Box, Toolbar, AppBar, CssBaseline } from "@mui/material"
import { initializePokemon } from "./reducers/pokemonReducer"
import { initializeTeams } from './reducers/teamsReducer'
import { useDispatch, useSelector } from "react-redux"
//import PokemonGrid from "./components/PokemonGrid"
import PokemonGridSimple from "./components/PokemonGridSimple"
import PokemonTeam from "./components/PokemonTeam"
import SideMenu from "./components/SideMenu"
import LoginModal from "./components/LoginModal"
import Notification from "./components/Notification"
import Teams from "./components/Teams"
import teamService from "./services/team"
import { Routes, Route, useNavigate } from "react-router-dom"

import IconButton from '@mui/material/IconButton'

import MenuIcon from '@mui/icons-material/Menu'
import { ReactComponent as AppIcon } from './assets/pokemon-team-planner-logo.svg'
import Team from "./components/Team"
import GameSelection from "./components/GameSelection"
import { initializeGames } from "./reducers/gamesReducer"

const App = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const selectedGame = useSelector(state => state.selectedGame)
  const navigate = useNavigate()

  useEffect(() => {
    console.log('Initializing games and selected game')
    dispatch(initializeGames())
  }, [dispatch])

  useEffect(() => {
    console.log('Retrieving pokemon')
    //Only execute when selectedGame is initialized or changed
    if (selectedGame) {
      dispatch(initializePokemon(selectedGame))
    }
  }, [dispatch, selectedGame])

  useEffect(() => {
    console.log('Initializing teams')
    dispatch(initializeTeams())
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
          <div style={{display: 'flex',  alignItems: 'center', gap: '7px'}}>
            <div
              style={{display: 'flex',  alignItems: 'center', gap: '7px', cursor: 'pointer'}}
              onClick={() => navigate('/')}
              title={`${process.env.REACT_APP_NAME}'s front page`}
            >
              <AppIcon className="app-icon" />
              <Typography variant="h6" component="div" sx={{ marginRight: 3 }}>
                {process.env.REACT_APP_NAME}
              </Typography>
            </div>
            <GameSelection />
          </div>
          <LoginModal />
        </Toolbar>
      </AppBar>
      <SideMenu
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

        <Routes>
          <Route path="/teams/:id" element={<Team />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/" element={<><PokemonTeam /><PokemonGridSimple /></>} />
        </Routes>
        
      </Box>
    </Box>
    
  )
}

export default App