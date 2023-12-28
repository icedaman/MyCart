import { XCircleIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { useState } from "react"
import { shoeList } from "../constants"

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState('')
  const [showSearchBtn, setShowSearchBtn] = useState(false)

  const fetchData = (value: any) =>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(jsonData =>{
      const results = jsonData.filter((user: { name: string }) => value && user && user.name && user.name.toLowerCase().includes(value))
      setResults(results)
    })
  }

  const fetchShoes = (list: any) =>{
    const filteredResults = shoeList.filter((shoe: { name: string }) => list && shoe && shoe.name && shoe.name.toLowerCase().includes(list))
    setResults(filteredResults)
  }

  const handleInputChange = (value: any) =>{
    setInput(value)
    //fetchData(value)
    fetchShoes(value)
  }

  const handleCloseBtnClick = () => {
    setInput('')
    setShowSearchBtn(false)
    setResults([])
  }

  return (
    <div className="bg-coral-red p-2 rounded-full shadow-lg flex items-center relative">
        <button  onClick={()=> setShowSearchBtn(!showSearchBtn)}>
          {!showSearchBtn ? <MagnifyingGlassIcon className="inline-block h-8 w-8 text-white transition-all duration-500 hover:scale-125" aria-hidden="true" /> : null}
        </button>
        {showSearchBtn ? (
          <>
            <MagnifyingGlassIcon className="inline-block h-8 w-8 ml-5 text-white" aria-hidden="true" />
            <input type="text" placeholder="Type to search..."
            className=" bg-transparent border-none h-full w-full ml-6 text-lg font-palanquin text-white"
            value={input} onChange={(e) => handleInputChange(e.target.value)} />
          </>
        ) : null}
        
        {showSearchBtn ? (<XCircleIcon className="block h-10 w-10 -right-12 absolute text-coral-red" aria-hidden="true" onClick={handleCloseBtnClick}/>) : null}
    </div>
  )
}
