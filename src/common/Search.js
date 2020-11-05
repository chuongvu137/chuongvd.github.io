import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [value, setValue] = useState('');

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(value);
  };

  return (
    <React.Fragment>
      <form className="form-inline my-2 my-lg-0 p-3">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          name="keyword"
          onChange={onChange}
          value={value}
        />
        <button
          className="btn btn-outline-success my-2 my-sm-0"
          type="submit"
          onClick={handleSearch}
        >
          Search
        </button>
      </form>
    </React.Fragment>
  );
};

export default Search;
