import { Bars3Icon, BellIcon, XMarkIcon, Bars4Icon, XCircleIcon } from '@heroicons/react/24/outline'
import headerLogo from '../assets/images/header-logo.svg'
import { navLinks } from '../constants'
import { useState } from 'react'
import { NavLink, Outlet} from 'react-router-dom'

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div className="shadow-md w-full fixd top-0 left-0">
      <div className="md:flex items-center justify-between bg-amber-300 py-5 md:px-10 px-7">
        <div className="cursor-pointer flex items-center">
          <span className="">
            <a href="/">
              <img src={headerLogo} alt='Logo' width={130} height={29}/>
            </a>
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
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-amber-300
         md:z-auto z-50 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-700 ease-out md:opacity-100
         ${openMenu ? 'top-16 opacity-100' : 'top-[-490px]'}`}>
          {navLinks.map((link)=>(
            <li key={link.label} className='md:ml-8 text-xl font-montserrat font-semibold md:my-0 my-7'>
              <a href={link.href} className='text-gray-800 hover:text-white-400 duration-100 hover:bg-coral-red'>
                {link.label}
              </a>
            </li>
          ))}
          <button className='bg-coral-red text-white font-palanquin font-semibold py-2 px-6 rounded md:ml-8 hover:bg-red-600 duration-500'>
            <a href="/products">Products</a>  
          </button>
        </ul>
      </div>
    </div>
  )
}

export default Nav