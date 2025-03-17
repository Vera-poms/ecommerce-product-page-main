import React, {useState, useEffect} from 'react'
import imgProduct1 from '/Users/poms/Documents/ecommerce-product-page-main/src/assets/images/image-product-1.jpg'
import imgProduct2 from '/Users/poms/Documents/ecommerce-product-page-main/src/assets/images/image-product-2.jpg'
import imgProduct3 from '/Users/poms/Documents/ecommerce-product-page-main/src/assets/images/image-product-3.jpg'
import imgProduct4 from '/Users/poms/Documents/ecommerce-product-page-main/src/assets/images/image-product-4.jpg'
import iconPrevious from '/Users/poms/Documents/ecommerce-product-page-main/src/assets/images/icon-previous.svg'
import iconNext from '/Users/poms/Documents/ecommerce-product-page-main/src/assets/images/icon-next.svg'

const ImageDisplay = () => {
  const [click, setClick]  = useState(false)

  function previousImage(){
    setClick(true)
    const peviousTab = e.target
    const tabTarget = document.querySelector('#')
  }
  function nextImage(){

  }
  


  return (
    <div className=''>
     <div className=''>
      <div className='relative -z-1 '>
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
      <div className='absolute -z-10 top-120 flex justify-between w-screen px-10'>
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