import React from 'react'
import iconPlus from '/Users/poms/Documents/ecommerce-product-page-main/src/assets/images/icon-plus.svg';
import iconMinus from '/Users/poms/Documents/ecommerce-product-page-main/src/assets/images/icon-minus.svg';
import iconCart from '/Users/poms/Documents/ecommerce-product-page-main/src/assets/images/icon-cart.svg';
import { PiShoppingCartBold } from "react-icons/pi";

const Description = () => {
  return (
    <div className='font-kumbh px-7 pb-8'>
     <div>
      <h6 className='uppercase text-dark-grayish-blue tracking-widest font-normal font-roboto '>Sneaker Company</h6>
 
      <h1 className='text-4xl font-bold pr-20 pb-3'>
       Fall Limited Edition Sneakers
      </h1>

      <p className='text-dark-grayish-blue text-base pr-8 leading-6 font-normal font-roboto pb-2'>
      These low-profile sneakers are your perfect casual wear companion. Featuring a 
      durable rubber outer sole, they’ll withstand everything the weather can offer.
      </p>
     </div>


     <div className='pt-5 font-roboto'>
        <div className='flex justify-between pb-4 items-center'>
        <div className='flex items-baseline'>
         <p className='text-4xl pr-3 font-bold'>
           $125.00
          </p>
          <p className='bg-black text-white rounded-md px-2 text-[20px] font-semibold'>
           50%
          </p>
        </div>
         <p className='line-through text-dark-grayish-blue text-2xl font-semibold'>
          $250.00
         </p>
        </div>

        <div className='flex justify-between w-full bg-light-grayish-blue rounded-md px-8 py-4 shadow-xs'>
         <button className='cursor-pointer'>
          <img src={iconMinus} alt="" />
         </button>
         <p className='text-lg font-bold'>
          0
         </p>
         <button className='cursor-pointer'>
          <img src={iconPlus} alt="" />
         </button>
        </div>
        
        <div className='flex items-center justify-center mt-4 '>
         <button className='flex items-center justify-center py-3 bg-orange w-full rounded-lg shadow-light border border-orange cursor-pointer'>
         <img 
         src={iconCart} alt="" />
         {/* <PiShoppingCartBold className='w-[40px]'/> */}
         <p className='text-xl font-semibold pl-3'>Add to cart</p>
         </button>
        </div>
     </div>
    </div>
  )
}

export default Description