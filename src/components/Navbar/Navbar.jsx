import logo from '../../../src/assets/images/logo.svg';
import iconMenu from '../../../src/assets/images/icon-menu.svg';
import iconCart from '../../../src/assets/images/icon-cart.svg';
import imageAvatar from '../../assets/images/image-avatar.png';
import {NavbarMenu} from './data.js'


const Navbar = ({toggleMenu, cartItems, cartToggle}) => {
  return (
    <nav className='lg:w-screen lg:flex lg:justify-center lg:items-center lg:px-40'>
     <div className={`flex px-6 pt-0 pb-0 w-screen justify-between h-[90px] fixed z-20 bg-white shadow-lg content-center lg:top-0 lg:w-5/6 lg:h-[100px] lg:border-b lg:border-dark-grayish-blue/60 lg:z-60 lg:shadow-none lg:px-0`}>
      <div className='flex items-center justify-center'
            >
        <div className='cursor-pointer lg:hidden'
         onClick={toggleMenu}
         >
          <img
          className='w-5 h-5 md:w-10 md:h-8' 
          src={iconMenu} alt="icon-menu"
         />

        </div>

        <div className=''>
          <img className='h-6 ml-4 md:h-8 lg:h-6 lg:ml-2'
          src={logo} alt="logo" />
        </div>

        <div className='hidden lg:flex lg:pl-3 2xl:pl-8'>
          <ul className='text-[14px] flex row text-dark-grayish-blue cursor-pointer '>
            {
            NavbarMenu.map((item) => {
              return(
                <li key={item.id} className='relative'>
                  <a href={item.link} className='inline-block px-3   font-extralight font-kumbh  cursor-pointer'>
                    {item.title}
                  </a>
                  <div className='hover:ml-3 absolute hover:text-black inset-0 bg-transparent hover:border-b-3 hover:border-b-orange hover:pb-[58px] transition duration-300 cursor-pointer '></div>
                </li> 
              )
            })
            }
          </ul>
        </div>
      </div>

      <div className='flex items-center'>
        <div className='relative cursor-pointer'
        onClick={cartToggle}>
        <img className='w-6 h-6 mr-2 md:w-8 md:h-8 lg:w-6 lg:h-6 lg:mr-8  filter lg:hover:brightness-0 transition duration-300'
        src={iconCart} alt="" />
        <p className={`absolute -top-1 right-1 text-[10px] font-bold bg-orange rounded-3xl text-white px-[5px] lg:right-6 ${cartItems === 0 && 'hidden'}`}>{cartItems}</p>
        </div>

        <div className='relative '>
        <img 
        className='w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 '
        src={imageAvatar} alt="" />

        <div className='inset-0 lg:hover:bg-transparent lg:hover:w-12 lg:hover:h-12 absolute lg:hover:border hover:rounded-3xl lg:hover:border-orange transition duration-100 cursor-pointer'></div>
        </div>
        
      </div>

     </div>
    </nav>

  )
}

export default Navbar