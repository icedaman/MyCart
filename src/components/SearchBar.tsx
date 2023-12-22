import { XCircleIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { useState } from "react"
import { shoeList } from "../constants"
shoeList

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState('')

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

  return (
    <div className="bg-amber-300 p-2 rounded-full shadow-lg flex items-center">
        <MagnifyingGlassIcon className="inline-block h-8 w-8 ml-5 text-coral-red" aria-hidden="true" />
        <input type="text" placeholder="Type to search..." 
          className=" bg-transparent border-none h-full w-full ml-6 text-lg font-palanquin"
          value={input} onChange={(e)=>handleInputChange(e.target.value)}  
        />

        {/* <XCircleIcon className="block h-6 w-6" aria-hidden="true" /> */}
    </div>
  )
}
