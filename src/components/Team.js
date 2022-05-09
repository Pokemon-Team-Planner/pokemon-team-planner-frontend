import { Box, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const Team = () => {
  const { id } = useParams()
  const teams = useSelector(state => state.teams)
  const pokemon = useSelector(state => state.pokemon)

  const team = teams.find(team => team.id === id)

  const getPokemonForID = (id) => {
    return pokemon.find(item => item.id === id)
  }

  const isoDate = new Date(team.date)
  const date = isoDate
    .toLocaleString(
      'default',
      {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      })

  return (
    <div>
      <Container
        maxWidth='md'
        disableGutters={true}
      >
        <Box>
          <Grid container>
            {team.team.map(item => {
              const pokemon = getPokemonForID(item.pokemonID)
              return (
                <Grid item key={item._id} xs={4} sm={4} md={2}>
                  <Card
                    sx={{ display: 'flex', flexDirection: 'column', minWidth: '128px' }}
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        width: "96px",
                        height: "96px",
                        imageRendering: "pixelated",
                        borderRadius: "50%",
                        background: "beige",
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto"
                      }}
                      src={pokemon.sprite}
                      alt={`${pokemon.name}`}
                    />
                    <CardContent>
                      <Typography align="center" variant="subtitle2">
                        {`${pokemon.name[0].toUpperCase()}${pokemon.name.slice(1)}`}
                      </Typography>
                      <Typography align="center" variant="body2" color="text.secondary">
                        {`${pokemon.types.map(e =>
                          e.name
                        ).join(', ')}`}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              )
            })}
          </Grid>
          <Typography mt={2} variant='h6'>{team.title}</Typography>
          <Typography variant='body2' sx={{ marginTop: '5px' }}>{team.user.name} • {date.toString()}</Typography>
          <Typography variant='body2' >{team.gameVersionName}</Typography>
          <Typography mt={2} sx={{ whiteSpace: 'pre-line' }}>{team.description}</Typography>
        </Box>
      </Container>
    </div>
  )
}

export default Team