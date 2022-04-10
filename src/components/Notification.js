import { React } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Alert, Snackbar } from '@mui/material'
import { deleteNotification } from '../reducers/notificationReducer'

const Notification = () => {
  const notification = useSelector(state => state.notification)
  const dispatch = useDispatch()

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    dispatch(deleteNotification())
  }

  if(!notification) {
    return null
  }

  return (
    <Snackbar open={notification ? true : false} onClose={handleClose}>
        <Alert onClose={handleClose} severity={notification.severity} sx={{ width: '100%' }}>
          {notification.message}
        </Alert>
    </Snackbar>
  )
}

export default Notification