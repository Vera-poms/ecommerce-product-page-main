import React, {useState} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import iconClose from '../../../src/assets/images/icon-close.svg';
import { images } from './images.js'
import ImageDisplay from './ImageDisplay.jsx'
import iconPrevious from '../../../src/assets/images/icon-previous.svg'
import iconNext from '../../../src/assets/images/icon-next.svg'




const LightBox = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex]  = useState(0)
  

  const lightBox = () => {
   setLightboxOpen(l => !l)
 }

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
    <div>
      <ImageDisplay lightBox={lightBox} lightboxOpen={lightboxOpen} className=''/>


      <AnimatePresence>
        {
          lightboxOpen && (
             <motion.div 
              className="max-lg:hidden lg:fixed lg:z-60 inset-0 lg:bg-black/70 lg:w-screen lg:h-screen"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1}}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}>
              <div className='h-full w-full flex flex-col items-center justify-start relative top-10'>
                <img className='w-4 h-4 cursor-pointer relative z-1 -right-40 top-9 filter invert brightness-0 hover:filter hover:invert hover:brightness-95 hover:saturate-[1200%] hover:sepia hover:hue-rotate-[5deg] hover:contrast-[100%] 2xl:-right-65 2xl:w-6 2xl:h-6'
                  src={iconClose} alt="icon-close" 
                  onClick={lightBox}
                  />

                  <div className='lg:flex lg:flex-col lg:overflow-hidden lg:justify-center lg:items-center lg:relative lg:top-3'>
                  <div className='relative flex content-center justify-center'>
                    <img 
                      key={currentIndex}
                      src={images[currentIndex]} 
                      alt={`Product ${currentIndex + 1}`}  
                      className='relative top-12 z-1 w-[36%] rounded-2xl cursor-pointer overflow-hidden 2xl:w-[56%]'
                      />
                        
                    <div className='absolute z-2 top-55  flex justify-between w-[40%] transform -translate-y-1/2 2xl:w-[62%] 2xl:top-75'>
                      <button className='bg-white rounded-[50%] px-[25px] py-[25px] hover:cursor-pointer lg:px-[16px] lg:py-[16px] 2xl:px-[22px] 2xl:py-[22px]'
                      onClick={previousImage}
                      >
                        <img className='h-[25px] w-[25px]  hover:filter hover:invert hover:brightness-[20%] hover:saturate-[700%] hover:sepia hover:hue-rotate-[34deg] hover:contrast-[30%] lg:w-[16px] lg:h-[16px] 2xl:w-[22px] 2xl:h-[22px]'
                         
                        src={iconPrevious} alt="" />
                      </button>
                      <button className='bg-white group rounded-[50%] px-[25px] py-[25px] hover:cursor-pointer lg:px-[16px] lg:py-[16px] 2xl:px-[22px] 2xl:py-[22px]'
                      onClick={nextImage}>
                        <img className='h-[25px] w-[25px] hover:filter hover:invert hover:brightness-[20%] hover:saturate-[700%] hover:sepia hover:hue-rotate-[34deg] hover:contrast-[30%] lg:w-[16px] lg:h-[16px] 2xl:w-[22px] 2xl:h-[22px]' 
                        src={iconNext} alt="" />
                      </button>
                    </div>
                  </div>
            
                  <div className='flex group mt-10 relative z-2'>
                    {
                      images.map((img, index) => {
                        return (
                          <div className='flex group mt-10 relative z-2'>
                            <img
                            key={index} 
                            src={img} 
                            alt={`Thumbnail ${index + 1}`} 
                            className={`w-15 h-15 2xl:w-22  2xl:h-22   ${index === 3 ? 'mr-0' : 'mr-5'} rounded-lg 2xl:rounded-xl overflow-hidden`}
                              />

                              <div key={index} className={`w-15 absolute inset-0 bg-white opacity-0 cursor-pointer transition-300  rounded-lg transition-opacity 2xl:w-22 2xl:rounded-xl
                              ${currentIndex === index ? 'border-3 border-orange opacity-80': 'border-transparent hover:opacity-50'}`}
                              onClick={() => setCurrentIndex(index)}></div>
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