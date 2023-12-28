import { NavLink, Outlet, useParams, useSearchParams} from 'react-router-dom'
import { shoeList } from '../constants'
import Button from '../components/Button'

const Product = () => {
  const queryId = useParams()

  return (
    <div className="max-container">
      <h1 className=''>Product page</h1>
      <h1>Product ID: {queryId.id}</h1>
      {shoeList.filter(shoe => shoe.id === Number(queryId.id)).map(filteredShoe => (
        <div key={filteredShoe.id}>
          <div className='flex flex-col'>
            <p className='my-4 text-4xl  text-amber-300 text-center  capitalize font-bold [text-shadow:1px_1px_4px_#000]'>{filteredShoe.name}</p>
            <img src={filteredShoe.imgURL} alt="shoe" className='w-80 m-auto my-8 hover:scale-125 ease-in-out duration-400 transition-transform' />
            <p className='my-4 text-3xl  text-amber-300 text-center  capitalize font-bold [text-shadow:1px_1px_4px_#000]'>{filteredShoe.price}</p>
          </div>
          <div className='m-auto my-4 w-2/4'>
            <Button label={'Add to Cart'} iconURL={undefined} backgroundColor={undefined} borderColor={undefined} textColor={undefined} fullWidth={true} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Product