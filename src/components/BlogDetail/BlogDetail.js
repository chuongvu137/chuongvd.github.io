import React from 'react';

const BlogDetail = ({ blog }) => {
    return ( blog ?
        (<div className="p-5">
            <img 
                src={blog.image || ''} 
                className="mr-3" 
                width='64' 
                heigh='64' 
                alt={blog.title}
            />
            <div className="media-body">
            <h5 className="mt-0 mb-1">{blog.title}</h5>
            {blog.content}
            </div>
        </div>) : null
    );
};

export default BlogDetail;
