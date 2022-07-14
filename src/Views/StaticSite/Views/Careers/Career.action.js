export const careerAction = {
  FETCH_JOB_DATA: 'job/FETCH_JOB_DATA',
  FETCH_JOB_DATA_SUCCESS:'job/FETCH_JOB_DATA_SUCCESS',
  FETCH_JOB_DATA_ERROR:'job/FETCH_JOB_DATA_ERROR'
}

export const fetchJobData = ()=>{
  return { type: careerAction.FETCH_JOB_DATA }
}
  
export const fetchJobDataSuccess =(payload)=>{
  return { type : careerAction.FETCH_JOB_DATA_SUCCESS, payload }
}

export const fetchJobDataError = ()=>{
  return { type: careerAction.fetchJobDataError }
}