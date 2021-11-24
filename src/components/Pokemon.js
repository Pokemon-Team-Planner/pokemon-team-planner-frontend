import React from 'react'
import { Grid, Card, CardMedia, CardContent, CardActionArea, Typography } from '@mui/material'

const Pokemon = ({ pokemon, handleClick }) => {

  return (
    <div>
      <Grid item key={pokemon.id} xs="auto" sm="auto" md="auto">
        <Card
          sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
        >
          <CardActionArea onClick={handleClick}>
            <CardMedia
              component="img"
              sx= {{
                width: "96px",
                height: "96px",
                imageRendering: "pixelated",
                borderRadius: "50%",
                background: "beige",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto"
              }}
              src={pokemon.sprites.front_default}
              alt={`${pokemon.name}`}
            />
          <CardContent>
            <Typography align="center" variant="subtitle1">
              {`${pokemon.name[0].toUpperCase()}${pokemon.name.slice(1)}`}
            </Typography>
            <Typography align="center" variant="body2" color="text.secondary">
              {`${pokemon.types.map( e => 
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