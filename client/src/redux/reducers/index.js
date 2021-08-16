import { combineReducers } from "redux";
import authReducer from "./authReducer";
import postReducer from "./postReducer";
import postTovalidateReducer from "./postTovalidateReducer";
import appStateReducer from "./appStateReducer";
import userReducer from './usersReducer'
export default combineReducers({
    auth: authReducer,
    appState: appStateReducer,
    users:userReducer,
   postTovalidate:postTovalidateReducer,
   posts: postReducer,
})