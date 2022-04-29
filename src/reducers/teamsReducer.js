import teamService from '../services/team'

const teamsReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_TEAMS':
      return action.data
    case 'ADD_TEAM':
      return [...state, action.data]
    case 'DELETE_TEAM':
      return state.filter(team => team.id !== action.data)
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

export const addTeam = (data) => {
  return {
      type: 'ADD_TEAM',
      data
  }
}

export const deleteTeam = (id) => {
  return {
      type: 'DELETE_TEAM',
      data: id
  }
}

export default teamsReducer