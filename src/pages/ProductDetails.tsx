
const ProductDetails = ({ name, price, imgURL }) => {
  return (
    <div className="max-container p- my-2 transition duration-500 ease-in-out shadow-2xl  bg-zinc-900 cursor-pointer rounded-2xl transform hover:scale-110 hover:shadow-[0_0_50px_orange]">    
      <h1 className='py-2 px-2 text-2xl  text-amber-300 text-center  capitalize font-bold [text-shadow:1px_1px_4px_#000]'>{name}</h1>   
      <div className="p-8 rounded bg-coral-red">
          <img src={imgURL} width={250} className="m-auto h-28 object-contain hover:scale-125 transition-transform ease-in-out duration-300" />
      </div>
      <h4 className='text-2xl py-2 px-2 font-semibold capitalize text-clip overflow-hidden text-center text-white'>{price}</h4>
    </div>
  )
}

export default ProductDetails
