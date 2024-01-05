import { NavLink, Outlet, useParams, useSearchParams, useNavigate } from 'react-router-dom'
import { shoeList, pantsList, jacketList, trackSuiteList } from '../constants'
import Button from '../components/Button'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline'
import { toast } from 'react-toastify';

const Product = ({ cart, setCart }) => {
  const navigate = useNavigate()
  const queryId = useParams()
  const allProductsList = [...shoeList, ...pantsList, ...jacketList, ...trackSuiteList]

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const addToCartBtnClick = (item) => {
    setCart([...cart, item])
    toast.success(`${item.name} added to your cart`, {
      position: toast.POSITION.TOP_CENTER
    })
  }

  return (
    <div className='bg-hero min-h-screen'>
        <motion.div layout className="max-container py-20">
          <AnimatePresence>
            {allProductsList.filter(item => item.id === Number(queryId.id) && item.category === queryId.category).map(filteredItem => (
              <div key={filteredItem.id} className='w-2/4 m-auto py-4 bg-white rounded-xl'>
                <ArrowLeftCircleIcon className="inline-block h-10 w-10 hover:bg-red-600 hover:text-white duration-100 ml-2" aria-hidden="true" onClick={() => navigate(-1)}/>
                <div className='flex flex-col'>
                  <p className='my-4 text-4xl  text-amber-300 text-center  capitalize font-bold [text-shadow:1px_1px_4px_#000]'>{filteredItem.name}</p>
                  <img src={filteredItem.imgURL} alt="item" className='w-80 my-10 m-auto hover:scale-125 transition-transform duration-500 ease-in-out max-h-[500px]' />
                  <p className='my-4 text-3xl  text-amber-300 text-center  capitalize font-bold [text-shadow:1px_1px_4px_#000]'>€ {filteredItem.price}</p>
                </div>
                <div className='m-auto my-4 w-2/4'>
                  <NavLink to={'/cart'}>
                  <Button label={'Add to Cart'} onClick={()=>addToCartBtnClick(filteredItem)} iconURL={undefined} backgroundColor={undefined} borderColor={undefined} textColor={undefined} fullWidth={true} />
                  </NavLink>
                </div>
              </div>
            ))}
          </AnimatePresence>
        </motion.div>
    </div>
  )
}

export default Product
