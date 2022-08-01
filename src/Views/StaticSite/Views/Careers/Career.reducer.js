import { careerAction } from './Career.action'
import { noError } from './Career.defaultStates'
import { initialState } from './Career.defaultStates'
export const careerReducer = (state = initialState, action) => {
  switch (action.type) {
  case careerAction.FETCH_JOB_DATA:
    return {
      ...state,
      isLoading: true,
      jobPrograms: [],
      error: noError,
    }
  case careerAction.FETCH_JOB_DATA_SUCCESS:
    return {
      ...state,
      isLoading: false,
      jobPrograms: action.payload,
      error: noError,
    }
  case careerAction.FETCH_JOB_DATA_ERROR:
    return {
      ...state,
      isLoading: false,
      jobPrograms: [],
      error: noError,
    }
  case careerAction.POST_APPLICATION_DATA:
    return {
      ...state
    }
  default:
    return { ...state }
  }
}