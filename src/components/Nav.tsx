import { Bars3Icon, BellIcon, XMarkIcon, Bars4Icon, XCircleIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import shoesLogo from '../assets/images/shoesLogo.svg'
import { navLinks } from '../constants'
import { useState } from 'react'
import { NavLink, Outlet} from 'react-router-dom'
import Search from './Search'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Nav = ({ cart }) => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div className="shadow-md w-full fixd top-0 left-0 z-50 relative bg-coral-red">
      <div className="md:flex items-center justify-between  py-2 md:px-10 px-7 max-container">
        <div className="cursor-pointer flex items-center">
          <span className="">
            <NavLink to="/">
              <img src={shoesLogo} alt='Logo' width={100} className='rounded-xl'/>
            </NavLink>
            {/* <Bars3CenterLeftIcon className="block h-10 w-10" aria-hidden="true" /> */}
          </span>
        </div>

        <div className=' absolute right-8 top-8 cursor-pointer md:hidden' onClick={()=>setOpenMenu(!openMenu)}>
          {!openMenu ? 
            (<Bars4Icon className="block h-10 w-10" aria-hidden="true" />)
            : 
            (<XCircleIcon className="block h-10 w-10" aria-hidden="true" />)
          }
        </div>

        <Search />
        <ToastContainer />

        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static max-md:bg-coral-red 
         md:z-auto z-50 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-700 ease-out md:opacity-100
         ${openMenu ? 'top-24 opacity-100 z-0' : 'top-[-490px]'}`}>
          {/* {navLinks.map((link)=>(
            <li key={link.label} className='md:ml-8 text-xl font-montserrat font-semibold md:my-0 my-7'>
              <NavLink to={link.href} className='text-gray-800 hover:text-white-400 duration-100 hover:bg-coral-red'>
                {link.label}
              </NavLink>
            </li>
          ))} */}
          <li className='md:ml-8 md:my-0 my-7 max-md:flex max-md:justify-center'>
          <NavLink to="/products" style={({ isActive }) => ({ color: !isActive ? "white" : "yellow" })} end={true}>
            <button className=' font-palanquin font-semibold py-2 px-6 rounded md:ml-8 hover:bg-red-600 duration-500'>
              All Products  
            </button>
          </NavLink></li>
          <li className='md:ml-8 md:my-0 my-7 max-md:flex max-md:justify-center'>
          <NavLink to="/cart" style={({ isActive }) => ({ color: !isActive ? "white" : "yellow" })} end={true}>
            <div className='relative py-2 px-6'>
              <ShoppingCartIcon className="inline-block h-8 w-8 hover:bg-red-600 duration-500 " aria-hidden="true" />
              <span className='bg-black px-2 rounded-2xl absolute left-11 -top-2'>
                {cart.length > 0 && cart.length}
              </span>
            </div>
          </NavLink></li>
        </ul>
      </div>
    </div>
  )
}

export default Nav