import { volunteerActions } from './Volunteer.action'
import  { volunteerState, noError } from './Volunteer.defaultStates'

export const volunteerReducer = (
  state= volunteerState,
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
  }
}