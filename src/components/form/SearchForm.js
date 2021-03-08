import React from 'react';
import { useGlobalContext } from '../util/context';

const SearchForm = () => {
  const { query, setQuery, error } = useGlobalContext();
  return (
    <form
      className='search-form'
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <h2>검색어를 입력하세요</h2>
      <input
        type='text'
        className='form-input'
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      {error.show && <div className='error'>{error.msg}</div>}
    </form>
  );
};

export default SearchForm;
