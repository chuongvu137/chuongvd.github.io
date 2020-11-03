import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchDetailBlog } from '../services/apiCaller';
import { fetchBlog } from '../actions';
import BlogDetail from '../components/BlogDetail/BlogDetail';

class BlogDetailContainer extends Component {
    componentDidMount(){
        const { match } = this.props;
        fetchDetailBlog(match.params.id).then(res => {
            this.props.fetchDetailBlog(res.data);
        });
    }    
    
    render() {
        const { blogDetail } = this.props;
        return (
            <BlogDetail blog={blogDetail}/>
        );
    }   
};

const mapStateToProps = ({ blog }) =>{
    const { blogDetail } = blog;
    return { blogDetail };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchDetailBlog: (blog) => {
            dispatch(fetchBlog(blog));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BlogDetailContainer);
