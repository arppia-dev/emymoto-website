import React, { useState } from 'react'

const Search: React.FC = () => {
  const [query, setQuery] = useState('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  const handleSearch = () => {
    console.log('Searching for:', query)
    // Add search logic here
  }

  return (
    <div className="search-component">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
        Search
      </button>
    </div>
  )
}

export default Search
