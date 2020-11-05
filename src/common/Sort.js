import React from 'react';

const Sort = ({ onSort }) => {
  const handleSort = (value) => {
    onSort(value);
  };

  return (
    <React.Fragment>
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-danger dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Sort By Create At
        </button>
        <div className="dropdown-menu">
          <a className="dropdown-item" onClick={() => handleSort('asc')}>
            asc
          </a>
          <a className="dropdown-item" onClick={() => handleSort('desc')}>
            desc
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Sort;
