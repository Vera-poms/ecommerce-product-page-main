import React, {useState} from 'react'
import iconPrevious from '../../../src/assets/images/icon-previous.svg'
import iconNext from '../../../src/assets/images/icon-next.svg'
import {wrap} from 'popmotion'
import { images } from './images.js'
import {motion, AnimatePresence} from 'framer-motion'
import CartItems from '../CartItems/CartItems.jsx'


const ImageDisplay = ({lightBox, isCartOpen}) => {
  const [[currentIndex, direction], setCurrentIndex]  = useState([0, 0])
  const imageIndex = wrap(0, images.length, currentIndex)
  

  const paginate = (newDirection) => {
    setCurrentIndex([currentIndex + newDirection, newDirection])
  }

  const imageVariants = {
   initial: (direction) => {
    return {
      x: direction > 0 ? 1000: -1000,
      opacity: 0,
    };
   },
   animate: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      type: 'spring',
      visualDuration: 0.3,
      bounce: 0.5,
    }
    
   },
   exit: (direction) => {
    return{
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
   }
  }

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity
  }
  
  
  return (
    <div className=''>
     <div className='relative top-15 z-0 mb-25 tablet:hidden h-[1000px]'>

      <div className='relative h-full w-screen overflow-hidden bg-none '>
       <AnimatePresence mode='popLayout' initial={false} custom={direction} propagate>
         <motion.img 
          key={currentIndex}
          custom={direction}
          initial='initial'
          animate='animate'
          exit='exit'
          variants={imageVariants}
          transition={{
            x: {type: 'spring', stiffness: 400, damping: 40},
            opacity: {duration: 0.1}
          }}
          drag='x'
          dragConstraints={{left: 0, right: 0}}
          dragElastic={1}
          onDragEnd={(e, {offset, velocity}) => {
            const swipe = swipePower(offset.x, velocity.x)

            if(swipe < -swipeConfidenceThreshold){
              paginate(1)
            }else if(swipe > swipeConfidenceThreshold){[
              paginate(-1)
            ]}
          }}
          src={images[imageIndex]} 
          alt={`Product ${currentIndex + 1}`} 
          className='w-full h-full object-cover'
           />
       </AnimatePresence>
      </div>

      <div className='absolute z-0 top-1/2 flex justify-between w-screen px-8 transform -translate-y-1/2'>
        <button className='bg-white rounded-[50%] px-[35px] py-[35px] active:bg-grayish-blue'
        onClick={() => paginate(-1)}>
          <img className='h-[35px] w-[35px] active:filter active:invert active:brightness-95 active:saturate-[1200%] active:sepia active:hue-rotate-[5deg]' 
          src={iconPrevious} alt="" />
        </button>
        <button className='bg-white rounded-[50%] px-[35px] py-[35px] active:bg-grayish-blue'
        onClick={() => paginate(1)}>
          <img className='h-[35px] w-[35px] active:filter active:invert active:brightness-95 active:saturate-[1200%] active:sepia active:hue-rotate-[5deg]' 
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

     <div className='hidden tablet:flex tablet:flex-col tablet:item-center tablet:mr-0 tablet:overflow-hidden'>
      <div>
        <img 
          key={currentIndex}
          src={images[imageIndex]} 
          alt={`Product ${currentIndex + 1}`}  
          className='w-3/4 rounded-2xl cursor-pointer overflow-hidden laptop:w-5/6'
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
                className={`w-14 h-14 mr-7 rounded-lg tablet:w-18 laptop:w-21 tablet:h-18 laptop:h-21
                   overflow-hidden flex items-center justify-center`}
                 />

                  <div className={`inset-0 absolute bg-white rounded-lg w-14 tablet:w-18 laptop:w-21 hover:opacity-50 transition duration-300
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