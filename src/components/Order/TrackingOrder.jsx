import React, {useState, useEffect} from 'react'
import HandleDeliveryOptions from '../Checkout/deliveryOptions'
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js'


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
  //  const percentageProgress = ((today - arrivalDate) / (arrivalDate - orderTime)) * 100


  return (
    <div className='pt-20 px-6 font-kumbh flex flex-col 2xl:px-14'>
     <h2 className='text-2xl font-bold md:text-3xl 2xl:text-4xl'>
      Thank you for shopping with us!
     </h2>

     <section className='md:text-2xl'> 
      <h3 className='pt-20 text-dark-grayish-blue'>Your order is being prepared to be shipped:</h3>

      <div className='rounded-lg h-[25px] w-full border my-6'>
        <div className='bg-orange/50 h-full w-1/16 rounded-lg'>
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
        <h1 className='text-xl md:text-3xl'>Your order arrives on:</h1>
        <p className='text-dark-grayish-blue md:text-xl'>{arrivalDate}</p>
        
      </section>
    ):(
      <p>Loading delivery date...</p>
    )}
     
      <div className='flex justify-between'>
        <a href="/" className='text-orange cursor-pointer'>{'<<'} Go back to main page</a>
        <a href="/checkout" className='text-dark-blue cursor-pointer'>{'<'} Checkout page</a>
      </div>
    </div>
  )
}

export default TrackingOrder