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
    <div className='checkout font-kumbh p-5 lg:pl-15 lg:pb-15'>
     <div className='flex justify-between'>
      <h1 className='text-3xl font-bold md:text-4xl md:pt-10 lg:text-4xl lg:pt-10'>
        Order Summary
      </h1>

      <a href="/" className='text-orange cursor-pointer'>{'<'} Go back to main page</a>
     </div>

     <h4 className='text-xl font-bold md:text-2xl md:pt-6 lg:text-3xl lg:pt-3'>
        Fall Limited Edition Sneakers
     </h4>
     
     
     <div className='lg:flex lg:text-2xl lg:items-center lg:justify-between px-8 lg:px-10'>
      <div className='lg:w-full'>
        <HandleDeliveryOptions 
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        className=''/>

        <section className='pt-5 '>
          <h4 className='text-xl md:text-2xl'> Payment Methods</h4>

          <label 
          className='text-dark-grayish-blue text-lg md:text-xl'>
            Choose your payment option
          </label>
        
          <div className='lg:relative lg:z-50 lg:w-full lg:mt-4 '>
            <select type="text" 
            className='w-3/4 border border-grayish-blue rounded-lg p-3 cursor-pointer md:text-xl focus:ring-2'>
              <option>Mastercard / Visa Card</option>
              <option>Paypal</option>
              <option>Credit Card</option>
            </select>
          </div>
          
        </section>
      </div>

      <section className='py-10 md:text-2xl lg:w-3/4'>
        
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

        <div className='flex justify-between text-lg font-bold border-t border-grayish-blue md:text-3xl md:pt-2'>
          <p className=''>Order Total:</p>
          <p>
            ${orderTotal.toFixed(2)}
          </p>
        </div>

        <button className='bg-orange w-full py-4 rounded-lg font-bold text-lg hover:opacity-70 transition duration-300 cursor-pointer mt-8 md:text-3xl lg:text-2xl'
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