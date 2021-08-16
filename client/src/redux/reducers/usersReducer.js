import {GET_USERS_SUCCESS} from '../actions/typesusersActions'
const initState = {
    users: JSON.parse(localStorage.getItem('users')) ,

  };
  const userReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case GET_USERS_SUCCESS:
           localStorage.setItem('users',JSON.stringify(payload))
          return {
            ...state,
            users: payload,
          };
        default:
          return state;
      }
    };
  export default userReducer;

  