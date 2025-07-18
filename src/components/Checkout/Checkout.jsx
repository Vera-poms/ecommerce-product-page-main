import React, {useState, useEffect} from 'react'
import HandleDeliveryOptions from './deliveryOptions'
import { useNavigate } from 'react-router-dom'


const Checkout = () => {

  const navigate = useNavigate()

  const [cartItems] = useState(() => {
    const stored = localStorage.getItem('cartItems')

    return stored ? JSON.parse(stored) : 0
  })

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }, [cartItems])

  const [selectedOption, setSelectedOption] = useState({
    id: 1,
    deliveryDays: 7,
    priceCents: 0,
  })

  const priceString = selectedOption.priceCents === 0 ?  `$${(0/ 100).toFixed(2)}`: `$${(selectedOption.priceCents / 100).toFixed(2)} `

  const unitPrice = cartItems * 125
  const priceBeforeTax = (unitPrice * 100) + selectedOption.priceCents
  const totalBeforeTax = (priceBeforeTax / 100)
  const taxCents = priceBeforeTax * 0.1
  const priceTaxed =  (taxCents / 100)
  const orderTotal = Number(totalBeforeTax.toFixed(2)) + Number(priceTaxed.toFixed(2))
  console.log(orderTotal)

  return (
    <div className='checkout font-kumbh px-10 pt-20 pb-20'>
     <div className='flex justify-between'>
      <h1 className='text-7xl font-bold '>
        Order Summary
      </h1>

      <a href="/" className='text-orange cursor-pointer text-2xl pt-2 pr-3 hover:text-orange/70 active:text-orange/90'>{'<'} Go back to main page</a>
     </div>

     <h4 className='text-5xl font-bold pt-6'>
        Fall Limited Edition Sneakers
     </h4>
     
     
     <div className='tablet:flex text-2xl items-center justify-between'>
      <div className='w-full'>
        <HandleDeliveryOptions 
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        className=''/>

        <section className='pt-8 '>
          <h4 className='text-2xl font-semibold'> Payment Methods</h4>

          <label 
          className='text-dark-grayish-blue text-minitablet mobile:text-xl'>
            Choose your payment option
          </label>
        
          <div className='minitablet:relative minitablet:z-50 minitablet:w-full minitablet:mt-4 '>
            <select type="text" 
            className='w-3/4 border border-grayish-blue rounded-lg py-3 pl-2 pr-4 cursor-pointer mobile:text-xl focus:ring-2'>
              <option>Mastercard / Visa Card</option>
              <option>Paypal</option>
              <option>Credit Card</option>
            </select>
          </div>
          
        </section>
      </div>

      <section className='py-10 tablet:w-3/4'>
        
        <div className='flex justify-between'>
        <p>Item({cartItems}):</p>
        <p>${`${unitPrice}.00`}</p>
        </div>

        <div className='flex justify-between'>
        <p>Shipping & Handling:</p>
        <p>{priceString}</p>
        </div>

        <div className='flex justify-between'>
          <p>Total before tax:</p>
          <p>${`${totalBeforeTax.toFixed(2)}`}</p>
        </div>

        <div className='flex justify-between'>
          <p>Estimated tax (10%):</p>
          <p>
            ${`${(priceTaxed).toFixed(2)}`}
          </p>
        </div>

        <div className='flex justify-between text-3xl font-bold border-t border-grayish-blue'>
          <p className=''>Order Total:</p>
          <p>
            ${orderTotal.toFixed(2)}
          </p>
        </div>

        <button className='bg-orange w-full py-4 rounded-lg font-bold text-lg hover:opacity-70 active:opacity-70 transition duration-300 cursor-pointer mt-8 mobile:text-3xl minitablet:text-2xl'
          onClick={() => {
            localStorage.setItem('selectedDeliveryOption', JSON.stringify(selectedOption))
            navigate('/tracking')}}>
          Place your order
        </button>
      </section>
     </div>


     
    </div>
  )
}

export default Checkout