import { combineReducers } from 'redux'
import { authReducer } from '../Views/StaticSite/Views/Authentication/Auth.reducer'
import { volunteerReducer } from '../Views/StaticSite/Views/Volunteer/Volunteer.reducer'


const reducers = combineReducers({
  auth: authReducer,
  volunteer:volunteerReducer
})

export default reducers
