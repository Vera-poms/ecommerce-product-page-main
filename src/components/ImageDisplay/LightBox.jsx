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
              className="mobile:hidden minitablet:fixed minitablet:z-60 inset-0 minitablet:bg-black/70 minitablet:w-screen minitablet:h-screen"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1}}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}>
              <div className='h-full w-full flex flex-col items-center justify-start relative top-10'>
                <img className='w-4 h-4 cursor-pointer relative z-1 -right-40 top-9 filter invert brightness-0 hover:filter hover:invert hover:brightness-95 hover:saturate-[1200%] hover:sepia hover:hue-rotate-[5deg] hover:contrast-[100%] laptop:-right-65 laptop:w-6 laptop:h-6'
                  src={iconClose} alt="icon-close" 
                  onClick={lightBox}
                  />

                  <div className='minitablet:flex minitablet:flex-col minitablet:overflow-hidden minitablet:justify-center minitablet:items-center minitablet:relative minitablet:top-3'>
                  <div className='relative flex content-center justify-center'>
                    <img 
                      key={currentIndex}
                      src={images[currentIndex]} 
                      alt={`Product ${currentIndex + 1}`}  
                      className='relative top-12 z-1 w-[36%] rounded-2xl cursor-pointer overflow-hidden laptop:w-[56%]'
                      />
                        
                    <div className='absolute z-2 top-55  flex justify-between w-[40%] transform -translate-y-1/2 laptop:w-[62%] laptop:top-75'>
                      <button className='bg-white rounded-[50%] px-[25px] py-[25px] hover:cursor-pointer minitablet:px-[16px] minitablet:py-[16px] laptop:px-[22px] laptop:py-[22px]'
                      onClick={previousImage}
                      >
                        <img className='h-[25px] w-[25px]  hover:filter hover:invert hover:brightness-[20%] hover:saturate-[700%] hover:sepia hover:hue-rotate-[34deg] hover:contrast-[30%] minitablet:w-[16px] minitablet:h-[16px] laptop:w-[22px] laptop:h-[22px]'
                         
                        src={iconPrevious} alt="" />
                      </button>
                      <button className='bg-white group rounded-[50%] px-[25px] py-[25px] hover:cursor-pointer minitablet:px-[16px] minitablet:py-[16px] laptop:px-[22px] laptop:py-[22px]'
                      onClick={nextImage}>
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