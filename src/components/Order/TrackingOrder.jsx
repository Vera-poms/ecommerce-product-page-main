import React, {useState, useEffect} from 'react'
import HandleDeliveryOptions from '../Checkout/deliveryOptions'
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js'
import { useNavigate } from 'react-router-dom'



const TrackingOrder = () => {
  const [selectedOption, setSelectedOption] = useState(null)
  const [arrivalDate, setArrivalDate] = useState('')

  useEffect(() => {
    const storedOption = JSON.parse(localStorage.getItem('selectedDeliveryOption'))

    if (storedOption){
      setSelectedOption(storedOption)
      setArrivalDate(calculateDeliveryDate(storedOption))
    }
  }, [])

  const navigate = useNavigate()
  
  function isWeekend(dates){
  let dayOfWeek = dates.format('dddd')

  return dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday'
 }

  function calculateDeliveryDate(deliveryOption){
    let deliveryDate = dayjs()
    let remainingDays = deliveryOption.deliveryDays
  
    while(remainingDays > 0){
     deliveryDate = deliveryDate.add(1, 'day')
  
     if(!isWeekend(deliveryDate)){
     remainingDays--;
     }
    }
  
    return deliveryDate.format('dddd, MMMM D')
   }

   const today = dayjs()
   const storedOption = JSON.parse(localStorage.getItem('selectedDeliveryOption'))
   const orderTime = dayjs(storedOption.orderTime)



  return (
    <div className='py-20 px-6 font-kumbh flex flex-col laptop:px-14'>
      <h1 className='text-5xl font-bold'>Track Your Order</h1>
     <h2 className='text-2xl font-semibold mobile:text-3xl laptop:text-4xl pt-10'>
      Thank you for shopping with us!
     </h2>

     <section className='mobile:text-2xl'> 
      <h3 className='text-dark-grayish-blue text-2xl pt-5'>Your order is being prepared to be shipped:</h3>

      <div className='rounded-lg h-[25px] w-3/4 border my-6'>
        <div className='bg-orange/70 h-full w-1/16 rounded-s-lg'>
        </div>

        <div className='flex justify-between text-dark-grayish-blue'>
          <label>Preparing</label>
          <label>Shipped</label>
          <label>Delivered</label>
        </div>
      </div>
     </section>

    {selectedOption ?( 
     <section className='py-10 '>
        <h1 className='text-xl mobile:text-3xl'>Your order arrives on:</h1>
        <p className='text-dark-grayish-blue text-2xl font-medium pl-10'>{arrivalDate}</p>
        
      </section>
    ):(
      <p>Loading delivery date...</p>
    )}
     
      <div className='flex justify-between '>
        <a href="/checkout" className='text-dark-blue cursor-pointer active:text-dark-blue/50'
        onClick={() => navigate('/checkout')}>{'<'} Checkout page</a>

        <a href="/" className='text-orange cursor-pointer active:text-orange/50 hover:text-orange/70'>{'<<'} Go back to main page</a>
        
      </div>
    </div>
  )
}

export default TrackingOrder