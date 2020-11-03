import React , { Component } from 'react';
import { connect } from 'react-redux';
import BlogList from '../components/BlogList/BlogList';
import PropTypes from 'prop-types';
import { fetchBlogs } from '../actions';
import { fetchAllBlogs } from '../services/apiCaller';

class BlogContainer extends Component {
    componentDidMount(){
        fetchAllBlogs().then(res => {
            this.props.fetchAllBlogs(res.data);
        });
    }

    render() {
        const { blogs } = this.props;
        return(
            <BlogList blogs={blogs} />
        );
    }
}

BlogContainer.propTypes = {
    blogs: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired
        })
    ).isRequired
};

const mapStateToProps = ({ blog }) => {
    const { blogs } = blog;
    return { blogs };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllBlogs: (blogs) => {
            dispatch(fetchBlogs(blogs));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BlogContainer);
