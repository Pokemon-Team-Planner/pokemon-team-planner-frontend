import React from 'react'

const Pokemon = ({ pokemon }) => {
  const imgStyle = {
    width: "192px",
    height: "192px",
    imageRendering: 'pixelated'
  }

  return (
    <div>
      <img style={imgStyle} src={pokemon.sprites.front_default} alt={`${pokemon.name}`}/>
      {`${pokemon.name[0].toUpperCase()}${pokemon.name.slice(1)}`}
    </div>
  )
}

export default Pokemon;