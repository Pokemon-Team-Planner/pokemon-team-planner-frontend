import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const Team = () => {
  const { id } = useParams()
  const teams = useSelector(state => state.teams)
  const pokemon = useSelector(state => state.pokemon)

  let team = teams.find(team => team.id === id)
  //add placeholder data
  team = {...team, user: 'Anon', title: 'Good team first team', gameVersion: 'FireRed', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
  console.log(team)

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
      <Typography mt={2} variant='h6'>{team.title} ({team.gameVersion})</Typography>
      <Typography variant='body2' sx={{ textIndent: '2em' }}>by {team.user} on {date.toString()}</Typography>
      <Typography mt={2}>{team.description}</Typography>
    </div>
  )
}

export default Team