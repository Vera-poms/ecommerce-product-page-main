import React, {useState} from 'react'
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js'



function HandleDeliveryOptions({selectedOption, setSelectedOption, arrival, setArrival}) {

 const [deliveryOptions, setDeliveryOptions] = useState([{
  id: 1,
  deliveryDays: 7,
  priceCents: 0,
 },
{
  id: 2,
  deliveryDays: 3,
  priceCents: 499,
 },{
  id: 3,
  deliveryDays: 1,
  priceCents: 999,
 }])

 const isChecked = (optionId) => {
  return selectedOption?.id ===  optionId
  
 }

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

  return (
    <div>
     <h2 className='flex relative cursor-pointer text-lg pb-2 mobile:text-2xl'>
      Delivery Options 
    </h2>
     {
      deliveryOptions.map(deliveryOption => {
       const dateString = calculateDeliveryDate(deliveryOption)

       const priceString = deliveryOption.priceCents === 0 ? 'FREE' : `$${(deliveryOption.priceCents / 100).toFixed(2)} `


       return(
        <div key={deliveryOption.id} 
        className={`shadow-xl rounded-lg p-5 mb-3 cursor-pointer mobile:w-full mobile:text-2xl mobile:rounded-xl  lg:text-lg lg:w-3/4 border border-grayish-blue ${isChecked(deliveryOption.id) ? 'bg-orange text-light-grayish-blue' : 'bg-white'}  transition transition-300 hover:bg-orange/50 hover:text-black`}>
         
         <label className='cursor-pointer '>

         <p>Arrives by {dateString}</p>
         <div className='flex justify-between '>
          <p>{priceString} </p>

          <input type="radio"
          name='deliveryOption'
          value={deliveryOption.id}
          checked={isChecked(deliveryOption.id)}
          onChange={() => setSelectedOption(deliveryOption)} 
          className='cursor-pointer'/>
         </div>
         </label>
        </div>
       )
        

      })
     }
    </div>
  )
}

export default HandleDeliveryOptions