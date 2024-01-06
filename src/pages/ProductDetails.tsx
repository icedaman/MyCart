import { motion } from 'framer-motion'

const ProductDetails = ({ name, price, imgURL }) => {
  return (
    <motion.div layout animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
      className="max-container p- my-2 transition duration-500 ease-in-out shadow-2xl  bg-white cursor-pointer rounded-2xl transform hover:scale-110 hover:shadow-[0_0_50px_orange]">    
      <h1 className='py-2 px-2 text-3xl  text-amber-300 text-center  capitalize font-bold [text-shadow:1px_1px_4px_#000] max-h-[65px]'>{name}</h1>   
      <div className="p-8 rounded ">
          <img src={imgURL} width={250} className="m-auto h-28 object-contain hover:scale-125 transition-transform ease-in-out duration-500" />
      </div>
      <h4 className='text-2xl py-2 px-2 font-semibold capitalize text-clip overflow-hidden text-center text-coral-red'>{price} €</h4>
    </motion.div>
  )
}

export default ProductDetails
