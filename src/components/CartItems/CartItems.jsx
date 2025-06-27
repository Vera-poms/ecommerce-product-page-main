import React, { useState, useEffect} from 'react'

// export const CartContext = createContext()


export default function HandleCartItems({initialValue = 0}){

 const [cartItems, setCartItems] = useState(initialValue)

 // useEffect(() => {
 //     // let total = 0
 //     setCartItems()
 //   }, [cartItems])

 function totalPrice(){
  const unitPrice = 150
  setCartItems(c => 
   c === 0 ? 
   `150.00` 
   : unitPrice * cartItems)
 }
 function addToCart(){
  setCartItems(c => c + 1) 
  console.log(cartItems)
 }

 

 return { cartItems, addToCart, totalPrice}
}

export function handleNumberOfItems({initialValue = 0}){
 const [numberOfItems, setNumberOfItems] = useState(initialValue)


 function increaseItems(){
  setNumberOfItems(n => n + 1) 
 }
  function decreaseItems(){
  setNumberOfItems(n => 
   n > 0 ? n - 1 : 0 
  ) 
 }

 return {numberOfItems, increaseItems, decreaseItems}
}
  
