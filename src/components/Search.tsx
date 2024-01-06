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
      <div className="my-8 mr-[7%] ml-[1 %] flex flex-col items-center min-w-[20%]
         absolute z-50 top-0 lg:right-1/3 max-md:right-[23%] right-[27%] max-sm:right-20">
        <SearchBar input={input} setInput={setInput} setResults={setResults} />
        <SearchResultsList results={results} setResults={setResults} input={input} setInput={setInput}/>
      </div>
    // </div>
  )
}

export default Search
