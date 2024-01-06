import Button from "../components/Button"
import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify';
import { useEffect } from 'react'

const Cart = ({ cart, setCart }) => {

  const handleCheckoutBtnClick = () => {
    toast.info(`Checkout in Process !`, {
      position: toast.POSITION.TOP_CENTER
    })
    setCart([])
  }

  const handleRemoveItemBtnClick = (itemToRemove) => {
    const filteredCarList = cart.filter(item =>   item.category !== itemToRemove.category || item.id !== itemToRemove.id)
    setCart([...filteredCarList])
    toast.info(`${itemToRemove.name} removed from your cart`, {
      position: toast.POSITION.TOP_CENTER
    })
  }
 
  const getTotal = () => {
    const totalSum = cart?.map(item => item.price).reduce((acc, cValue) => acc + cValue , 0)
    return totalSum
  }

  const handleEmptyCart = () => {
    toast.warning(`Your Cart is now empty`, {
      position: toast.POSITION.TOP_CENTER
    })
    setCart([])
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-hero min-h-screen max-lg:min-h-[500px]">
      <h1 className='text-4xl py-4 text-coral-red text-center  capitalize font-bold [text-shadow:1px_1px_4px_#000]'>My Cart</h1>
      <div className="max-container flex justify-center items-center py-8 text-center">
        <div className="bg-white p-20 w-2/4 rounded-lg max-xl:w-[70%]">
          {cart.length > 0 ? (
            <div onClick={handleEmptyCart} className="text-lg max-md:w-[40%] font-palanquin font-medium text-right flex flex-row-reverse justify-center cursor-pointer rounded-lg p-2 border-coral-red border-2 mb-4 ml-[70%] hover:bg-coral-red hover:text-white">
              Empty Card
            </div>
          ) : null }

          {cart?.map((item, i) => (
            <div className="bg-white border-2 p-4 max-h-40 flex items-center justify-around rounded-lg" key={i+item.id+item.category+item.name}>
              <img src={item.imgURL} alt="item" width={100} className="max-h-[150px] w-1/3" />
              <div className="w-1/3">
                <p className="text-xl font-bold font-palanquin mb-4 text-coral-red">{item.name}</p>
                <p className="text-lg font-bold font-palanquin">{item.price} €</p>
              </div>
              <button className="text-base text-white bg-red-600 hover:bg-red-800 px-2 py-1 rounded-md" 
                onClick={() => handleRemoveItemBtnClick(item)}>
                  X
                </button>
            </div>
          ))}

          {cart.length > 0 ? (
            <div className="w-full flex items-center mt-4 justify-end">
              <p className="text-xl font-semibold mr-2">Total:</p>
              <p className="text-xl font-semibold">{getTotal()} €</p>
            </div>
          ) : null}

          <div className="flex justify-between mt-10">
            {cart.length !== 0 ? (
              <NavLink to={'/'}>
                <Button label={'Checkout'} iconURL={undefined} backgroundColor={undefined} borderColor={undefined} textColor={undefined} fullWidth={undefined} 
                  onClick={handleCheckoutBtnClick}>       
                </Button>
              </NavLink>
              ) : (
                <p className="text-xl">Your Cart is empty</p>
            ) }
            <NavLink to={'/products'}>
              <Button label={'Continue Shopping'} iconURL={undefined} backgroundColor={undefined} borderColor={undefined} textColor={undefined} fullWidth={undefined} >       
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart