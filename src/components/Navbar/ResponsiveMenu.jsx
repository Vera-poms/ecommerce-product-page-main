import React, {useState} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import iconClose from '../../../src/assets/images/icon-close.svg';

const ResponsiveMenu = ({open}) => {
  
  const [close, setClose] = useState(false)
  function closeMenu(){
     if(!close){
       const closed = document.querySelector('#menu')
       closed.classList.add('hidden')
       // closed.style.xAxes[-100]
       setClose(c => c === true)
     }
     
   }

  return (
    <AnimatePresence mode='wait'>
     {
      open && (
       <motion.div 
       initial={{opacity: 0, x: -100}}
       animate={{opacity: 1, x:0}}
       exit={{opacity: 0, x: -100}}
       transition={{duration: 0.3, ease: 'linear'}}
       className='bg-white fixed left-0 top-0 bottom-0 h-screen w-[65%] z-1 pt-12 pl-12'
       id='menu'>

         <div>
          <img className='w-12 h-12 cursor-pointer'
            src={iconClose} alt="icon-close"
            onClick={closeMenu}/>

           <div>
             <ul className='pt-22 font-semibold space-y-8 text-5xl'>
               <li className='cursor-pointer'>
                 Collections
               </li>
               <li className='cursor-pointer'>
                 Men
               </li>
               <li className='cursor-pointer'>
                 Women
               </li>
               <li className='cursor-pointer'>
                 About
               </li>
               <li className='cursor-pointer'>
                 Contact
               </li>
             </ul>
           </div>
         </div>
       </motion.div>
      ) 
      // :
      // <motion.div
      //  exit={{opacity: 0, x: -100}}
      //  >

      // </motion.div>
      
     }
    </AnimatePresence>
  )
}

export default ResponsiveMenu