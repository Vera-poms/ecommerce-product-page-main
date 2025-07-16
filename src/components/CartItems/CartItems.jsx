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
        className={`fixed left-4 w-[92%] bg-white rounded-xl shadow-2xl minitablet:w-[400px] mobile:top-142 mobile:w-[95%] minitablet:-left-70 minitablet:shadow-2xl tablet:-left-15 ${cartItems === 0 ? 'top-125 minitablet:top-140 tablet:top-120': 'top-130 minitablet:top-165 tablet:top-165'}`}>
          <div className=''>
            <h1 className='text-tablet font-bold px-3 py-6 border-b border-dark-grayish-blue/30 mobile:text-3xl minitablet:text-tablet'>Cart</h1>
    
            {cartItems === 0 || confirmedCartItems === 0 ? (
             
            <div className='py-25 text-center mobile:text-3xl minitablet:text-tablet minitablet:py-18'>
              Your cart is empty.
            </div>
            ):(
                <div className='py-12 px-6'>
              <div className='flex items-center pb-8'>
                <img 
                src={images[1]} 
                alt={`ImageProduct1`}
                className='w-10 h-10 rounded-sm mobile:w-20 mobile:h-20' />
    
                <div className='flex items-center justify-between w-full'>
                  <div className='px-2 '>
                      <h6 className='text-dark-grayish-blue text-[16px] mobile:text-3xl minitablet:text-minitablet'>
                        Fall Limited Edition Sneakers
                      </h6>
        
                      <p className='text-dark-grayish-blue mobile:text-3xl minitablet:text-minitablet'>
                        {`$125.00 x ${cartItems}`}  
                        <b className='text-black pl-1'>
                          ${`${cartItems * 125}.00`}
                        </b>
                      </p>
                    </div>
        
                    <img 
                    src={iconDelete} 
                    alt="bin"
                    className='hover:invert-0 hover:brightness-0 cursor-pointer w-6 mr-10 mobile:w-10 minitablet:w-8'
                    onClick={deletCartItem}
                    />
                  </div>

              
              </div>
              <button className='bg-orange w-full py-4 rounded-lg font-bold text-lg hover:opacity-70 transition duration-300 cursor-pointer mobile:text-3xl minitablet:text-xl'
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