import React from 'react'
import { Box, Drawer, Toolbar, Divider } from '@mui/material'
import TypeFilter from './TypeFilter'
//import List from '@mui/material/List'
//import ListItem from '@mui/material/ListItem'
//import ListItemText from '@mui/material/ListItemText'

const drawer = (
  <div>
    <Toolbar />
    <Divider />
    <TypeFilter />
  </div>
)

const SideFilterMenu = ({ drawerWidth, handleDrawerToggle, mobileOpen }) => {
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
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </div>
  )
}

export default SideFilterMenu
