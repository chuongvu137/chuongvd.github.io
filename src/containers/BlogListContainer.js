import React, { Component } from 'react';
import { connect } from 'react-redux';
import BlogList from '../components/BlogList';
import PropTypes from 'prop-types';
import { fetchBlogs, fetchAll } from '../actions';
import Pagination from '../common/Pagination';
import Search from '../common/Search';
import Sort from '../common/Sort';

class BlogContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queryParams: {
        page: 1,
        limit: 10,
        order: 'asc',
        sortBy: 'createdAt',
        search: '',
      },
    };
  }

  componentDidMount() {
    const { queryParams } = this.state;
    this.props.fetchAllBlogs(queryParams);
    this.props.fetchAll(null);
  }

  handleSearch = (search) => {
    const { queryParams } = this.state;
    this.props.fetchAll({ search });
    this.setState(
      {
        queryParams: {
          ...queryParams,
          search,
          page: 1,
          limit: 10,
          order: 'asc',
          sortBy: 'createdAt',
        },
      },
      () => this.props.fetchAllBlogs(this.state.queryParams)
    );
  };

  handleSort = (order) => {
    const { queryParams } = this.state;
    this.setState(
      {
        queryParams: {
          ...queryParams,
          order,
        },
      },
      () => this.props.fetchAllBlogs(this.state.queryParams)
    );
  };

  handlePageChange = (newPage) => {
    const { queryParams } = this.state;
    this.setState(
      {
        queryParams: {
          ...queryParams,
          page: newPage,
        },
      },
      () => this.props.fetchAllBlogs(this.state.queryParams)
    );
  };

  handlePerPageChange = (limit) => {
    const { queryParams } = this.state;
    this.setState(
      {
        queryParams: {
          ...queryParams,
          limit: limit,
        },
      },
      () => this.props.fetchAllBlogs(this.state.queryParams)
    );
  };

  render() {
    const { blogs, total } = this.props;
    const { queryParams } = this.state;

    return (
      <React.Fragment>
        <div className="d-flex align-items-center">
          <Search onSearch={this.handleSearch} />
          <Sort onSort={this.handleSort} />
        </div>
        <BlogList blogs={blogs} />
        <Pagination
          pagination={queryParams}
          totalRows={total}
          onPageChange={this.handlePageChange}
          onPerPageChange={this.handlePerPageChange}
        />
      </React.Fragment>
    );
  }
}

BlogContainer.propTypes = {
  blogs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const mapStateToProps = ({ blog }) => {
  const { blogs, total } = blog;
  return { blogs, total };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllBlogs: (params) => {
      dispatch(fetchBlogs(params));
    },
    fetchAll: (params) => {
      dispatch(fetchAll(params));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogContainer);
