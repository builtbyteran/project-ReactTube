import { useState, useEffect } from 'react';
import { useDebounce } from './useDebounce';

export const SearchBar = ({ onSearchTermChange }) => {
  const [term, setTerm] = useState('');
  const debounceQuery = useDebounce(term, 1000);

  useEffect(() => {
    onSearchTermChange(debounceQuery);
  }, [debounceQuery]);

  return (
    <div className='search-bar'>
      <input
      value={term}
      onChange={ (event) => {
        setTerm(event.target.value);
      }}
      />
    </div>
  );
}