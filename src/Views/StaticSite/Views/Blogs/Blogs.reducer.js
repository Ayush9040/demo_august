import { blogActions } from './Blogs.action'
import { noError, initialState } from './Blogs.defaultState'

export const blogsReducer = ( state=initialState,action )=>{
  switch(action.type){
  case blogActions.FETCH_BLOGS_DATA:
    return{
      ...state,
      isLoading:true,
      blogs:[],
      error:noError
    }
  case blogActions.FETCH_BLOGS_DATA_SUCCESS:
    return{
      ...state,
      isLoading:false,
      blogs:action.payload,
      error:noError
    }
  case blogActions.FETCH_BLOGS_DATA_ERROR:
    return{
      ...state,
      isLoading:false,
      blogs:[],
      error:noError
    }    
  case blogActions.FETCH_BLOG_DATA:
    return{
      ...state,
      isLoading:true,
      blog:{},
      error:noError
    }
  case blogActions.FETCH_BLOG_DATA_SUCCESS:
    return{
      ...state,
      isLoading:false,
      blog:action.payload,
      error:noError
    }
  case blogActions.FETCH_BLOG_DATA_ERROR:
    return{
      ...state,
      isLoading:false,
      blog:{},
      error:noError
    }  
  default:
    return{
      ...state
    }  
  }
}