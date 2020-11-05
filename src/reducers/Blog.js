import * as types from '../constants/ActionTypes';

var initialState = {
  blogs: [],
  blogDetail: null,
  error: '',
  total: 0,
};

var blog = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ALL_BLOGS:
      return {
        ...state,
        total: 0,
        error: '',
      };
    case types.FETCH_ALL_BLOGS_SUCCESS:
      return {
        ...state,
        total: action.payload.total,
      };
    case types.FETCH_ALL_BLOGS_FAILED:
      return {
        ...state,
        error: action.payload.error,
      };
    case types.FETCH_BLOGS:
      return {
        ...state,
        blogs: [],
        error: '',
      };
    case types.FETCH_BLOGS_SUCCESS:
      return {
        ...state,
        blogs: action.payload.blogs,
      };
    case types.FETCH_BLOGS_FAILED:
      return {
        ...state,
        error: action.payload.error,
      };
    case types.FETCH_BLOG:
      return {
        ...state,
        blogDetail: null,
      };
    case types.FETCH_BLOG_SUCCESS:
      return {
        ...state,
        blogDetail: action.payload.blog,
      };
    case types.FETCH_BLOG_FAILED:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return { ...state };
  }
};

export default blog;
