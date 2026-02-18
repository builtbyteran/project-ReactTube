// 'use client';
// import { Form } from 'react-bootstrap';

// export default function SearchBar() {
//   return (
//     <div className="search-bar">
//       <Form.Control />
//     </div>
//   );
// }

'use client';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDebounce } from './useDebounce';

export const SearchBar = ({ onSearchTermChange }) => {
  const [term, setTerm] = useState('');
  const debounceQuery = useDebounce(term, 1000);

  useEffect(() => {
    onSearchTermChange(debounceQuery);
  }, [debounceQuery]);

  // console.log(term);

  return (
    <div className='search-bar'>
      <input
      // onChange={ (e) => setTerm(e.target.value)} value={term}
      value={term}
      onChange={ (event) => {
        setTerm(event.target.value);
      }}
      />
    </div>
  );
}

// export default SearchBar;
