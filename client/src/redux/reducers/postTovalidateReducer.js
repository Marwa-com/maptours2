const { GET_INVALIDATED_POST_SUCCESS, ADD_POST_SUCCESS} = require("../actions/postTypes");

const initState = {
postListTovalidate: [],
}
const postTovalidateReducer = (state = initState, { type, payload }) => {
    switch (type) {
     case  ADD_POST_SUCCESS:
     case GET_INVALIDATED_POST_SUCCESS:
            return {
                ...state,
                postListTovalidate: payload.posts
            }  
        default:
            return state
    }
}

export default postTovalidateReducer



