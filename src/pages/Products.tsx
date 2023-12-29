import { shoeList, pantsList, jacketList, trackSuiteList } from '../constants'
import ProductDetails from './ProductDetails'
import { NavLink} from 'react-router-dom'

const Products = () => {
  const allProductsList = [...shoeList, ...pantsList, ...jacketList, ...trackSuiteList]

  return (
    <div className='max-container'>
      <h1 className='text-4xl my-4 text-coral-red text-center  capitalize font-bold [text-shadow:1px_1px_4px_#000]'>All Products</h1>
      <div className="mt-16 mx-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {allProductsList?.map(shoe => (
          <NavLink to={`/products/${shoe.category}/${shoe.id}`}>
            <ProductDetails name={shoe.name} price={shoe.price} imgURL={shoe.imgURL} />
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default Products
