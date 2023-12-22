import { useState } from "react"
import { SearchBar } from "../components/SearchBar"
import { SearchResultsList } from "../components/SearchResultsList"

const Products = () => {
  const [results, setResults] = useState([])

  return (
    <div  className="max-container">
      <div className="p-10 w-2/5 flex flex-col items-center min-w-[200px] m-auto">
        <SearchBar setResults={setResults} />
        <SearchResultsList results={results} />
      </div>
    </div>
  )
}

export default Products