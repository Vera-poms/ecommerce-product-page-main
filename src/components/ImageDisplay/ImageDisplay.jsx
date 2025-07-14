import React, {useState} from 'react'
import iconPrevious from '../../../src/assets/images/icon-previous.svg'
import iconNext from '../../../src/assets/images/icon-next.svg'
import { images } from './images.js'
import {motion, AnimatePresence} from 'framer-motion'


import CartItems from '../CartItems/CartItems.jsx'
const ImageDisplay = ({lightBox, isCartOpen}) => {
  const [currentIndex, setCurrentIndex]  = useState(0)
  const [direction, setDirection] = useState(0)
  

  function previousImage(){
    setDirection(-1)
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1  : prevIndex - 1
    )
  }
  function nextImage(){
    setDirection(1)
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const imageVariants = {
   initial: {opacity: 0, x: direction > 0 ? 300: -300},
   animate: {opacity: 1, x: 0},
   exit: {opacity: 0, x: direction < 0 ? 300: -300},
   transition: {duration: 0.1},
  }
  
  
  return (
    <div className=' '>
     <div className='relative top-15 z-0 mb-25 lg:hidden'>

      <div className='relative h-[360px] w-full overflow-hidden md:h-[650px]'>
       <AnimatePresence mode='wait' initial='false' custom={direction}>
         <motion.img 
          key={currentIndex}
          initial='initial'
          animate='animate'
          exit='exit'
          variants={imageVariants}
          src={images[currentIndex]} 
          alt={`Product ${currentIndex + 1}`} 
          className='absolute inset-0 h-full w-full object-cover' />
       </AnimatePresence>
      </div>

      <div className='absolute z-0 top-1/2 flex justify-between w-screen px-3 transform -translate-y-1/2'>
        <button className='bg-white rounded-[50%] px-[15px] py-[15px] md:px-[30px] md:py-[30px]'
        onClick={previousImage}>
          <img className='h-[15px] w-[15px] md:h-[30px] md:w-[30px]' 
          src={iconPrevious} alt="" />
        </button>
        <button className='bg-white rounded-[50%] px-[15px] py-[15px] hover:cursor-pointer md:px-[30px] md:py-[30px]'
        onClick={nextImage}>
          <img className='h-[15px] w-[15px] md:h-[30px] md:w-[30px]' 
          src={iconNext} alt="" />
        </button>
      </div>

      <AnimatePresence>
        {isCartOpen &&
          <motion.div
          initial={{opacity: 0, y: -100}}
          animate={{opacity:1}}
          exit={{opacity:0}}>
            <CartItems/>
          </motion.div>
        }
      </AnimatePresence>

     </div>

     <div className='hidden lg:flex lg:flex-col lg:item-center lg:mr-0 lg:overflow-hidden'>
      <div>
        <img 
          key={currentIndex}
          src={images[currentIndex]} 
          alt={`Product ${currentIndex + 1}`}  
          className='w-3/4 rounded-2xl cursor-pointer overflow-hidden 2xl:w-5/6'
          onClick={lightBox}/>
      </div>

      <div className='flex mt-10'>
        {
          images.map((img, index) => {
            return (
              <div className='relative'>
                <img
                key={index} 
                src={img} 
                alt={`Thumbnail ${index + 1}`} 
                className={`w-14 h-14 mr-7 rounded-lg xl:w-18 2xl:w-21 xl:h-18 2xl:h-21
                   overflow-hidden flex items-center justify-center`}
                 />

                  <div className={`inset-0 absolute bg-white rounded-lg w-14 xl:w-18 2xl:w-21 hover:opacity-50 transition duration-300
                    ${currentIndex === index ? 'border-3 border-orange opacity-70': 'border-transparent opacity-0'} cursor-pointer`}
                     onClick={() => setCurrentIndex(index)}></div>
              </div>
            )
          })
        }
        
        
      </div>
     </div>
    </div>
  )
}

export default ImageDisplay