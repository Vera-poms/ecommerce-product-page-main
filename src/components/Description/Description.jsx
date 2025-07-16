// import React, {useState, useContext} from 'react'
import iconPlus from '../../../src/assets/images/icon-plus.svg';
import iconMinus from '../../../src/assets/images/icon-minus.svg';
import iconCart from '../../../src/assets/images/icon-cart.svg';

const Description = ({cartItems, decreaseCartItems, increaseCartItems, addedToCart}) => {
  
  return (
      <div className='w-full relative font-kumbh px-4 pb-16 minitablet:p-0 minitablet:z-10 laptop:'>
        <div>
          <h6 className='uppercase text-dark-grayish-blue tracking-widest font-kumbh font-normal text-sm mobile:text-3xl minitablet:text-xs minitablet:pt-0 laptop:text-base'>Sneaker Company</h6>
    
          <h1 className='text-3xl font-bold pr-10 py-6 minitablet:text-3xl minitablet:pr-0 minitablet:leading-8 font-kumbh mobile:text-5xl minitablet:py-3 laptop:text-5xl laptop:leading-11 laptop:font-semibold'>
          Fall Limited Edition Sneakers
          </h1>

          <p className='text-dark-grayish-blue text-normal  leading-7 tracking-wide font-light font-kumbh mobile:text-2xl mobile:tracking-wider mobile:leading-9 minitablet:text-sm minitablet:leading-6 laptop:pr-10 laptop:text-base laptop:pt-3'>
          These low-profile sneakers are your perfect casual wear companion. Featuring a 
          durable rubber outer sole, they’ll withstand everything the weather can offer.
          </p>
        </div>

        <div className='pt-8 font-roboto minitablet:pt-3'>
            <div className='flex justify-between pb-8 items-center minitablet:flex-col minitablet:items-start minitablet:pb-2'>
              <div className='flex items-center'>
              <p className='text-3xl pr-3 font-bold mobile:text-5xl minitablet:text-[25px] laptop:pt-3'>
                $125.00
                </p>
                <p className='bg-black text-white rounded-lg px-2 text-[18px] font-semibold mobile:px-3 mobile:text-2xl minitablet:text-sm minitablet:px-2 minitablet:rounded-sm'>
                50%
                </p>
              </div>
              <p className='line-through text-dark-grayish-blue text-xl mobile:text-3xl font-semibold minitablet:text-lg minitablet:pt-3'>
                $250.00
              </p>
            </div>

            <div className='minitablet:flex minitablet:items-end laptop:w-3/4'>
              <div className='flex justify-between w-full bg-light-grayish-blue rounded-xl px-8 py-5 shadow-xs items-center minitablet:w-7/16 minitablet:py-2 minitablet:h-12 minitablet:px-2 minitablet:rounded-sm'>
                <button className='cursor-pointer'
                onClick={decreaseCartItems}
                >
                  <img src={iconMinus} alt="" className='w-3 mobile:w-6 minitablet:w-3 minitablet:hover:opacity-50' />
                </button>
                <p className='text-xl font-bold mobile:text-4xl minitablet:text-xl'>
                  {cartItems}
                </p>
                <button className='cursor-pointer'
                onClick={increaseCartItems}
                >
                  <img src={iconPlus} alt="" className='w-3 mobile:w-6 minitablet:w-3 minitablet:hover:opacity-50' />
                </button>
              </div>
              
              <div className='flex items-center justify-center mt-4 minitablet:w-9/16 laptop:w-3/4'>
                <button className='flex items-center justify-center py-4 bg-orange hover:opacity-70 transition duration-300 w-full rounded-xl shadow-light border border-orange cursor-pointer  minitablet:shadow-none minitablet:ml-4 minitablet:h-12 minitablet:rounded-lg'
                onClick={addedToCart}>
                <img 
                src={iconCart} alt="" className='filter brightness-0 mobile:w-8 minitablet:w-5'/>
                <p className='text-xl pl-1 mobile:text-3xl minitablet:text-sm '>Add to cart</p>
                </button>
              </div>
            </div>
        </div>
      </div>
  )
}

export default Description