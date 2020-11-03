import React from 'react';
import BlogListContainer from './containers/BlogListContainer';
import BlogDetailContainer from './containers/BlogDetailContainer';

const routes = [
    {
        path: '/',
        exact: true,
        main: ({match}) => <BlogListContainer match={match}/>
    },
    {
        path: '/detail/:id',
        exact: false,
        main: ({match}) => <BlogDetailContainer match={match}/>
    }
];

export default routes;