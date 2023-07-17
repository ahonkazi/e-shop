import React from 'react'
import UseQuery from '../../hooks/UseQuery'

const SearchResult = () => {

  const searchKey = UseQuery().get('q')
  console.log(searchKey)
  return (
    <div>SearchResult</div>
  )
}

export default SearchResult