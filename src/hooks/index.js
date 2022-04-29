import { useDispatch } from "react-redux"
import { deleteNotification, setNotification } from "../reducers/notificationReducer"

/*
  Custom hook for sending notifications.

  Example useage:
  const notification = useNotification()
  notification.send('a new team added', 'success')
*/

export const useNotification = () => {
  const dispatch = useDispatch()

  const send = (message, type, duration = 5000) => {
    dispatch(setNotification(message, type))
    setTimeout(() => {
      dispatch(deleteNotification())
    }, duration)
  }

  return {
    send
  }
}