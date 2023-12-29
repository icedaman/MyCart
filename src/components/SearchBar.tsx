import { XCircleIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { useState } from "react"
import { shoeList, pantsList, jacketList, trackSuiteList } from '../constants'

export const SearchBar = ({ setResults, input, setInput }) => {
  const [showSearchBtn, setShowSearchBtn] = useState(false)

  const fetchData = (value: any) =>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(jsonData =>{
      const results = jsonData.filter((user: { name: string }) => value && user && user.name && user.name.toLowerCase().includes(value))
      setResults(results)
    })
  }

  const fetchProducts = (list: any) =>{
    const allProducts = [...shoeList, ...pantsList, ...jacketList, ...trackSuiteList]
    const filteredResults = allProducts.filter((item: { name: string }) => list && item && item.name && item.name.toLowerCase().includes(list))
    setResults(filteredResults)
  }

  const handleInputChange = (value: any) =>{
    setInput(value)
    //fetchData(value)
    fetchProducts(value.toLowerCase())
  }

  const handleCloseBtnClick = () => {
    setInput('')
    setShowSearchBtn(false)
    setResults([])
  }

  return (
    <div className="bg-white-400 p-2 rounded-full shadow-lg flex items-center relative w-2/3">
        {/* <button  onClick={()=> setShowSearchBtn(!showSearchBtn)}>
          {!showSearchBtn ? <MagnifyingGlassIcon className="inline-block h-8 w-8 text-white transition-all duration-500 hover:scale-125" aria-hidden="true" /> : null}
        </button>
        {showSearchBtn ? ( */}
          <>
            <MagnifyingGlassIcon className="inline-block h-8 w-8 ml-5 text-coral-red" aria-hidden="true" />
            <input type="text" placeholder="What are you looking for ?"
            className=" bg-transparent border-none  text-lg font-palanquin text-black ml-6"
            value={input} onChange={(e) => handleInputChange(e.target.value)} />
          </>
        {/* ) : null}
        
        {showSearchBtn ? (<XCircleIcon className="block h-10 w-10 -right-12 absolute text-white" aria-hidden="true" onClick={handleCloseBtnClick}/>) : null} */}
    </div>
  )
}
