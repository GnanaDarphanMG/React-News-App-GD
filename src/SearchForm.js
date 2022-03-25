import React from 'react'
import './index.css'
import { useGlobalContext } from './context'

const SearchForm = () => {
  const { query, handleSearch } = useGlobalContext()

  return (<center>
    <form className='search-form' onSubmit={(e) => e.preventDefault()}>
      <h2>Online News Search</h2>
      <input
        type='text'
        className='form-input'
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </form></center>
  )
}

export default SearchForm