import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Pokemon from '../components/Pokemon'
import userEvent from '@testing-library/user-event'

const pokemon = {
  id: 1,
  name: "bulbasaur",
  types: [
    {
      name: "grass"
    },
    {
      name: "poison"
    }
  ],
  sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
}

test('renders content', () => {
  render(<Pokemon pokemon={pokemon} />)

  const nameEl = screen.getByTestId('name')
  expect(nameEl).toHaveTextContent('Bulbasaur')

  const typesEl = screen.getByTestId('types')
  expect(typesEl).toHaveTextContent('grass')
  expect(typesEl).toHaveTextContent('poison')

  const imageEl = screen.getByTestId('image')
  expect(imageEl.src).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png')
})

test('clicking the button calls event handler once', async () => {
  const mockHandler = jest.fn()

  render(<Pokemon pokemon={pokemon} handleClick={mockHandler} />)

  const button = screen.getByTestId('clickable')
  userEvent.click(button)

  expect(mockHandler.mock.calls).toHaveLength(1)
})