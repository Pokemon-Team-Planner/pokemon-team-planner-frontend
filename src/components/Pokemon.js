import React from 'react'
import { Grid, Card, CardMedia, CardContent, CardActionArea, Typography } from '@mui/material'

const Pokemon = ({ pokemon, handleClick }) => {

  return (
    <>
      <Grid item key={pokemon.id} xs={4} sm={4} md={2}>
        <Card
          sx={{ display: 'flex', minWidth: '128px' }}
        >
          <CardActionArea data-testid="clickable" onClick={handleClick}>
            <CardMedia
              data-testid="image"
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
              src={pokemon.sprite}
              alt={`${pokemon.name}`}
            />
          <CardContent>
            <Typography data-testid="name" align="center" variant="subtitle2">
              {`${pokemon.name[0].toUpperCase()}${pokemon.name.slice(1)}`}
            </Typography>
            <Typography data-testid="types" align="center" variant="body2" color="text.secondary">
              {`${pokemon.types.map( e => 
                e.name
              ).join(', ')}`}
            </Typography>
          </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </>
  )
}

export default Pokemon