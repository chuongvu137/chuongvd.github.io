import React from 'react';
import BlogItem from './BlogItem/BlogItem';

const BlogList = ({ blogs }) => {
  return (
    <div className="bd-example p-3">
      <ul className="list-unstyled">
        {blogs.map((blog, index) => {
          return <BlogItem key={index} blog={blog} />;
        })}
      </ul>
    </div>
  );
};

export default BlogList;
