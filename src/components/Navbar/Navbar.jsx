<<<<<<< HEAD
import React, {useState, useEffect} from 'react';
import iconMenu from '../../../src/assets/images/icon-menu.svg';
// import iconClose from '../../../src/assets/images/icon-close.svg';
import logo from '../../../src/assets/images/logo.svg';
import iconCart from '../../../src/assets/images/icon-cart.svg';
import imageAvatar from '../../assets/images/image-avatar.png';
import ResponsiveMenu from './ResponsiveMenu.jsx';
import { nav } from 'framer-motion/client';

const Navbar = ({close}) => {
  const [open, setOpen] = useState(false)
  // const [close, setClose] = useState(false)
  // let iconMenuJs = document.querySelector('#closeMenu')

  // function openMenu(){
  //   if(!open){
  //     const opened = document.querySelector('#menu')
  //     opened.classList.add('toggle-menu')
  //     opened.classList.add('ease-out')
  //     opened.classList.remove('hidden')
  //     setOpen(o => o === true)
  //   }else{
  //     const opened = document.querySelector('#menu')
  //     opened.classList.remove('toggle-menu')
  //     opened.classList.add('hidden')
  //     setOpen(o => o === false)
  //   }
  // }
  // function closeMenu(){
  //   if(!close){
  //     const closed = document.querySelector('#menu')
  //     closed.classList.add('hidden')
  //     setClose(c => c === true)
  //   }else{
  //     const closed = document.querySelector('#menu')
  //     closed.classList.remove('hidden')
  //     closed.classList.add('toggle-menu')
  //     setClose(c => c === false)
  //   }
  // }

  return (
    <>
      <nav>
        <div className='flex px-12 pt-5 pb-5 w-full justify-between h-[150px] fixed z-1 bg-white content-center'>
      {/*icon-menu and logo container */}
        <div className='flex items-center justify-center'
        >
          <div className='cursor-pointer'>
            <img onClick={() => setOpen(o => !o)}
            className='w-12 h-9' 
            src={iconMenu} alt="icon-menu"/>
          </div>

        {/* <div className='bg-white absolute left-0 top-0 h-screen w-[65%] z-1 pt-12 pl-12 hidden'
        id='menu'
        open={open}>
          <img className='w-12 h-12 cursor-pointer' 
            src={iconClose} alt="icon-close"
            />
          
          <div>
              <ul className='pt-22 font-semibold space-y-8 text-5xl'>
                <li className='cursor-pointer'>
                  Collections
                </li>
                <li className='cursor-pointer'>
                  Men
                </li>
                <li className='cursor-pointer'>
                  Women
                </li>
                <li className='cursor-pointer'>
                  About
                </li>
                <li className='cursor-pointer'>
                  Contact
                </li>
              </ul>
          </div>
          
        </div> */}
        

          <div className=''>
          <img className='h-12 ml-8'
          src={logo} alt="logo" />
          </div>
        </div>

        <div className='flex pt-8'>
          <div>
          <img className='w-20 h-14 mr-8'
          src={iconCart} alt="" />
          </div>

          <div>
          <img 
          className='w-20 h-14'
          src={imageAvatar} alt="" />
          </div>
        </div>

        
        </div>
      </nav>

      <ResponsiveMenu open={open} close={close}/>
    </>
=======
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

     <div className='bg-white absolute left-0 top-0 h-screen w-[65%] z-40'>
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
>>>>>>> ba8a160 (Mobile first responsive made)
  )
}

export default Navbar