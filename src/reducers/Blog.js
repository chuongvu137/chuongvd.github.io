import * as types from '../constants/ActionTypes';

var initialState = {
    blogs : [],
    blogDetail : null,
};

var blog = ( state = initialState, action ) => {
    switch(action.type){
        case types.FETCH_BLOGS:
            return {
                ...state,
                blogs: action.payload.blogs,
            };
        case types.FETCH_BLOG:
            return {
                ...state,
                blogDetail: action.payload.blog,
            };
        default:
            return { ...state };
    }
};

export default blog;
