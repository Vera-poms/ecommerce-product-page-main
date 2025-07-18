// import React, {useState, useContext} from 'react'
import iconPlus from '../../../src/assets/images/icon-plus.svg';
import iconMinus from '../../../src/assets/images/icon-minus.svg';
import iconCart from '../../../src/assets/images/icon-cart.svg';

const Description = ({cartItems, decreaseCartItems, increaseCartItems, addedToCart}) => {
  
  return (
      <div className='font-kumbh pb-16 tablet:w-6/8 tablet:pb-0'>
        <div className='px-10 laptop:px-0'>
          <h6 className='uppercase text-dark-grayish-blue tracking-widest font-bold text-[33px] tablet:text-[14px] tablet:font-semibold '>Sneaker Company</h6>
    
          <h1 className='text-7xl font-semibold pr-10 py-6 tablet:text-3xl tablet:py-2 laptop:text-5xl laptop:leading-11 laptop:'>
          Fall Limited Edition Sneakers
          </h1>

          <p className='text-dark-grayish-blue text-4xl  leading-13 tracking-wider font-light pb-10 tablet:leading-5 tablet:text-sm tablet:pb-4 tablet:pr-19 laptop:pr-25 laptop:text-sm laptop:pt-3'>
          These low-profile sneakers are your perfect casual wear companion. Featuring a 
          durable rubber outer sole, they’ll withstand everything the weather can offer.
          </p>

          <div className='flex justify-between pb-8 items-center tablet:pb-3 tablet:flex-col tablet:items-start'>
              <div className='flex items-center tablet:'>
              <p className='text-[80px] pr-3 font-bold tablet:text-[30px] laptop:pt-3'>
                $125.00
                </p>
                <p className='bg-black text-white ml-5 rounded-xl px-3 text-[40px] font-semibold tablet:text-[15px] tablet:rounded-sm tablet:px-2 tablet:ml-2'>
                50%
                </p>
              </div>
              <p className='line-through text-dark-grayish-blue text-[50px] tablet:text-[18px]'>
                $250.00
              </p>
            </div>
        </div>

        <div className='pt-8 tablet:pt-0 tablet:px-10 laptop:px-0'>
            <div className='w-screen px-10 tablet:flex tablet:w-full tablet:pl-0 laptop:pr-25'>
              <div className='flex justify-between w-full bg-light-grayish-blue rounded-3xl px-8 h-[120px] shadow-xs items-center tablet:h-[55px] tablet:w-6/16 tablet:rounded-lg tablet:px-2'>
                <button className='cursor-pointer active:bg-orange/20 trasition-300 h-10 w-10 active:rounded-3xl'
                onClick={decreaseCartItems}
                >
                  <img src={iconMinus} alt="" className='w-8 tablet:w-4 hover:opacity-50' />
                </button>
                <p className='text-4xl font-bold tablet:text-2xl tablet:w-full tablet:text-center tablet:font-medium laptop:text-xl laptop:font-bold'>
                  {cartItems}
                </p>
                <button className='cursor-pointer fill active:bg-orange/20 trasition-300  active:rounded-2xl h-10 w-10 tablet:flex tablet:justify-end tablet:h-4 tablet:w-6 tablet:hover:text-orange/20 '
                onClick={increaseCartItems}
                >
                  <img src={iconPlus} alt="" className='w-8 tablet:w-6 hover:opacity-50' />
                </button>
              </div>
              
              <div className='flex items-center justify-center mt-6 tablet:w-10/16 tablet:mt-0 tablet:ml-4'>
                <button className='flex items-center justify-center h-[120px] py-4 bg-orange hover:opacity-70 active:opacity-70 transition duration-300 w-full rounded-3xl shadow-light border border-orange cursor-pointer tablet:h-[55px] tablet:rounded-lg '
                onClick={addedToCart}>
                <img 
                src={iconCart} alt="" className='filter brightness-0 w-8 tablet:w-4'/>
                <p className='text-4xl pl-2 font-semibold tablet:text-lg'>Add to cart</p>
                </button>
              </div>
            </div>
        </div>
      </div>
  )
}

export default Description