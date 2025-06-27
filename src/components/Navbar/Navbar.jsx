import React, {useState, useEffect} from 'react';
import iconMenu from '../../../src/assets/images/icon-menu.svg';
// import iconClose from '../../../src/assets/images/icon-close.svg';
import logo from '../../../src/assets/images/logo.svg';
import iconCart from '../../../src/assets/images/icon-cart.svg';
import imageAvatar from '../../assets/images/image-avatar.png';
import ResponsiveMenu from './ResponsiveMenu.jsx';
import { li, nav } from 'framer-motion/client';
import HandleCartItems, {handleNumberOfItems} from '../CartItems/CartItems.jsx';
import {NavbarMenu} from './data.js'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const {cartItems} = HandleCartItems(0)

  

  //  const [cartItems, setCartItems] = useState(0)
  // useEffect(() => {
  //   let total = 0
  //   setCartItems(c => c)
  // }, [cartItems])
  
  //  function addToCart(){
  //   setCartItems(c => c + 1) 
  //  }
  //   function removeFromCart(){
  //   setCartItems(c => 
  //    c > 0 ? c - 1 : 0 
  //   ) 
  //  }
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
      <nav className=''>
        <div>
          <div className='flex px-16 pt-5 pb-5 w-full justify-between h-[150px] fixed z-1 bg-white content-center'>
        {/*icon-menu and logo container */}
          <div className='flex items-center justify-center'
          >
            <div className='cursor-pointer md:hidden'>
              <img onClick={() => setOpen(o => !o)}
              className='w-12 h-9' 
              src={iconMenu} alt="icon-menu"/>
            </div>

            <div className=''>
              <img className='h-12 ml-8 '
              src={logo} alt="logo" />
            </div>

            <div className='hidden md:flex'>
              <ul className='text-[18px] flex row text-dark-grayish-blue font-light ' >
               {
                NavbarMenu.map((item) => {
                  return(
                    <li key={item.id}>
                      <a href={item.link} className='inline-block py-1 px-3 hover:text-orange font-semibold'>
                        {item.title}
                      </a>
                    </li>
                  )
                })
               }
              </ul>
            </div>
          </div>

          

          <div className='flex pt-8 items-center'>
            <div className='relative'>
            <img className='w-20 h-14 mr-8'
            src={iconCart} alt="" />
            <p className='absolute -top-3 right-6 text-2xl font-bold bg-orange rounded-3xl text-white px-4 py-1'>{cartItems}</p>
            </div>

            <div>
            <img 
            className='w-20 h-14'
            src={imageAvatar} alt="" />
            </div>
          </div>

          
          </div>
        </div>
      </nav>

      <ResponsiveMenu open={open}/>
    </>
  )
}

export default Navbar