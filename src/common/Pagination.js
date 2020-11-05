import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Pagination = (props) => {
  const { pagination, totalRows, onPageChange, onPerPageChange } = props;
  const { page, limit } = pagination;
  const totalPages = Math.ceil(totalRows / limit);

  const handlePageChange = (newPage) => {
    if (onPageChange) {
      onPageChange(newPage);
    }
  };

  const handlePerPage = (perPage) => {
    if(onPerPageChange){
      onPerPageChange(perPage);
    }
  };

  const handleRange = (from, to, step = 1) => {
    let i = from;
    const range = [];

    while (i <= to) {
      range.push(i);
      i += step;
    }

    return range;
  };

  const ranges = handleRange(1, totalPages);

  return (
    <Fragment>
      <nav aria-label="Page navigation example mr-3">
        <ul className="pagination justify-content-end">
          <div className="btn-group mr-5">
            <button
              type="button"
              className="btn border border-success dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {limit}
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" onClick={() => handlePerPage(10)}>
                10
              </a>
              <a className="dropdown-item" onClick={() => handlePerPage(50)}>
                50
              </a>
              <a className="dropdown-item" onClick={() => handlePerPage(100)}>
                100
              </a>
            </div>
          </div>
          <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
            <a
              className="page-link"
              aria-disabled={page === 1}
              onClick={() => handlePageChange(page - 1)}
            >
              Previous
            </a>
          </li>
          {ranges.map((i) => {
            return (
              <li
                className="page-item"
                key={i}
                onClick={() => handlePageChange(i)}
              >
                <a className="page-link">{i}</a>
              </li>
            );
          })}
          <li className={`page-item ${page === totalPages ? 'disabled' : ''}`}>
            <a
              className="page-link"
              aria-disabled={page === totalPages}
              onClick={() => handlePageChange(page + 1)}
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

Pagination.propTypes = {
  pagination: PropTypes.object.isRequired,
  onPageChange: PropTypes.func,
  onPerPageChange: PropTypes.func
};

Pagination.defaultProps = {
  onPageChange: null,
  onPerPageChange: null
};

export default Pagination;
