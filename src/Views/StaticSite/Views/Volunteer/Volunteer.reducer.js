import { volunteerActions } from './Volunteer.action'
import  { initialState, noError } from './Volunteer.defaultStates'

export const volunteerReducer = (
  state=initialState,
  action
)=>{
  switch(action.type){
  case volunteerActions.FETCH_PROGRAMS_DATA:
    return {
      ...state,
      isLoading:true,
      volunteerPrograms:[],
      error:noError
    }
  case volunteerActions.FETCH_PROGRAMS_DATA_SUCCESS:
    return {
      ...state,
      isLoading:false,
      volunteerPrograms:action.payload,
      error:noError
    }
  case volunteerActions.FETCH_PROGRAMS_DATA_ERROR:
    return {
      ...state,
      isLoading:false,
      volunteerPrograms:[],
      error:true
    }
  default:
    return { ...state }    
  }
}