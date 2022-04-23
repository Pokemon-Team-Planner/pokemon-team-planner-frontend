import teamService from '../services/team'

const teamsReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_TEAMS':
      return action.data
    default:
      return state
  }
}

export const initializeTeams = () => {
  return async dispatch => {
    const data = await teamService.getAll()

    console.log('data',data)

    dispatch({
      type: 'INIT_TEAMS',
      data: data
    })
  }
}

export default teamsReducer