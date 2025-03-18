import React, {useState, useEffect} from 'react'
import imgProduct1 from '../../../src/assets/images/image-product-1.jpg'
import imgProduct2 from '../../../src/assets/images/image-product-2.jpg'
import imgProduct3 from '../../../src/assets/images/image-product-3.jpg'
import imgProduct4 from '../../../src/assets/images/image-product-4.jpg'
import iconPrevious from '../../../src/assets/images/icon-previous.svg'
import iconNext from '../../../src/assets/images/icon-next.svg'

const ImageDisplay = () => {
  const [currentIndex, setCurrentIndex]  = useState(0)

  let images = [
    //  {
    //   id: 1,
    //   src: imgProduct1,
    //  },
    //  {
    //   id: 2,
    //   src: imgProduct2,
    //  },
    //  {
    //   id: 3,
    //   src: imgProduct3,
    //  },
    //  {
    //   id: 4,
    //   src: imgProduct4,
    //  },
    imgProduct1,
    imgProduct2,
    imgProduct3,
    imgProduct4
    ]

  function previousImage(){
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1  : prevIndex - 1
    )
  }
  function nextImage(){
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }
  
  
  return (
    <div className='relative top-15  mb-25'>
     <div className=''>
      <div className=''>
        <img id='product1'
        src={images[currentIndex]} alt="" className='' />
      </div>
      <div className='absolute z-0 top-110 flex justify-between w-screen px-10'>
        <button className='bg-white rounded-[50%] px-[35px] py-[35px]'
        onClick={previousImage}>
          <img className='h-[30px] w-[30px]' 
          src={iconPrevious} alt="" />
        </button>
        <button className='bg-white rounded-[50%] px-[35px] py-[35px] hover:cursor-pointer'
        onClick={nextImage}>
          <img className='h-[30px] w-[30px]' 
          src={iconNext} alt="" />
        </button>
      </div>
     </div>
    </div>
  )
}

export default ImageDisplay