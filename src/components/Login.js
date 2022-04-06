import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import loginService from '../services/login'

const Login = () => {
  const dispatch = useDispatch()
  const loginCredentials = useSelector(state => state.loginCredentials)

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const user = await loginService.login(loginCredentials)
      dispatch({ type: 'SET_USER', data: user })
      dispatch({ type: 'SET_USERNAME', data: '' })
      dispatch({ type: 'SET_PASSWORD', data: '' })
    } catch (exception) {
      console.log(exception)
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          username
            <input
            type="text"
            value={loginCredentials.username}
            name="Username"
            onChange={({ target }) => dispatch({ type: 'SET_USERNAME', data: target.value })}
          />
        </div>
        <div>
          password
            <input
            type="password"
            value={loginCredentials.password}
            name="Password"
            onChange={({ target }) => dispatch({ type: 'SET_PASSWORD', data: target.value })}
          />
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  )
}

export default Login