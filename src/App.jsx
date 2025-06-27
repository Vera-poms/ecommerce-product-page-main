import { useState, useEffect } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import {motion, AnimatePresence} from 'framer-motion'
import iconClose from './assets/images/icon-close.svg';
import Description from './components/Description/Description.jsx';
import LightBox from './components/ImageDisplay/LightBox.jsx';
import CartItems from './components/CartItems/CartItems.jsx';
import Checkout from './components/Checkout/Checkout.jsx';
import TrackingOrder from './components/Order/TrackingOrder.jsx';
import Attribution from './components/Attribution/Attribution.jsx'



function App({}) {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const [cartItems, setCartItems] = useState(() => {
    const stored = localStorage.getItem('cartItems')

    return stored ? JSON.parse(stored) : 0
  })

  const [confirmedCartItems, setConfirmedCartItems] = useState(() => {
    const stored = localStorage.getItem('confirmedCartItems')

    return stored ? JSON.parse(stored) : 0
  })

  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }, [cartItems])

  useEffect(() => {
    localStorage.setItem('confirmedCartItems', JSON.stringify(confirmedCartItems))
  }, [confirmedCartItems])

  const deletCartItem = () => {
    setConfirmedCartItems(0)
  }
  
  const cartToggle = () => {
    setIsCartOpen(i => !i)
  }
  
  const toggleMenu = () => {
    setIsMenuOpen(i => !i)
  }
  const increaseCartItems = () => {
    setCartItems(c => c + 1)
  }
  const decreaseCartItems = () => {
    setCartItems(c => c > 0 ? c-1 : 0)
  }
  const addedToCart = () => {
    if(cartItems >= 0){
      setConfirmedCartItems(cartItems)
    }
  }

  return (
   <Router>
    <Routes>
      <Route path='/' element={
         <div className='flex flex-col'>
          <div className={` w-full h-screen lg:flex lg:flex-col lg:items-center lg:content-center lg:w-screen lg:h-screen  ${isMenuOpen ? 'overflow-hidden' : ""} `}> 

          <div className=''>
            <Navbar isMenuOpen={isMenuOpen} 
            toggleMenu={toggleMenu} 
            cartItems={confirmedCartItems} 
            isCartOpen={isCartOpen} 
            cartToggle={cartToggle}/>


            <motion.div
            initial={{opacity: 0, x: -100}}
            animate={{opacity: 1, x:isMenuOpen ? 0 : '-100%'}}
            exit={{opacity: 0, x: -100}}
            transition={{duration: 0.2}}>
              <div className='bg-white fixed left-0 top-0 bottom-0 h-screen w-[65%] z-50 pt-8 pl-6 inset-0 '>
                <img className='w-8 h-8 md:w-10 md:h-10 cursor-pointer'
                  src={iconClose} alt="icon-close" 
                  onClick={toggleMenu}
                  />

                <div className=''>
                  <ul className='pt-8 font-semibold space-y-4 text-xl md:text-3xl md:space-y-6'>
                    <li className='cursor-pointer hover:text-orange'>
                      Collections
                    </li>
                    <li className='cursor-pointer hover:text-orange'>
                      Men
                    </li>
                    <li className='cursor-pointer hover:text-orange'>
                      Women
                    </li>
                    <li className='cursor-pointer hover:text-orange'>
                      About
                    </li>
                    <li className='cursor-pointer hover:text-orange'>
                      Contact
                    </li>
                  </ul>
                </div>
              </div>  
            </motion.div>

            <AnimatePresence mode='wait'>
              {
                isMenuOpen && (
                <motion.div 
                className="fixed inset-0 z-30 bg-black/60"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1}}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                >
                </motion.div>
                ) 
              }
            </AnimatePresence>
          </div>
          
          <div>
            <AnimatePresence mode='wait'>
              {isCartOpen &&
                <motion.div
                initial={{opacity: 0, y: -100}}
                animate={{opacity:1}}
                exit={{opacity:0}}
                transition={{duration: 0.5}}
                className='absolute inset-0 z-10 lg:relative lg:left-70 lg:z-70 lg:-top-32'>
                  <CartItems cartItems={cartItems} 
                  addedToCart={addedToCart} 
                  deletCartItem={deletCartItem}
                  confirmedCartItems={confirmedCartItems}/>
                </motion.div>
              }
            </AnimatePresence>
          </div>


          <div className='lg:flex lg:justify-center lg:items-center lg:relative lg:top-10 lg:w-3/4 lg:h-full bg-white 2xl:relative 2xl:top-12 2xl:bottom-0'>
            <LightBox />

            <Description 
            cartItems={cartItems} 
            increaseCartItems={increaseCartItems} 
            decreaseCartItems={decreaseCartItems}
            addedToCart={addedToCart}
            className=''/>
          </div>      
          </div>

          <Attribution />
        </div>
      }/>
      <Route path='/checkout' element={<Checkout cartItems={cartItems}/>}/>

      <Route path='/tracking' element={<TrackingOrder/>}/>
    </Routes>
   </Router>
  )
}

export default App
