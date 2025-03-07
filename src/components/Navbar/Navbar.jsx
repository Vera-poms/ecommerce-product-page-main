import React from 'react';
import iconMenu from '/Users/poms/Documents/ecommerce-product-page-main/src/assets/images/icon-menu.svg';
import iconClose from '/Users/poms/Documents/ecommerce-product-page-main/src/assets/images/icon-close.svg';
import logo from '/Users/poms/Documents/ecommerce-product-page-main/src/assets/images/logo.svg';
import iconCart from '/Users/poms/Documents/ecommerce-product-page-main/src/assets/images/icon-cart.svg';
import imageAvatar from '../../assets/images/image-avatar.png';

const Navbar = () => {
  return (
    <div className='flex px-3 pt-3 pb-5 w-full justify-between h-[60px] fixed z-1 bg-white'>
     {/*icon-menu and logo container */}
     <div className='flex space-x-4 items-start'>
      <div>
        <img className='w-4 h-4' 
        src={iconMenu} alt="icon-menu"/>
      </div>

     <div className='bg-white absolute left-0 top-0 h-screen w-[65%] z-40 md:hidden'>
      <img className='w-4 h-4 mt-8 ml-5' 
        src={iconClose} alt="icon-close"/>
      
      <div>
          <ul className='pt-15 pl-5 font-semibold space-y-3'>
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
       <img src={logo} alt="logo" />
      </div>
     </div>

     <div className='flex space-x-4 '>
      <div>
       <img src={iconCart} alt="" />
      </div>

      <div>
       <img 
       className='w-5'
       src={imageAvatar} alt="" />
      </div>
     </div>
    </div>
  )
}

export default Navbar