import React from 'react'
<<<<<<< HEAD
import iconPlus from '../../../src/assets/images/icon-plus.svg';
import iconMinus from '../../../src/assets/images/icon-minus.svg';
import iconCart from '../../../src/assets/images/icon-cart.svg';
=======
import iconPlus from '/Users/poms/Documents/ecommerce-product-page-main/src/assets/images/icon-plus.svg';
import iconMinus from '/Users/poms/Documents/ecommerce-product-page-main/src/assets/images/icon-minus.svg';
import iconCart from '/Users/poms/Documents/ecommerce-product-page-main/src/assets/images/icon-cart.svg';
>>>>>>> ba8a160 (Mobile first responsive made)
import { PiShoppingCartBold } from "react-icons/pi";

const Description = () => {
  return (
<<<<<<< HEAD
    <div className='font-kumbh px-10 pb-8 asbolute z-50'>
     <div>
      <h6 className='uppercase text-dark-grayish-blue tracking-widest font-normal font-roboto text-4xl pb-5'>Sneaker Company</h6>
 
      <h1 className='text-7xl font-bold  pb-8'>
       Fall Limited Edition Sneakers
      </h1>

      <p className='text-dark-grayish-blue text-[42px] pr-8 leading-16 font-normal font-roboto pb-8'>
=======
    <div className='font-kumbh px-7 pb-8'>
     <div>
      <h6 className='uppercase text-dark-grayish-blue tracking-widest font-normal font-roboto '>Sneaker Company</h6>
 
      <h1 className='text-4xl font-bold pr-20 pb-3'>
       Fall Limited Edition Sneakers
      </h1>

      <p className='text-dark-grayish-blue text-base pr-8 leading-6 font-normal font-roboto pb-2'>
>>>>>>> ba8a160 (Mobile first responsive made)
      These low-profile sneakers are your perfect casual wear companion. Featuring a 
      durable rubber outer sole, they’ll withstand everything the weather can offer.
      </p>
     </div>


<<<<<<< HEAD
     <div className='pt-5 font-roboto px-4'>
        <div className='flex justify-between pb-12 items-center'>
        <div className='flex items-center'>
         <p className='text-8xl pr-8 font-bold'>
           $125.00
          </p>
          <p className='bg-black text-white rounded-lg px-6 text-[50px] font-semibold'>
           50%
          </p>
        </div>
         <p className='line-through text-dark-grayish-blue text-5xl font-semibold'>
=======
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
>>>>>>> ba8a160 (Mobile first responsive made)
          $250.00
         </p>
        </div>

<<<<<<< HEAD
        <div className='mx-2'>
          <div className='flex justify-between w-full bg-light-grayish-blue rounded-3xl px-8 py-8 shadow-xs'>
          <button className='cursor-pointer'>
            <img className='w-8'
            src={iconMinus} alt="" />
          </button>
          <p className='text-6xl font-bold'>
            0
          </p>
          <button className='cursor-pointer'>
            <img className='w-8'
            src={iconPlus} alt="" />
          </button>
          </div>
          
          <div className='flex items-center justify-center mt-8 mb-50'>
          <button className='flex items-center justify-center py-10 bg-orange w-full rounded-3xl shadow-light border border-orange cursor-pointer'>
          <img className='w-10'
          src={iconCart} alt="" />
          {/* <PiShoppingCartBold className='w-[40px]'/> */}
          <p className='text-4xl font-semibold pl-6'>Add to cart</p>
          </button>
          </div>
=======
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
>>>>>>> ba8a160 (Mobile first responsive made)
        </div>
     </div>
    </div>
  )
}

export default Description