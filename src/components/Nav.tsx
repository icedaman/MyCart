import { Bars3Icon, BellIcon, XMarkIcon, Bars4Icon, XCircleIcon } from '@heroicons/react/24/outline'
import shoesLogo from '../assets/images/shoesLogo.svg'
import { navLinks } from '../constants'
import { useState } from 'react'
import { NavLink, Outlet} from 'react-router-dom'
import Search from './Search'

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div className="shadow-md w-full fixd top-0 left-0 ">
      <div className="md:flex items-center justify-between bg-coral-red py-2 md:px-10 px-7 ">
        <div className="cursor-pointer flex items-center">
          <span className="">
            <NavLink to="/">
              <img src={shoesLogo} alt='Logo' width={100} className='rounded-xl'/>
            </NavLink>
            {/* <Bars3CenterLeftIcon className="block h-10 w-10" aria-hidden="true" /> */}
          </span>
        </div>

        <div className=' absolute right-8 top-3 cursor-pointer md:hidden' onClick={()=>setOpenMenu(!openMenu)}>
          {!openMenu ? 
            (<Bars4Icon className="block h-10 w-10" aria-hidden="true" />)
            : 
            (<XCircleIcon className="block h-10 w-10" aria-hidden="true" />)
          }
        </div>

        <Search />

        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static 
         md:z-auto z-50 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-700 ease-out md:opacity-100
         ${openMenu ? 'top-16 opacity-100' : 'top-[-490px]'}`}>
          {/* {navLinks.map((link)=>(
            <li key={link.label} className='md:ml-8 text-xl font-montserrat font-semibold md:my-0 my-7'>
              <NavLink to={link.href} className='text-gray-800 hover:text-white-400 duration-100 hover:bg-coral-red'>
                {link.label}
              </NavLink>
            </li>
          ))} */}
          <NavLink to="/products" style={({ isActive }) => ({ color: !isActive ? "white" : "yellow" })} end={true}>
            <button className=' font-palanquin font-semibold py-2 px-6 rounded md:ml-8 hover:bg-red-600 duration-500'>
              Products  
            </button>
          </NavLink>
          {/* <NavLink to="/products/search" style={({ isActive }) => ({ color: !isActive ? "white" : "yellow" })} end={true}>
            <button className=' font-palanquin font-semibold py-2 px-6 rounded md:ml-8 hover:bg-red-600 duration-500'>
              Search
            </button>
          </NavLink>  */}
        </ul>
      </div>
    </div>
  )
}

export default Nav