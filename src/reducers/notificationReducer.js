const notificationReducer = (state = null, action) => {
  if (action.type === 'SET_NOTIFICATION') {
    return action.data
  }
  if (action.type === 'DELETE_NOTIFICATION') {
    return null
  }

  return state
}

export const setNotification = (message, severity) => {
  return {
    type: 'SET_NOTIFICATION',
    data: {
      message,
      severity
    }
  }
}

export const deleteNotification = () => {
  return {
    type: 'DELETE_NOTIFICATION'
  }
}

export default notificationReducer