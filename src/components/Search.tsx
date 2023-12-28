import { useState } from "react"
import { SearchBar } from "./SearchBar"
import { SearchResultsList } from "./SearchResultsList"
import { useParams } from 'react-router-dom'

const Search = () => {
  const [results, setResults] = useState([])
  const queryId = useParams()
  console.log(queryId)

  return (
    <div  className="max-container">
      <div className="p-10 w-2/5 flex flex-col items-center min-w-[200px] m-auto">
        <SearchBar setResults={setResults} />
        <SearchResultsList results={results} />
      </div>
    </div>
  )
}

export default Search
