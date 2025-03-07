import React from 'react';
import iconMenu from '../../../src/assets/images/icon-menu.svg';
import iconClose from '../../../src/assets/images/icon-close.svg';
import logo from '../../../src/assets/images/logo.svg';
import iconCart from '../../../src/assets/images/icon-cart.svg';
import imageAvatar from '../../assets/images/image-avatar.png';

const Navbar = () => {
  return (
    <div className='flex px-3 pt-5 pb-5 w-full justify-between h-[100px] fixed z-1 bg-white'>
     {/*icon-menu and logo container */}
     <div className='flex space-x-4 items-center'>
      <div>
        <img className='w-8 h-8' 
        src={iconMenu} alt="icon-menu"/>
      </div>

     <div className='bg-white absolute left-0 top-0 h-screen w-[65%] z-40 hidden'>
      <img className='w-4 h-4 mt-8 ml-5' 
        src={iconClose} alt="icon-close"/>
      
      <div>
          <ul className='pt-15 pl-5 font-semibold space-y-3 '>
            <li>
              Collections
            </li>
            <li>
              Men
            </li>
            <li>
              Women
            </li>
            <li>
              About
            </li>
            <li>
              Contact
            </li>
          </ul>
        </div>
     </div>

      <div>
       <img className='h-10'
       src={logo} alt="logo" />
      </div>
     </div>

     <div className='flex space-x-4 pt-5'>
      <div>
       <img className='w-8 h-8'
       src={iconCart} alt="" />
      </div>

      <div>
       <img 
       className='w-8 h-8'
       src={imageAvatar} alt="" />
      </div>
     </div>
    </div>
  )
}

export default Navbar