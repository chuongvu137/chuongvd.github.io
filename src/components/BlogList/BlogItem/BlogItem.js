import React from 'react';
import { NavLink } from 'react-router-dom';

const BlogItem = ({ blog }) => {
  return (
    <li className="media mb-4">
      <img
        src={blog.image}
        className="mr-3"
        width="64"
        heigh="64"
        alt={blog.title}
      />
      <div className="media-body">
        <NavLink to={`/detail/${blog.id}`}>
          <h5 className="mt-0 mb-1">{blog.title}</h5>
        </NavLink>
        {blog.content}
      </div>
    </li>
  );
};

export default BlogItem;
