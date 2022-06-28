import { combineReducers } from 'redux'
import { authReducer } from '../Views/StaticSite/Views/Authentication/Auth.reducer'

const reducers = combineReducers({
  auth: authReducer,
})

export default reducers
