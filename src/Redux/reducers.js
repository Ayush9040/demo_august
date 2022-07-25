import { combineReducers } from 'redux'
import { authReducer } from '../Views/StaticSite/Views/Authentication/Auth.reducer'
import { blogsReducer } from '../Views/StaticSite/Views/Blogs/Blogs.reducer'
import { careerReducer } from '../Views/StaticSite/Views/Careers/Career.reducer'
import { volunteerReducer } from '../Views/StaticSite/Views/Volunteer/Volunteer.reducer'


const reducers = combineReducers({
  auth: authReducer,
  volunteer:volunteerReducer,
  career:careerReducer,
  blogs:blogsReducer
})

export default reducers
