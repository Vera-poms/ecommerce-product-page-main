// import React, {useState, useContext} from 'react'
import iconPlus from '../../../src/assets/images/icon-plus.svg';
import iconMinus from '../../../src/assets/images/icon-minus.svg';
import iconCart from '../../../src/assets/images/icon-cart.svg';

const Description = ({cartItems, decreaseCartItems, increaseCartItems, addedToCart}) => {
  
  return (
      <div className='font-kumbh pb-16'>
        <div className='px-10'>
          <h6 className='uppercase text-dark-grayish-blue tracking-widest font-bold text-[33px] laptop:text-base'>Sneaker Company</h6>
    
          <h1 className='text-7xl font-semibold pr-10 py-6  laptop:text-5xl laptop:leading-11 laptop:font-bold'>
          Fall Limited Edition Sneakers
          </h1>

          <p className='text-dark-grayish-blue text-4xl  leading-13 tracking-wider font-light pb-10 laptop:pr-10 laptop:text-base laptop:pt-3'>
          These low-profile sneakers are your perfect casual wear companion. Featuring a 
          durable rubber outer sole, they’ll withstand everything the weather can offer.
          </p>

          <div className='flex justify-between pb-8 items-center'>
              <div className='flex items-center'>
              <p className='text-[80px] pr-3 font-bold  laptop:pt-3'>
                $125.00
                </p>
                <p className='bg-black text-white ml-5 rounded-xl px-3 text-[40px] font-semibold'>
                50%
                </p>
              </div>
              <p className='line-through text-dark-grayish-blue text-[50px]'>
                $250.00
              </p>
            </div>
        </div>

        <div className='py-8'>
            <div className='w-screen px-10 tablet:flex '>
              <div className='flex justify-between w-full bg-light-grayish-blue rounded-3xl px-8 h-[100px] shadow-xs items-center'>
                <button className='cursor-pointer'
                onClick={decreaseCartItems}
                >
                  <img src={iconMinus} alt="" className='w-8 active:bg-orange/70 trasition-300' />
                </button>
                <p className='text-4xl font-bold'>
                  {cartItems}
                </p>
                <button className='cursor-pointer'
                onClick={increaseCartItems}
                >
                  <img src={iconPlus} alt="" className='w-8 active:bg-orange/70 trasition-300' />
                </button>
              </div>
              
              <div className='flex items-center justify-center mt-6 laptop:w-3/4'>
                <button className='flex items-center justify-center h-[100px] py-4 bg-orange hover:opacity-70 active:opacity-70 transition duration-300 w-full rounded-3xl shadow-light border border-orange cursor-pointer'
                onClick={addedToCart}>
                <img 
                src={iconCart} alt="" className='filter brightness-0 w-8'/>
                <p className='text-4xl pl-2 font-semibold'>Add to cart</p>
                </button>
              </div>
            </div>
        </div>
      </div>
  )
}

export default Description