import { NavLink, Outlet, useParams, useSearchParams} from 'react-router-dom'
import { shoeList, pantsList, jacketList, trackSuiteList } from '../constants'
import Button from '../components/Button'

const Product = () => {
  const queryId = useParams()
  //const searchParams = useSearchParams()
  const allProductsList = [...shoeList, ...pantsList, ...jacketList, ...trackSuiteList]

  return (
    <div className="max-container">
      {allProductsList.filter(item => item.id === Number(queryId.id) && item.category === queryId.category).map(filteredItem => (
        <div key={filteredItem.id}>
          <div className='flex flex-col'>
            <p className='my-4 text-4xl  text-amber-300 text-center  capitalize font-bold [text-shadow:1px_1px_4px_#000]'>{filteredItem.name}</p>
            <img src={filteredItem.imgURL} alt="item" className='w-80 m-auto my-8 hover:scale-125 ease-in-out duration-400 transition-transform' />
            <p className='my-4 text-3xl  text-amber-300 text-center  capitalize font-bold [text-shadow:1px_1px_4px_#000]'>{filteredItem.price}</p>
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
