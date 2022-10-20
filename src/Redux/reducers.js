import { combineReducers } from 'redux'
import { authReducer } from '../Views/StaticSite/Views/Authentication/Auth.reducer'
import { blogsReducer } from '../Views/StaticSite/Views/Blogs/Blogs.reducer'
import { careerReducer } from '../Views/StaticSite/Views/Careers/Career.reducer'
import { donationReducer } from '../Views/StaticSite/Views/Donation/Donation.reducer'
import { volunteerReducer } from '../Views/StaticSite/Views/Volunteer/Volunteer.reducer'
import { shopReducer } from '../Views/StaticSite/Views/Shop/Shop.reducer'


const reducers = combineReducers({
  auth: authReducer,
  volunteer:volunteerReducer,
  career:careerReducer,
  donation:donationReducer,
  blogs:blogsReducer,
  shop:shopReducer
})

export default reducers
