// 'useclient'
import React, {useState, forwardRef} from 'react'
import {motion, AnimatePresence, usePresenceData, wrap} from 'framer-motion'
import imgProduct1 from '../../../src/assets/images/image-product-1.jpg'
import imgProduct2 from '../../../src/assets/images/image-product-2.jpg'
import imgProduct3 from '../../../src/assets/images/image-product-3.jpg'
import imgProduct4 from '../../../src/assets/images/image-product-4.jpg'


const ImageSlides = () => {
  const images = [
   {
    id: 1,
    src: imgProduct1,
   },
   {
    id: 2,
    src: imgProduct2,
   },
   {
    id: 3,
    src: imgProduct3,
   },
   {
    id: 4,
    src: imgProduct4,
   },
  ]

  const [selectedImage, setSelectedImage] = useState(images[0])
  const [direction, setDirection] = useState<1 | -1>(1)
  
  const imageDisplay = `${selectedImage}`

  function setSlide(newDirection: 1 | -1){
   const nextImage = wrap(1, images.length, selectedImage + newDirection)
   setSelectedImage(nextImage)
   setDirection(newDirection)
  }

  const Slide = forwardRef(function Slide({imageDisplay} : {imageDisplay: string}),
  ref: React.Ref<HTMLDivElement>
 ){
  const direction  = usePresenceData()

  return(
   <motion.div
   ref={ref}
   initial={{opacity: 0, x: direction * 50}}
   animate={{
    opacity: 1, 
    x: 0,
    transition: {
     delay: 0.2,
     type: 'spring',
     visualDuration: 0.3,
     bounce: 0.4,
    }, }}
    exit={{opacity: 0, x: direction * -50}}>

   </motion.div>
  )
 }


  return (
   <>
    <div className='absolute z-0 top-120 flex justify-between w-screen px-10'>
       <button className='bg-white rounded-[50%] px-[35px] py-[35px] cursor-pointer'>
         <img onClick={() => setSlide(-1)}
         className='h-[30px] w-[30px]' 
         src={iconPrevious} alt="" />
       </button>
       <button className='bg-white rounded-[50%] px-[35px] py-[35px] cursor-pointer'>
         <img className='h-[30px] w-[30px]' 
         src={iconNext} alt="" />
       </button>
     </div>
     <AnimatePresence
     custom={direction}
     initial={false}
     mode='popLayout'>
      <Slide key={selectedImage}/>
     </AnimatePresence>
   </>
  )
}

export default ImageSlides