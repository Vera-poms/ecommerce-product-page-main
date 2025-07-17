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
import Test  from './components/Test/Test.jsx'



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
         <div className='h-screen w-screen'>
          <div className={`w-screen h-screen   ${isMenuOpen ? 'overflow-hidden' : ""} `}> 

          <div className=''>
            <Navbar isMenuOpen={isMenuOpen} 
            toggleMenu={toggleMenu} 
            cartItems={confirmedCartItems} 
            isCartOpen={isCartOpen} 
            cartToggle={cartToggle}/>


            <motion.div
            initial={{opacity: 0, x: 100}}
            animate={{opacity: 1, x:isMenuOpen ? 0 : '-100%'}}
            exit={{opacity: 0, x: -100}}
            transition={{duration: 0.1}}>
              <div className='bg-white fixed left-0 top-0 bottom-0 h-screen w-[65%] z-50 pt-12 pl-10 inset-0 '>
                <img className='w-10 h-10 cursor-pointer active:filter active:invert active:brightness-95 active:saturate-[1200%] active:sepia active:hue-rotate-[5deg]'
                  src={iconClose} alt="icon-close" 
                  onClick={toggleMenu}
                  />

                <div className=''>
                  <ul className='pt-10 font-semibold space-y-8 text-5xl '>
                    <li className='links'>
                      <a href='#Collections'>Collections</a>
                    </li>
                    <li className='links'>
                      <a href='#Men'>Men</a>
                    </li>
                    <li className='links'>
                      <a href='#Women'>Women</a>
                    </li>
                    <li className='links'>
                      <a href='#About'>About</a>
                    </li>
                    <li className='links'>
                      <a href='#Contact'>Contact</a>
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
                className='relative z-10'>
                  <CartItems cartItems={cartItems} 
                  addedToCart={addedToCart} 
                  deletCartItem={deletCartItem}
                  confirmedCartItems={confirmedCartItems}/>
                </motion.div>
              }
            </AnimatePresence>
          </div>


          <div className=''>
            <LightBox />

            <Description 
            cartItems={cartItems} 
            increaseCartItems={increaseCartItems} 
            decreaseCartItems={decreaseCartItems}
            addedToCart={addedToCart}
            className=''/>
          </div>      
          </div>

          {/* <Attribution /> */}
        </div>
      }/>
      <Route path='/checkout' element={<Checkout cartItems={cartItems}/>}/>

      <Route path='/tracking' element={<TrackingOrder/>}/>

      {/* <Test/> */}
    </Routes>
   </Router>
  )
}

export default App
