import { shoeList, pantsList, jacketList, trackSuiteList } from '../constants'
import ProductDetails from './ProductDetails'
import { NavLink} from 'react-router-dom'
import { useState, useEffect } from 'react'

const Products = () => {
  const allProductsList = [...shoeList, ...pantsList, ...jacketList, ...trackSuiteList]
  const filters =['jackets', 'trackSuites', 'shoes', 'pants']
  const [selectedFilters, setSelectedFilters] = useState([])
  const [filteredItems, setFilteredItems] = useState(allProductsList)
  const [displayOrderByDesPrice, setDisplayOrderByDesPrice] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  
  useEffect(()=> {
    handleFiltering()
  }, [selectedFilters])

  const handleToggleFilter = (e: any) => {
    if(!selectedFilters.includes(e.target.value)){
      setSelectedFilters([...selectedFilters, e.target.value])
    }else{
      const filteredFilters = selectedFilters.filter(filter => filter !== e.target.value)
      setSelectedFilters(filteredFilters)
    }
  }

  const handleFiltering = () => {
    if(selectedFilters.length > 0) {
      const filteredList = selectedFilters.map(f => {
        const itemsInSelectedFilters = allProductsList.filter(p => p.category === f)
        return itemsInSelectedFilters
      })
      setFilteredItems(filteredList.flat())
    }else{
      setFilteredItems([...allProductsList])
    }
  }

  const handleOrderBtnClick = () => {
    const orderedItems = filteredItems.sort((a,b) =>{
      if(displayOrderByDesPrice) return a.price > b.price ? -1 : b.price > a.price ? 1 : 0
      if(!displayOrderByDesPrice) return a.price > b.price ? 1 : b.price > a.price ? -1 : 0
    })

    setDisplayOrderByDesPrice(!displayOrderByDesPrice)
    setFilteredItems([...orderedItems])
  }

  return (
    <div className='bg-hero'>
      <div className='max-container pb-8'>
        <h1 className='text-4xl py-4 text-coral-red text-center  capitalize font-bold [text-shadow:1px_1px_4px_#000]'>All Products</h1>
        <div className='grid lg:grid-cols-6 sm:gap-6 my-8 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:gap-2'>
          <p className='text-2xl text-center'>Filters:</p>
          {filters.map((filter, i)=> (
              <button className={`p-2 rounded-xl w-40 m-auto text-xl font-semibold text-coral-red active:text-red 
                ${selectedFilters.includes(filter) ? 'bg-coral-red text-white' : 'bg-white text-coral-red'}`} 
                value={filter} onClick={handleToggleFilter} key={i}
              >
                {filter.toUpperCase()}
              </button>
          ))}
          <div className='flex flex-col'>
            {!displayOrderByDesPrice ? (
              <button className='text-xl max-w-[220px] cursor-pointer bg-white h-8 text-center' onClick={handleOrderBtnClick}>Order by Price &darr;</button>
            ) : (
              <button className='text-xl max-w-[220px] cursor-pointer bg-white h-8 text-center' onClick={handleOrderBtnClick}>Order by Price &uarr;</button>
            )}
          </div>
        </div>
        
        <div className="my-16 mx-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
          {filteredItems && filteredItems?.map(item => (
            <NavLink to={`/products/${item.category}/${item.id}`} key={item.category+item.id}>
              <ProductDetails name={item.name} price={item.price} imgURL={item.imgURL} />
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products
