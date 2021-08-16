import {  GET_PROFILE_SUCCESS, LOGIN_SUCCESS, LOGOUT, REGISTER_SUCCESS } from "./authTypes"
import axios from 'axios'
import { prefixe } from "../../helpers/constant"
import { setToken } from '../../helpers/helpers'
import { clearError, setError, startLoading, stopLoading } from "./appStateActions"
//login
export const login = (info) => async (dispatch) => {
    dispatch(clearError())
    dispatch(startLoading("Login"))
    try {
        const res = await axios.post(`${prefixe}/api/user/login`, info)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
        dispatch(stopLoading())
        dispatch(getProfile())
    } catch (err) {
        dispatch(setError(  err.response && err.response.data.message
          ? err.response.data.message
          : err.message))
        dispatch(stopLoading())
    }
}
//register
export const register = (info) => async (dispatch) => {
    dispatch(clearError())
    dispatch(startLoading("Register"))
    try {
        const res = await axios.post(`${prefixe}/api/user/register`, info)
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })
        dispatch(getProfile())
        dispatch(stopLoading())
    } catch (err) {
        dispatch(setError( err.response && err.response.data.message
          ? err.response.data.message
          : err.message))
        dispatch(stopLoading())
    }
}
 // get Profile
export const getProfile = () => async (dispatch) => {
    dispatch(clearError())
    dispatch(startLoading("Get my profile"))
    try {
        setToken()
        const { data } = await axios.get(`${prefixe}/api/user/getUserProfile`)
        dispatch({
            type: GET_PROFILE_SUCCESS,
            payload: data
        })
        
    }
    catch (err) {
        dispatch(stopLoading())
        dispatch(setError(  err.response && err.response.data.message
          ? err.response.data.message
          : err.message))
    }
}
  // logout 
export const logout = () => {
    return {
        type: LOGOUT
    }
}