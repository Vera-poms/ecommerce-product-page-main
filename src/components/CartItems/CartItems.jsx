import React, {useState} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import {images} from '../ImageDisplay/images.js'
import iconDelete from '../../assets/images/icon-delete.svg'
import { useNavigate } from 'react-router-dom'

const CartItems = ({cartItems, isCartOpen, deletCartItem, confirmedCartItems}) => {
  const navigate = useNavigate()

  return (
    
        <div className='relative flex justify-center font-kumbh '>
          <motion.div 
          initial={{opacity: 0, y: -100}}
          animate={{opacity: 1, y: isCartOpen? 0 : '-100%'}}
          exit={{opacity: 0, y:-100}}
          className={`tablet:fixed absolute w-[96%] h-[720px] shadow-2xl bg-white rounded-2xl top-248 tablet:w-[380px] tablet:h-[280px] tablet:top-115 tablet:right-40 tablet:rounded-xl`}>
            <div className='h-full'>
              <h1 className='text-5xl font-bold px-12 py-16 h-[25%] border-b-2 border-dark-grayish-blue/10 tablet:text-lg tablet:py-4 tablet:px-6'>Cart</h1>
      
              {cartItems === 0 || confirmedCartItems === 0 ? (
              
              <div className='h-[80%] flex place-items-center justify-center text-5xl tablet:text-2xl'>
                Your cart is empty.
              </div>
              ):(
                <div className='py-20 px-12 tablet:py-6 tablet:px-6'>
                  <div className='flex items-center pb-8'>
                    <img 
                    src={images[1]} 
                    alt={`ImageProduct1`}
                    className='w-48 h-48 rounded-2xl tablet:w-18 tablet:h-18 tablet:rounded-lg' />
        
                    <div className='flex items-center justify-between w-full'>
                      <div className='px-2 flex flex-col content-start h-full'>
                          <h6 className='text-dark-grayish-blue text-[40px] tablet:text-[15px]'>
                            Fall Limited Edition Sneakers
                          </h6>
            
                          <p className='text-dark-grayish-blue text-[42px] pt-8 tablet:text-[15px] tablet:pt-2'>
                            {`$125.00 x ${cartItems}`}  
                            <b className='text-black pl-1'>
                              ${`${cartItems * 125}.00`}
                            </b>
                          </p>
                        </div>
            
                        <img 
                        src={iconDelete} 
                        alt="bin"
                        className='invert-0 hover:brightness-0 active:brightness-0 cursor-pointer w-12 mr-2 tablet:w-4'
                        onClick={deletCartItem}
                        />
                      </div>

                  
                  </div>
                  <button className='bg-orange w-full h-[120px] py-4 rounded-3xl text-5xl font-semibold hover:opacity-70 active:opacity-70 transition duration-300 cursor-pointer tablet:text-xl tablet:h-[50px] tablet:rounded-xl tablet:py-2'
                  onClick={() => navigate('/checkout')}>
                    Checkout
                  </button>
                </div> 
              )}
            </div>
          </motion.div>
        </div>
    
    
  )
}

export default CartItems