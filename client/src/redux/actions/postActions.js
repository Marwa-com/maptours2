import axios from 'axios'
import { prefixe} from '../../helpers/constant'
import { setToken } from '../../helpers/helpers'
import { clearError, setError, startLoading, stopLoading } from './appStateActions'
import{ADD_POST_SUCCESS, GET_VALIDATED_POST_SUCCESS, GET_INVALIDATED_POST_SUCCESS, GET_POST_COUNT_SUCCESS} from './postTypes'
import {getUsers} from './usersActions'

//add Post
export const addPost = (newPost) => async (dispatch) => {
    try {
        dispatch(startLoading("Adding post ..."))
        dispatch(clearError())
        setToken()
        const { data } = await axios.post(`${prefixe}/api/post/addpost`, newPost)
        dispatch({
            type: ADD_POST_SUCCESS,
            payload: data
        })
     dispatch(getInvalidatedPost( 1, 4 ))

    }
    catch (err) {
        dispatch(stopLoading())
        dispatch(setError(err.response.data.errors))
    }
}
// get validated Posts 
export const getvalidatedPost = (page, limit ) => async (dispatch) => {
  
    try {
      dispatch(clearError())
     dispatch(startLoading("Get Validated Posts")) 
      setToken() 
        
        const { data } = await axios.get(`${prefixe}/api/post/validatedposts?page=${page}&limit=${limit}`) 
        
        dispatch({
            type: GET_VALIDATED_POST_SUCCESS,
            payload: data
        })
        dispatch(stopLoading())
    }
    catch (err) {
        dispatch(setError(  err.response && err.response.data.message
          ? err.response.data.message
          : err.message))
        dispatch(stopLoading())
    }
}
//option only for admin/ get invalidated Posts
export const getInvalidatedPost = () => async (dispatch) => {

    try {
        dispatch(clearError())
        dispatch(startLoading("Get Invalidated Posts"))
        setToken()
        const { data } = await axios.get(`${prefixe}/api/post/invalidatedposts`)
        console.log(data)
          
        dispatch({
            type: GET_INVALIDATED_POST_SUCCESS,
            payload: data
        })
        dispatch(stopLoading())
    }
    catch (err) {
        dispatch(stopLoading())
         dispatch(setError(  err.response && err.response.data.message
          ? err.response.data.message
          : err.message))
    }
}

//get number of valideted posts 
export const getPostCount = () => async (dispatch) => {
    dispatch(clearError())
    dispatch(startLoading("Get post count"))
    try {
        const { data } = await axios.get(`${prefixe}/api/post/postcount`)
       
        dispatch({
            type: GET_POST_COUNT_SUCCESS,
            payload: data
        })
        dispatch(stopLoading())
    }
    catch (err) {
        dispatch(stopLoading())
        dispatch(setError(err.response.data.errors))
    }
}
 //like && dislike / likes count
export const updatelike = (id) => async (dispatch) => {
    try {
        const { data } = await axios.put(`${prefixe}/api/post/likeposts/${id}`)
        dispatch(getvalidatedPost(1, 4)) 
    }
    catch (err) {
        dispatch(stopLoading())
        dispatch(setError(err.response.data.errors))
    }
}

 //option only for admin/ delete Post
export const deletePost = (id) => async (dispatch) => {
 
    try {
        await axios.delete(`${prefixe}/api/post/deletepost/${id}`);
        dispatch(getvalidatedPost())  
        dispatch(getInvalidatedPost())  
   }
   catch (err) {
       dispatch(setError(err.response.data.errors))
       dispatch(stopLoading())
   }
}

//option only for admin /update Post : (isValidate=true) /update User :(points+=1)
export const updatePostUser = (id, data) => async (dispatch) => {
 
    try {
        await axios.put(`${prefixe}/api/post/updatepostuser/${id}`, data);
        console.log(data)
        dispatch(getInvalidatedPost())     
        dispatch(getUsers())
   }
   catch (err) {
       dispatch(setError(err.response.data.errors))
       dispatch(stopLoading())
   }
}

