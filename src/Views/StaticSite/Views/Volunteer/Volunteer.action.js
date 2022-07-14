export const volunteerActions = {
  FETCH_PROGRAMS_DATA:'volunteer/FETCH_PROGRAMS_DATA',
  FETCH_PROGRAMS_DATA_SUCCESS:'volunteer/FETCH_PROGRAMS_DATA_SUCCESS',
  FETCH_PROGRAMS_DATA_ERROR:'volunteer/FETCH_PROGRAMS_DATA_ERROR'
}

export const fetchProgramsData = ()=>{
  console.log('action')
  return { type: volunteerActions.FETCH_PROGRAMS_DATA }
}

export const fetchProgramsDataSuccess = (payload)=>{
  return { type:volunteerActions.FETCH_PROGRAMS_DATA_SUCCESS, payload  }
}

export const fetchProgramsDataError = ()=>{
  return { type:volunteerActions.FETCH_PROGRAMS_DATA_ERROR }
}