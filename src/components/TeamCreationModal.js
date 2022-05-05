import React, { useState } from 'react'
import Modal from '@mui/material/Modal'
import { Box, Paper, Typography, Stack, Button, TextField, Avatar } from '@mui/material'
import PokeballIcon from '@mui/icons-material/CatchingPokemon'
import teamService from '../services/team'
import { addTeam } from '../reducers/teamsReducer'
import { useNotification } from '../hooks'
import { useDispatch, useSelector } from 'react-redux'

const TeamCreationModal = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const notification = useNotification()

  const dispatch = useDispatch()
  const pokemonTeam = useSelector(state => state.pokemonTeam)

  const handlePublish = async (event) => {
    event.preventDefault()

    const pokemonIDs = pokemonTeam.map(pokemon => {
      return { pokemonID: pokemon.id }
    })

    const data = {
      gameVersionPokedex: "firered-pokedex.json",
      team: pokemonIDs,
      title,
      description
    }

    try {
      const response = await teamService.create(data)
      dispatch(addTeam(response))
      notification.send('A new team added', 'success')

    } catch (error) {
      if (error.message === 'Request failed with status code 401') {
        notification.send(`Failed: Unauthorized - you're not logged in or token has expired`, 'error')
        dispatch({ type: 'SET_USER', data: null })
        teamService.setToken(null)
        return
      }
      
      notification.send(`Failed: ${error.message}`, 'error')
    }
  }

  return (
    <div>
      <Button
        variant="outlined"
        aria-label="open team creation"
        onClick={handleOpen}
        sx={{ marginTop: 1 }}
      >
        CREATE
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="Team creation"
        aria-describedby="Team creation form"
      >
        <Box sx={{ width: 450, margin: '20px auto' }}>
          <Paper elevation={10} sx={{ padding: 6 }}> 
            <Stack direction="column" justifyContent="flex-start" alignItems="center" spacing={2}>
              <Avatar sx={{ bgcolor: 'primary.main' }}>
                <PokeballIcon />
              </Avatar>
              <Typography variant='h5'>Team Creation</Typography>
            </Stack>
            
            <form onSubmit={handlePublish}>
                <TextField
                  label="Title"
                  type="text"
                  value={title}
                  onChange={({ target }) => setTitle(target.value)}
                  margin="dense"
                  variant="standard"
                  required
                  fullWidth
                />
                <TextField
                  multiline
                  maxRows={20}
                  label="Description"
                  type="text"
                  value={description}
                  onChange={({ target }) => setDescription(target.value)}
                  margin="dense"
                  fullWidth
                />
              <Button type="submit" sx={{ margin: "8px 0" }} variant="contained" fullWidth>publish</Button>
            </form>
          </Paper>
        </Box>
      </Modal>
    </div>
  )
}

export default TeamCreationModal