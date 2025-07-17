import logo from '../../../src/assets/images/logo.svg';
import iconMenu from '../../../src/assets/images/icon-menu.svg';
import iconCart from '../../../src/assets/images/icon-cart.svg';
import imageAvatar from '../../assets/images/image-avatar.png';
import {NavbarMenu} from './data.js'


const Navbar = ({toggleMenu, cartItems, cartToggle}) => {
  return (
    <nav className='w-screen relative z-20 top-0 left-0 right-0'>
     <div className={`flex items-center w-screen justify-between h-[150px] px-10 py-0 fixed bg-white `}>
      <div className='flex items-center justify-center'
            >
        <div className='cursor-pointer tablet:hidden'
         onClick={toggleMenu}
         >
          <img
          className='w-10 h-10 icon-invert active:filter active:invert active:brightness-95 active:saturate-[1200%] active:sepia active:hue-rotate-[5deg]' 
          src={iconMenu} alt="icon-menu"
         />

        </div>

        <div className=''>
          <img className='h-12 ml-8'
          src={logo} alt="logo" />
        </div>

        <div className='hidden tablet:flex minitablet:pl-3 laptop:pl-8'>
          <ul className='text-[14px] flex row text-dark-grayish-blue cursor-pointer '>
            {
            NavbarMenu.map((item) => {
              return(
                <li key={item.id} className='relative'>
                  <a href={item.link} className='inline-block px-3   font-extralight font-kumbh  cursor-pointer '>
                    {item.title}
                  </a>
                  <div className='hover:ml-3 absolute hover:text-black inset-0 bg-transparent hover:border-b-3 hover:border-b-orange  hover:pb-[58px] transition duration-300 cursor-pointer hover:font-bold'></div>
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
        <img className='w-12 h-12 mr-6 tablet:mr-8  filter minitablet:hover:brightness-0 transition duration-300'
        src={iconCart} alt="" />
        <p className={`absolute -top-2 right-1 text-[16px] font-bold bg-orange rounded-3xl text-white px-[12px] minitablet:right-6 ${cartItems === 0 && 'hidden'}`}>{cartItems}</p>
        </div>

        <div className='relative '>
        <img 
        className='w-14 h-14 '
        src={imageAvatar} alt="" />

        <div className='inset-0 active:border active:border-orange active:w-14 active:h-14 active:rounded-4xl  minitablet:hover:bg-transparent minitablet:hover:w-14 minitablet:hover:h-14 absolute minitablet:hover:border hover:rounded-4xl minitablet:hover:border-orange  transition duration-100 cursor-pointer'></div>
        </div>
        
      </div>

     </div>
    </nav>

  )
}

export default Navbar