import React from 'react'
import iconPlus from '/Users/poms/Documents/ecommerce-product-page-main/src/assets/images/icon-plus.svg';
import iconMinus from '/Users/poms/Documents/ecommerce-product-page-main/src/assets/images/icon-minus.svg';
import iconCart from '/Users/poms/Documents/ecommerce-product-page-main/src/assets/images/icon-cart.svg';
import { PiShoppingCartBold } from "react-icons/pi";

const Description = () => {
  return (
    <div className='font-kumbh px-11 pb-8 pt-10'>
     <div>
      <h6 className='uppercase text-dark-grayish-blue tracking-widest font-normal font-roboto text-3xl'>Sneaker Company</h6>
 
      <h1 className='text-7xl font-bold pr-20 py-6'>
       Fall Limited Edition Sneakers
      </h1>

      <p className='text-dark-grayish-blue text-[40px]  leading-16 tracking-wide font-extralight font-roboto pb-2'>
      These low-profile sneakers are your perfect casual wear companion. Featuring a 
      durable rubber outer sole, they’ll withstand everything the weather can offer.
      </p>
     </div>

     <div className='py-10 font-roboto'>
        <div className='flex justify-between pb-8 items-center'>
        <div className='flex items-center'>
         <p className='text-8xl pr-3 font-bold'>
           $125.00
          </p>
          <p className='bg-black text-white rounded-xl px-6  text-[55px] font-semibold'>
           50%
          </p>
        </div>
         <p className='line-through text-dark-grayish-blue text-5xl font-semibold'>
          $250.00
         </p>
        </div>
        <div className='flex justify-between w-full bg-light-grayish-blue rounded-2xl px-8 py-7 shadow-xs'>
         <button className='cursor-pointer'>
          <img src={iconMinus} alt="" className='w-6' />
         </button>
         <p className='text-6xl font-bold'>
          0
         </p>
         <button className='cursor-pointer'>
          <img src={iconPlus} alt="" className='w-6' />
         </button>
        </div>
        
        <div className='flex items-center justify-center mt-8'>
         <button className='flex items-center justify-center py-7 bg-orange w-full rounded-2xl shadow-light border border-orange cursor-pointer'>
         <img 
         src={iconCart} alt="" />
         {/* <PiShoppingCartBold className='w-[40px]'/> */}
         <p className='text-3xl font-semibold pl-3'>Add to cart</p>
         </button>
        </div>
     </div>
    </div>
  )
}

export default Description