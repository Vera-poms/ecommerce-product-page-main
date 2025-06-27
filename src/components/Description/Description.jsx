// import React, {useState, useContext} from 'react'
import iconPlus from '../../../src/assets/images/icon-plus.svg';
import iconMinus from '../../../src/assets/images/icon-minus.svg';
import iconCart from '../../../src/assets/images/icon-cart.svg';

const Description = ({cartItems, decreaseCartItems, increaseCartItems, addedToCart}) => {
  
  return (
      <div className='w-full relative font-kumbh px-4 pb-16 lg:p-0 lg:z-10 2xl:'>
        <div>
          <h6 className='uppercase text-dark-grayish-blue tracking-widest font-kumbh font-normal text-sm md:text-3xl lg:text-xs lg:pt-0 2xl:text-base'>Sneaker Company</h6>
    
          <h1 className='text-3xl font-bold pr-10 py-6 lg:text-3xl lg:pr-0 lg:leading-8 font-kumbh md:text-5xl lg:py-3 2xl:text-5xl 2xl:leading-11 2xl:font-semibold'>
          Fall Limited Edition Sneakers
          </h1>

          <p className='text-dark-grayish-blue text-normal  leading-7 tracking-wide font-light font-kumbh md:text-2xl md:tracking-wider md:leading-9 lg:text-sm lg:leading-6 2xl:pr-10 2xl:text-base 2xl:pt-3'>
          These low-profile sneakers are your perfect casual wear companion. Featuring a 
          durable rubber outer sole, they’ll withstand everything the weather can offer.
          </p>
        </div>

        <div className='pt-8 font-roboto lg:pt-3'>
            <div className='flex justify-between pb-8 items-center lg:flex-col lg:items-start lg:pb-2'>
              <div className='flex items-center'>
              <p className='text-3xl pr-3 font-bold md:text-5xl lg:text-[25px] 2xl:pt-3'>
                $125.00
                </p>
                <p className='bg-black text-white rounded-lg px-2 text-[18px] font-semibold md:px-3 md:text-2xl lg:text-sm lg:px-2 lg:rounded-sm'>
                50%
                </p>
              </div>
              <p className='line-through text-dark-grayish-blue text-xl md:text-3xl font-semibold lg:text-lg lg:pt-3'>
                $250.00
              </p>
            </div>

            <div className='lg:flex lg:items-end 2xl:w-3/4'>
              <div className='flex justify-between w-full bg-light-grayish-blue rounded-xl px-8 py-5 shadow-xs items-center lg:w-7/16 lg:py-2 lg:h-12 lg:px-2 lg:rounded-sm'>
                <button className='cursor-pointer'
                onClick={decreaseCartItems}
                >
                  <img src={iconMinus} alt="" className='w-3 md:w-6 lg:w-3 lg:hover:opacity-50' />
                </button>
                <p className='text-xl font-bold md:text-4xl lg:text-xl'>
                  {cartItems}
                </p>
                <button className='cursor-pointer'
                onClick={increaseCartItems}
                >
                  <img src={iconPlus} alt="" className='w-3 md:w-6 lg:w-3 lg:hover:opacity-50' />
                </button>
              </div>
              
              <div className='flex items-center justify-center mt-4 lg:w-9/16 2xl:w-3/4'>
                <button className='flex items-center justify-center py-4 bg-orange hover:opacity-70 transition duration-300 w-full rounded-xl shadow-light border border-orange cursor-pointer  lg:shadow-none lg:ml-4 lg:h-12 lg:rounded-lg'
                onClick={addedToCart}>
                <img 
                src={iconCart} alt="" className='filter brightness-0 md:w-8 lg:w-5'/>
                <p className='text-xl pl-1 md:text-3xl lg:text-sm '>Add to cart</p>
                </button>
              </div>
            </div>
        </div>
      </div>
  )
}

export default Description