import React, {useState, useEffect} from 'react'
<<<<<<< HEAD
import imgProduct1 from '../../../src/assets/images/image-product-1.jpg'
import imgProduct2 from '../../../src/assets/images/image-product-2.jpg'
import imgProduct3 from '../../../src/assets/images/image-product-3.jpg'
import imgProduct4 from '../../../src/assets/images/image-product-4.jpg'
import iconPrevious from '../../../src/assets/images/icon-previous.svg'
import iconNext from '../../../src/assets/images/icon-next.svg'
=======
import imgProduct1 from '/Users/poms/Documents/ecommerce-product-page-main/src/assets/images/image-product-1.jpg'
import imgProduct2 from '/Users/poms/Documents/ecommerce-product-page-main/src/assets/images/image-product-2.jpg'
import imgProduct3 from '/Users/poms/Documents/ecommerce-product-page-main/src/assets/images/image-product-3.jpg'
import imgProduct4 from '/Users/poms/Documents/ecommerce-product-page-main/src/assets/images/image-product-4.jpg'
import iconPrevious from '/Users/poms/Documents/ecommerce-product-page-main/src/assets/images/icon-previous.svg'
import iconNext from '/Users/poms/Documents/ecommerce-product-page-main/src/assets/images/icon-next.svg'
>>>>>>> ba8a160 (Mobile first responsive made)

const ImageDisplay = () => {
  const [click, setClick]  = useState(false)

  function previousImage(){
    setClick(true)
    const peviousTab = e.target
    const tabTarget = document.querySelector('#')
  }
  function nextImage(){

  }
  
<<<<<<< HEAD
  return (
    <div className='relative top-20 mb-[120px]'>
     <div className=''>
      <div className='relative -z-1'>
=======


  return (
    <div className='relative -top-23'>
     <div className=''>
      <div className='relative -z-1 '>
>>>>>>> ba8a160 (Mobile first responsive made)
        <img id='product1'
        src={imgProduct1} alt="" />
        <img id='product2'
        hidden
        src={imgProduct2} alt="" />
        <img id='product3'
        hidden
        src={imgProduct3} alt="" />
        <img id='product4'
        hidden
        src={imgProduct4} alt="" />

      </div>

<<<<<<< HEAD
      <div className='absolute z-0 top-120 flex justify-between w-screen px-10'>
=======
      <div className='absolute -z-10 top-120 flex justify-between w-screen px-10'>
>>>>>>> ba8a160 (Mobile first responsive made)
        <button className='bg-white rounded-[50%] px-[35px] py-[35px] cursor-pointer'>
          <img className='h-[30px] w-[30px]' 
          src={iconPrevious} alt="" />
        </button>
        <button className='bg-white rounded-[50%] px-[35px] py-[35px] cursor-pointer'>
          <img className='h-[30px] w-[30px]' 
          src={iconNext} alt="" />
        </button>
      </div>
     </div>
    </div>
  )
}

export default ImageDisplay