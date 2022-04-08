import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#d92f05'
    },
    secondary: {
      main: '#fbfbf1'
    },
    error: {
      main: '#ec9439'
    },
    warning: {
      main: '#d9e025'
    }
  }
})

export default theme