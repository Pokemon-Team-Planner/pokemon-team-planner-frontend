import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Login = ({ handleLogin, username, password, setUsername, setPassword }) => {
  const dispatch = useDispatch()
  const loginCredentials = useSelector(state => state.loginCredentials)
  console.log(loginCredentials)

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