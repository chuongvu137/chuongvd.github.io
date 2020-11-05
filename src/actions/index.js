import * as types from '../constants/ActionTypes';
import {
  fetchAllBlogs,
  fetchDetailBlog,
} from '../services/apiCaller';

export const fetchBlogs = (params) => {
  return (dispatch) => {
    dispatch({
      type: types.FETCH_BLOGS,
    });
    fetchAllBlogs(params)
      .then((res) => {
        dispatch({
          type: types.FETCH_BLOGS_SUCCESS,
          payload: { blogs: res.data },
        });
      })
      .catch((error) =>
        dispatch({
          type: types.FETCH_BLOGS_FAILED,
          payload: { error: error },
        })
      );
  };
};

export const fetchBlog = (id) => {
  return (dispatch) => {
    dispatch({
      type: types.FETCH_BLOG,
    });
    fetchDetailBlog(id)
      .then((res) => {
        dispatch({
          type: types.FETCH_BLOG_SUCCESS,
          payload: { blog: res.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: types.FETCH_BLOG_FAILED,
          payload: { error: error },
        });
      });
  };
};

export const fetchAll = (params) => {
  return (dispatch) => {
    dispatch({
      type: types.FETCH_ALL_BLOGS,
    });
    fetchAllBlogs(params)
      .then((res) => {
        dispatch({
          type: types.FETCH_ALL_BLOGS_SUCCESS,
          payload: { total: res.data.length },
        });
      })
      .catch((error) =>
        dispatch({
          type: types.FETCH_ALL_BLOGS_FAILED,
          payload: { error: error },
        })
      );
  };
};
