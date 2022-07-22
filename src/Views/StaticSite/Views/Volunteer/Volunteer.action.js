//import { type } from '@testing-library/user-event/dist/type'

export const volunteerActions = {
  FETCH_PROGRAMS_DATA: 'volunteer/FETCH_PROGRAMS_DATA',
  FETCH_PROGRAMS_DATA_SUCCESS: 'volunteer/FETCH_PROGRAMS_DATA_SUCCESS',
  FETCH_PROGRAMS_DATA_ERROR: 'volunteer/FETCH_PROGRAMS_DATA_ERROR',
  POST_APPLICANT_DATA: 'volunteer/POST_APPLICANT_DATA',
}

export const fetchProgramsData = () => {
  return { type: volunteerActions.FETCH_PROGRAMS_DATA }
}

export const fetchProgramsDataSuccess = (payload) => {
  return { type: volunteerActions.FETCH_PROGRAMS_DATA_SUCCESS, payload }
}

export const fetchProgramsDataError = () => {
  return { type: volunteerActions.FETCH_PROGRAMS_DATA_ERROR }
}

export const postApplicationData = (payload) => {
  return {
    type: volunteerActions.POST_APPLICANT_DATA,
    payload,
  }
}
