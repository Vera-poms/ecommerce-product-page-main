import React, {useState} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import {images} from '../ImageDisplay/images.js'
import iconDelete from '../../assets/images/icon-delete.svg'
import { useNavigate } from 'react-router-dom'

const CartItems = ({cartItems, isCartOpen, deletCartItem, confirmedCartItems}) => {
  const navigate = useNavigate()

  return (
    
        <motion.div 
        initial={{opacity: 0, y: -100}}
        animate={{opacity: 1, y: isCartOpen? 0 : '-100%'}}
        exit={{opacity: 0, y:-100}}
        className={`fixed left-4 w-[92%] bg-white rounded-xl shadow-2xl lg:w-[400px] md:top-142 md:w-[95%] lg:-left-70 lg:shadow-2xl xl:-left-15 ${cartItems === 0 ? 'top-125 lg:top-140 xl:top-120': 'top-130 lg:top-165 xl:top-165'}`}>
          <div className=''>
            <h1 className='text-xl font-bold px-3 py-6 border-b border-dark-grayish-blue/30 md:text-3xl lg:text-xl'>Cart</h1>
    
            {cartItems === 0 || confirmedCartItems === 0 ? (
             
            <div className='py-25 text-center md:text-3xl lg:text-xl lg:py-18'>
              Your cart is empty.
            </div>
            ):(
                <div className='py-12 px-6'>
              <div className='flex items-center pb-8'>
                <img 
                src={images[1]} 
                alt={`ImageProduct1`}
                className='w-10 h-10 rounded-sm md:w-20 md:h-20' />
    
                <div className='flex items-center justify-between w-full'>
                  <div className='px-2 '>
                      <h6 className='text-dark-grayish-blue text-[16px] md:text-3xl lg:text-lg'>
                        Fall Limited Edition Sneakers
                      </h6>
        
                      <p className='text-dark-grayish-blue md:text-3xl lg:text-lg'>
                        {`$125.00 x ${cartItems}`}  
                        <b className='text-black pl-1'>
                          ${`${cartItems * 125}.00`}
                        </b>
                      </p>
                    </div>
        
                    <img 
                    src={iconDelete} 
                    alt="bin"
                    className='hover:invert-0 hover:brightness-0 cursor-pointer w-6 mr-10 md:w-10 lg:w-8'
                    onClick={deletCartItem}
                    />
                  </div>

              
              </div>
              <button className='bg-orange w-full py-4 rounded-lg font-bold text-lg hover:opacity-70 transition duration-300 cursor-pointer md:text-3xl lg:text-xl'
              onClick={() => navigate('/checkout')}>
                Checkout
              </button>
            </div> 
            )}
          </div>
        </motion.div>
    
    
  )
}

export default CartItems