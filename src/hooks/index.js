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
    /*
      Clearing all previous setTimeouts to prevent earlier notification
      deleting future notification.

      setTimeout ID's go in consecutive order, 
      so create a dummy timeout function to get the highest ID
      and then clear timeout on all the IDs lower than that
    */
    const highestId = window.setTimeout(() => {
      for (let i = highestId; i >= 0; i--) {
        window.clearTimeout(i)
      }
    }, 0)

    dispatch(setNotification(message, type))
    setTimeout(() => {
      dispatch(deleteNotification())
    }, duration)
  }

  return {
    send
  }
}