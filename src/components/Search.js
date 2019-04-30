import React from 'react';

const Search = (props) => {
  const { value, onChange } = props;

  return (
    <div>
    <div className="search_title">Search by</div>
    <div className="search_subtitle">Films, Characters, Species, Starships & Planets</div>
    <div className="search_input">
      <input
            type="text"
            placeholder="Enter a search term"
            onChange={e => onChange(e.target.value)}
            value={value}
            autoFocus
        />
    </div>
  </div>
  );
}

export default Search;