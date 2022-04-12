import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import loginService from '../services/login'
import Modal from '@mui/material/Modal'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import IconButton from '@mui/material/IconButton'
import { Box, Paper, Typography, Stack, Avatar, Button, TextField } from '@mui/material'
import teamService from '../services/team'

export default function BasicModal() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const dispatch = useDispatch()
  const loginCredentials = useSelector(state => state.loginCredentials)
  const user = useSelector(state => state.user)

  const handleLogout = () => {
    dispatch({ type: 'SET_USER', data: null })
  }

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const user = await loginService.login(loginCredentials)

      window.localStorage.setItem(
        'loggedPokemonTeamPlannerUser', JSON.stringify(user)
      ) 
      teamService.setToken(user.token)
      dispatch({ type: 'SET_USER', data: user })
      dispatch({ type: 'SET_USERNAME', data: '' })
      dispatch({ type: 'SET_PASSWORD', data: '' })
    } catch (exception) {
      console.log(exception)
    }
  }

  if (user) {
    return (
      <div>
        <IconButton
          color="inherit"
          aria-label="open log out"
          edge="end"
          onClick={handleOpen}
        >
          <AccountCircleOutlinedIcon />
        </IconButton>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="Logged in user"
          aria-describedby="Info and logout button for logged in user"
        >
          <Box sx={{ width: 300, margin: '20px auto' }}>
            <Paper elevation={10} sx={{ padding: 6 }}>
              <Stack direction="column" justifyContent="flex-start" alignItems="center" spacing={2}>
                <Avatar sx={{ bgcolor: 'primary.main' }}>
                  <AccountCircleOutlinedIcon />
                </Avatar>
                <Typography>{user.name}</Typography>
                <Typography variant='h5'>Logged in</Typography>
                <Button onClick={handleLogout} sx={{ margin: "8px 0" }} variant="contained" fullWidth>log out</Button>
              </Stack>
            </Paper>
          </Box>
        </Modal>
      </div>
    )
  }

  return (
    <div>
      <IconButton
        color="inherit"
        aria-label="open log in"
        edge="end"
        onClick={handleOpen}
      >
        <LockOutlinedIcon />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="Login"
        aria-describedby="Login form"
      >
        <Box sx={{ width: 300, margin: '20px auto' }}>
          <Paper elevation={10} sx={{ padding: 6 }}> 
            <Stack direction="column" justifyContent="flex-start" alignItems="center" spacing={2}>
              <Avatar sx={{ bgcolor: 'primary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography variant='h5'>Login</Typography>
            </Stack>
            
            <form onSubmit={handleLogin}>
                <TextField
                  label="Username"
                  type="text"
                  value={loginCredentials.username}
                  onChange={({ target }) => dispatch({ type: 'SET_USERNAME', data: target.value })}
                  margin="dense"
                  variant="standard"
                  required
                  fullWidth
                />
                <TextField
                  label="Password"
                  type="password"
                  value={loginCredentials.password}
                  onChange={({ target }) => dispatch({ type: 'SET_PASSWORD', data: target.value })}
                  margin="dense"
                  variant="standard"
                  required
                  fullWidth
                />
              <Button type="submit" sx={{ margin: "8px 0" }} variant="contained" fullWidth>login</Button>
            </form>
          </Paper>
        </Box>
      </Modal>
    </div>
  )
}