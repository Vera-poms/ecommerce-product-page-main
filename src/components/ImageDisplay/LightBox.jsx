import React, {useState} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import iconClose from '../../../src/assets/images/icon-close.svg';
import { images } from './images.js'
import {wrap} from 'popmotion'
import ImageDisplay, {imageVariants, swipeConfidenceThreshold, swipePower} from './ImageDisplay.jsx'
import iconPrevious from '../../../src/assets/images/icon-previous.svg'
import iconNext from '../../../src/assets/images/icon-next.svg'


const LightBox = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [[currentIndex, direction], setCurrentIndex]  = useState([0, 0])
  const imageIndex = wrap(0, images.length, currentIndex)
  

  const lightBox = () => {
   setLightboxOpen(l => !l)
 }

 const paginate = (newDirection) => {
    setCurrentIndex([currentIndex + newDirection, newDirection])
  }

const goToIndex = (index) => {
    const direction = index > currentIndex ? 1 : -1
    setCurrentIndex([index, direction])
  }

//  function previousImage(){
//      setCurrentIndex((prevIndex) => 
//        prevIndex === 0 ? images.length - 1  : prevIndex - 1
//      )
//    }
//    function nextImage(){
//      setCurrentIndex((prevIndex) => 
//        prevIndex === images.length - 1 ? 0 : prevIndex + 1
//      )
//    }

  return (
    <div>
      <ImageDisplay lightBox={lightBox} lightboxOpen={lightboxOpen} className=''/>


      <AnimatePresence>
        {
          lightboxOpen && (
             <motion.div 
              className="max-tablet:hidden tablet:fixed tablet:z-60 inset-0 tablet:bg-black/70 tablet:w-screen tablet:h-screen"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1}}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}>
              <div className='h-full w-full flex flex-col items-center justify-start relative top-10'>
                <img className='w-4 h-4 cursor-pointer relative z-1 -right-40 top-9 filter invert brightness-0 hover:filter hover:invert hover:brightness-95 hover:saturate-[1200%] hover:sepia hover:hue-rotate-[5deg] hover:contrast-[100%] laptop:-right-65 laptop:w-6 laptop:h-6'
                  src={iconClose} alt="icon-close" 
                  onClick={lightBox}
                  />

                  <div className='tablet:flex tablet:flex-col tablet:overflow-hidden tablet:justify-center tablet:items-center tablet:relative tablet:top-3'>
                  <div className='relative flex content-center justify-center'>
                    <AnimatePresence mode='popLayout' initial={false} custom={direction} propagate>
                      <motion.img 
                      key={currentIndex}
                      custom={direction}
                      initial='initial'
                      animate='animate'
                      exit='exit'
                      variants={imageVariants}
                      transition={{
                        x: {type: 'spring', stiffness: 200, damping: 30},
                        opacity: {duration: 0.1}
                      }}
                      drag='x'
                      dragConstraints={{ left: -100, right: 100 }}
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
                      className='relative top-12 z-1 w-[36%] rounded-2xl cursor-pointer overflow-hidden laptop:w-[56%]'
                      />
                    </AnimatePresence>
                        
                    <div className='absolute z-2 top-55  flex justify-between w-[40%] transform -translate-y-1/2 laptop:w-[62%] laptop:top-75'>
                      <button className='bg-white rounded-[50%] px-[25px] py-[25px] hover:cursor-pointer minitablet:px-[16px] tablet:py-[16px] laptop:px-[22px] laptop:py-[22px]'
                      onClick={() => paginate(-1)}
                      >
                        <img className='h-[25px] w-[25px]  hover:filter hover:invert hover:brightness-[20%] hover:saturate-[700%] hover:sepia hover:hue-rotate-[34deg] hover:contrast-[30%] minitablet:w-[16px] minitablet:h-[16px] laptop:w-[22px] laptop:h-[22px]'
                         
                        src={iconPrevious} alt="" />
                      </button>
                      <button className='bg-white group rounded-[50%] px-[25px] py-[25px] hover:cursor-pointer tablet:px-[16px] minitablet:py-[16px] laptop:px-[22px] laptop:py-[22px]'
                      onClick={() => paginate(1)}>
                        <img className='h-[25px] w-[25px] hover:filter hover:invert hover:brightness-[20%] hover:saturate-[700%] hover:sepia hover:hue-rotate-[34deg] hover:contrast-[30%] minitablet:w-[16px] minitablet:h-[16px] laptop:w-[22px] laptop:h-[22px]' 
                        src={iconNext} alt="" />
                      </button>
                    </div>
                  </div>
            
                  <div className='flex group mt-10 relative z-2'>
                    {
                      images.map((img, index) => {
                        return (
                          <div className='flex group mt-10 relative z-2' key={index} >
                            <img
                            
                            src={img} 
                            alt={`Thumbnail ${index + 1}`} 
                            className={`w-15 h-15 laptop:w-22  laptop:h-22   ${index === 3 ? 'mr-0' : 'mr-5'} rounded-lg laptop:rounded-xl overflow-hidden`}
                              />

                              <div key={index} className={`w-15 absolute inset-0 bg-white opacity-0 cursor-pointer transition-300  rounded-lg transition-opacity laptop:w-22 laptop:rounded-xl
                              ${imageIndex === index ? 'border-3 border-orange opacity-80': 'border-transparent hover:opacity-50'}`}
                              onClick={() => goToIndex(index)}></div>
                          </div>
                        )
                      })
                    }
                    
                    
                  </div>
                  </div>
              </div>
             </motion.div>

              
          )
        }
      </AnimatePresence>
      
    </div>
  )
}

export default LightBox