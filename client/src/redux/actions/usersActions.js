import { GET_USERS_SUCCESS} from './typesusersActions'
import axios from 'axios';
import { prefixe } from "../../helpers/constant"
import { clearError, setError,startLoading, stopLoading } from "./appStateActions"
    //get Users
export const getUsers = () => async(dispatch) => {
    dispatch(clearError())
    dispatch(startLoading("Users"))
    try {
        
        const {data} = await axios.get(`${prefixe}/api/user/getUsers`)
         
     dispatch({ type: GET_USERS_SUCCESS, payload: data });
     dispatch(stopLoading())
}
catch (err) {
    dispatch(setError(  err.response && err.response.data.message
          ? err.response.data.message
          : err.message))
    dispatch(stopLoading())
}
}
     //delete User
 export const deleteUser = (id) => async (dispatch) => {
 
    try {
        await axios.delete(`${prefixe}/api/user/getDeleteUsers/${id}`);
        dispatch(getUsers())    
   }
   catch (err) {
       dispatch(setError(err.response.data.errors))
       dispatch(stopLoading())
   }
} 
    //update User
export const updateUser = (id, data) => async (dispatch) => {
 
    try {
        await axios.put(`${prefixe}/api/user/getUpdateUsers/${id}`, data);
        dispatch(getUsers())    
   }
   catch (err) {
       dispatch(setError(err.response.data.errors))
       dispatch(stopLoading())
   }
}
