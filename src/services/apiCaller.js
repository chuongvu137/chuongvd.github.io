import axios from 'axios';
import * as Config from '../constants/Config';

export const fetchAllBlogs = (params) => {
  return axios({
    method: 'GET',
    url: `${Config.API_URL}/blogs/`,
    params,
  }).catch((error) => {
    console.log(error);
  });
};

export const fetchDetailBlog = (id) => {
  return axios({
    method: 'GET',
    url: `${Config.API_URL}/blogs/${id}`,
  }).catch((error) => {
    console.log(error);
  });
};
