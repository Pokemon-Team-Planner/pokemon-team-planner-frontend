import React from 'react'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
//import List from '@mui/material/List'
//import ListItem from '@mui/material/ListItem'
//import ListItemText from '@mui/material/ListItemText'
import Toolbar from '@mui/material/Toolbar'
import { Checkbox, Typography } from '@mui/material'
import { ReactComponent as Normal } from '../assets/type-icons/normal.svg'
import { ReactComponent as Fighting } from '../assets/type-icons/fighting.svg'
import { ReactComponent as Flying } from '../assets/type-icons/flying.svg'
import { ReactComponent as Poison } from '../assets/type-icons/poison.svg'
import { ReactComponent as Ground } from '../assets/type-icons/ground.svg'
import { ReactComponent as Rock } from '../assets/type-icons/rock.svg'
import { ReactComponent as Bug } from '../assets/type-icons/bug.svg'
import { ReactComponent as Ghost } from '../assets/type-icons/ghost.svg'
import { ReactComponent as Steel } from '../assets/type-icons/steel.svg'
import { ReactComponent as Fire } from '../assets/type-icons/fire.svg'
import { ReactComponent as Water } from '../assets/type-icons/water.svg'
import { ReactComponent as Grass } from '../assets/type-icons/grass.svg'
import { ReactComponent as Electric } from '../assets/type-icons/electric.svg'
import { ReactComponent as Psychic } from '../assets/type-icons/psychic.svg'
import { ReactComponent as Ice } from '../assets/type-icons/ice.svg'
import { ReactComponent as Dragon } from '../assets/type-icons/dragon.svg'
import { ReactComponent as Dark } from '../assets/type-icons/dark.svg'
import { ReactComponent as Fairy } from '../assets/type-icons/fairy.svg'

const types = [
  {name: "normal", component: Normal},
  {name: "fighting", component: Fighting},
  {name: "flying", component: Flying},
  {name: "poison", component: Poison},
  {name: "ground", component: Ground},
  {name: "rock", component: Rock},
  {name: "bug", component: Bug},
  {name: "ghost", component: Ghost},
  {name: "steel", component: Steel},
  {name: "fire", component: Fire},
  {name: "water", component: Water},
  {name: "grass", component: Grass},
  {name: "electric", component: Electric},
  {name: "psychic", component: Psychic},
  {name: "ice", component: Ice},
  {name: "dragon", component: Dragon},
  {name: "dark", component: Dark},
  {name: "fairy", component: Fairy}
]

console.log(process.env.PUBLIC_URL)

const drawer = (
  <div>
    <Toolbar />
    <Divider />
      <Typography sx={{'marginLeft': '10px'}}>
        Types:
      </Typography>
      {types.map((e) => {
        let Component = e.component

        return (
          <Checkbox
            title={e.name}
            key={e.name}
            defaultChecked
            inputProps={{ 'aria-label': e.name }}
            checkedIcon={<Component className={`${e.name} type-icon`} />}
            icon={<Component className={`${e.name} type-icon`} style={{background: "lightgray"}} />}
          />
        )
      })}
    <Divider />
  </div>
)

const SideFilterMenu = ({ drawerWidth, handleDrawerToggle, mobileOpen }) => {
  console.log('drawerWidth', drawerWidth, mobileOpen)

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
