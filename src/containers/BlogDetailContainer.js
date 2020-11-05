import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBlog } from '../actions';
import BlogDetail from '../components/BlogDetail/BlogDetail';

class BlogDetailContainer extends Component {
  componentDidMount() {
    const { match } = this.props;
    this.props.fetchDetailBlog(match.params.id);
  }

  render() {
    const { blogDetail } = this.props;
    return <BlogDetail blog={blogDetail} />;
  }
}

const mapStateToProps = ({ blog }) => {
  const { blogDetail } = blog;
  return { blogDetail };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchDetailBlog: (id) => {
      dispatch(fetchBlog(id));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogDetailContainer);
