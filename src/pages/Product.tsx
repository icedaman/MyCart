import { NavLink, Outlet, useParams, useSearchParams} from 'react-router-dom'
import { shoeList, pantsList, jacketList, trackSuiteList } from '../constants'
import Button from '../components/Button'
import { motion, AnimatePresence } from 'framer-motion'

const Product = () => {
  const queryId = useParams()
  //const searchParams = useSearchParams()
  const allProductsList = [...shoeList, ...pantsList, ...jacketList, ...trackSuiteList]

  return (
    <div className='bg-hero'>
        <motion.div layout className="max-container py-20">
          <AnimatePresence>
            {allProductsList.filter(item => item.id === Number(queryId.id) && item.category === queryId.category).map(filteredItem => (
              <div key={filteredItem.id} className='w-2/4 m-auto py-4 bg-white rounded-xl'>
                <div className='flex flex-col'>
                  <p className='my-4 text-4xl  text-amber-300 text-center  capitalize font-bold [text-shadow:1px_1px_4px_#000]'>{filteredItem.name}</p>
                  <img src={filteredItem.imgURL} alt="item" className='w-80 my-10 m-auto hover:scale-125 transition-transform duration-500 ease-in-out max-h-[500px]' />
                  <p className='my-4 text-3xl  text-amber-300 text-center  capitalize font-bold [text-shadow:1px_1px_4px_#000]'>{filteredItem.price}</p>
                </div>
                <div className='m-auto my-4 w-2/4'>
                  <Button label={'Add to Cart'} iconURL={undefined} backgroundColor={undefined} borderColor={undefined} textColor={undefined} fullWidth={true} />
                </div>
              </div>
            ))}
          </AnimatePresence>
        </motion.div>
    </div>
  )
}

export default Product
