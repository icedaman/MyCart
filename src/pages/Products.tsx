import { shoeList } from '../constants'
import ProductDetails from './ProductDetails'
import { NavLink} from 'react-router-dom'

const Products = () => {
  return (
    <div className='max-container'>
      <h1 className='text-4xl my-4 text-amber-300 text-center  capitalize font-bold [text-shadow:1px_1px_4px_#000]'>All Shoes</h1>
      <div className="mt-16 mx-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {shoeList?.map(shoe => (
          <NavLink to={`/products/${shoe.id}`}>
            <ProductDetails name={shoe.name} price={shoe.price} imgURL={shoe.imgURL} />
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default Products
