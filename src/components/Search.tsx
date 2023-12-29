import { useState } from "react"
import { SearchBar } from "./SearchBar"
import { SearchResultsList } from "./SearchResultsList"
import { useParams } from 'react-router-dom'

const Search = () => {
  const [input, setInput] = useState('')
  const [results, setResults] = useState([])
  const queryId = useParams()
  //console.log(queryId)

  return (
    // <div  className="max-container absolute  z-50 top-0 right-1/3">
      <div className="m-8  flex flex-col items-center min-w-[30%] absolute z-50 top-0 right-1/3 -focus-within:w-[50%]">
        <SearchBar input={input} setInput={setInput} setResults={setResults} />
        <SearchResultsList results={results} setResults={setResults} setInput={setInput}/>
      </div>
    // </div>
  )
}

export default Search
