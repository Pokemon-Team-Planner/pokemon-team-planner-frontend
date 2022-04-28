import React from 'react'
import { Box, Drawer, Toolbar, Divider, Switch, FormGroup, FormControlLabel } from '@mui/material'
import TypeFilter from './TypeFilter'
import Navigation from './Navigation'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const drawer = ({ location, dispatch, drawerWidth }) => {
  return (
    <div>
      <Toolbar />
      <Divider />
      <Navigation />
      { location.pathname === '/' ? <TypeFilter /> : null }
      <FormGroup sx={{ padding: 1}}>
        <FormControlLabel control={
            <Switch onChange={() => dispatch({ type: 'TOGGLE_ONLY_EXCLUSIVE', data: null })} />
          }
          label="only exclusive"
        />
      </FormGroup>
    </div>
  )
} 

const SideFilterMenu = ({ drawerWidth, handleDrawerToggle, mobileOpen }) => {
  const location = useLocation()
  const dispatch = useDispatch()

  return (
    <div>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="filters"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, overflowX: 'hidden' },
          }}
        >
          {drawer({ location, dispatch, drawerWidth })}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, overflowX: 'hidden' },
          }}
          open
        >
          {drawer({ location, dispatch, drawerWidth })}
        </Drawer>
      </Box>
    </div>
  )
}

export default SideFilterMenu
