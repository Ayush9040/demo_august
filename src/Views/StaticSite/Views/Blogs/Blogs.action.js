export const blogActions = {
  FETCH_BLOGS_DATA:'blogs/FETCH_BLOGS_DATA',
  FETCH_BLOGS_DATA_SUCCESS:'blogs/FETCH_BLOGS_DATA_SUCCESS',
  FETCH_BLOGS_DATA_ERROR:'blogs/FETCH_BLOGS_DATA_ERROR'
}

export const fetchBlogsData = ()=>{
  return { type: blogActions.FETCH_BLOGS_DATA }
}

export const fetchBlogsDataSuccess = (payload)=>{
  return { type: blogActions.FETCH_BLOGS_DATA_SUCCESS,payload }
}

export const fetchBlogsDataError = ()=>{
  return { type:blogActions.FETCH_BLOGS_DATA_ERROR }
}