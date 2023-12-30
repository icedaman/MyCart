import { shoeList, pantsList, jacketList, trackSuiteList } from '../constants'
import ProductDetails from './ProductDetails'
import { NavLink} from 'react-router-dom'
import { useState, useEffect } from 'react'

const Products = () => {
  const allProductsList = [...shoeList, ...pantsList, ...jacketList, ...trackSuiteList]
  const [filters, setFilters] = useState([])
  const [filteredItems, setfilteredItems] = useState(allProductsList)

  useEffect(()=> {
    handleFiltering()
  }, [filters])

  const handleAddfilter = (e) =>{
    if(!filters.includes(e.target.value)){
      setFilters([ ...filters, e.target.value])
    }else{
      let filtered = filters.filter(item => (item !== e.target.value))
      setFilters(filtered)
    }
  }

  const handleFiltering = () =>{
    if(filters.length > 0 ){
      const x = filters.map(f => {
        const y = allProductsList.filter(p => p.category === f)
        return y
      })
      setfilteredItems(x.flat())
    }else{
      setfilteredItems([...allProductsList])
    }
  }

  return (
    <div className='bg-hero'>
      <div className='max-container pb-8'>
        <h1 className='text-4xl py-4 text-coral-red text-center  capitalize font-bold [text-shadow:1px_1px_4px_#000]'>All Products</h1>

        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14 mt-8'>
          <button className={`p-2 rounded-xl w-40 m-auto text-xl font-semibold bg-white text-coral-red active:text-red`} value={'shoes'} onClick={handleAddfilter}> Shoes</button>
          <button className={`p-2 rounded-xl w-40 m-auto text-xl font-semibold bg-white text-coral-red active:text-red`} value={'pants'} onClick={handleAddfilter}> Pants</button>
          <button className={`p-2 rounded-xl w-40 m-auto text-xl font-semibold bg-white text-coral-red active:text-red`} value={'jackets'} onClick={handleAddfilter}> Jackets</button>
          <button className={`p-2 rounded-xl w-40 m-auto text-xl font-semibold bg-white text-coral-red active:text-red`} value={'trackSuites'} onClick={handleAddfilter}> Track Suites</button>
        </div>

        
        <div className="mt-16 mx-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
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
