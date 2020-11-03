import * as types from '../constants/ActionTypes';

export const fetchBlogs = (blogs) => {
    return {
        type: types.FETCH_BLOGS,
        payload: { blogs }
    };
};

export const fetchBlog = (blog) => {
    return {
        type : types.FETCH_BLOG,
        payload : { blog }
    };
};
