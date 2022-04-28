import React from 'react'
import { Box, Drawer, Toolbar, Divider } from '@mui/material'
import TypeFilter from './TypeFilter'
import Navigation from './Navigation'
import { useLocation } from 'react-router-dom'

const drawer = (location) => {
  return (
    <div>
      <Toolbar />
      <Divider />
      <Navigation />
      { location.pathname === '/' ? <TypeFilter /> : null }
    </div>
  )
} 

const SideFilterMenu = ({ drawerWidth, handleDrawerToggle, mobileOpen }) => {
  const location = useLocation()

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
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer(location)}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer(location)}
        </Drawer>
      </Box>
    </div>
  )
}

export default SideFilterMenu
