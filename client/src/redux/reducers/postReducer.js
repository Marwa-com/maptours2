const { GET_INVALIDATED_POST_SUCCESS,  GET_POST_COUNT_SUCCESS, GET_VALIDATED_POST_SUCCESS , ADD_POST_SUCCESS} = require("../actions/postTypes");

const initState = {
    postList: [],
    count: 0
}

const postReducer = (state = initState, { type, payload }) => {
    switch (type) { 
        case GET_VALIDATED_POST_SUCCESS:
            return {
                ...state,
                postList: payload.posts  
            } 
        case GET_POST_COUNT_SUCCESS:
            return {
                ...state,
                count: payload.count
            }
        default:
            return state
    }
}

export default postReducer