import React from 'react'
import { Grid, Card, CardMedia, CardContent, CardActionArea, Typography } from '@mui/material'

const Pokemon = ({ pokemon }) => {
  const imgStyle = {
    width: "192px",
    height: "192px",
    imageRendering: 'pixelated'
  }

  return (
    <div>
      <Grid item key={pokemon.id} xs="auto" sm="auto" md="auto">
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              sx={imgStyle}
              src={pokemon.sprites.front_default}
              alt={`${pokemon.name}`}
            />
          <CardContent>
            <Typography align="center">
              {`${pokemon.name[0].toUpperCase()}${pokemon.name.slice(1)}`}
            </Typography>
            <Typography align="center">
              Type: {`${pokemon.types.map( e => 
                e.type.name
              ).join(', ')}`}
            </Typography>
          </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </div>
  )
}

export default Pokemon;