import React, { createContext, useState } from 'react'

const context=createContext()

export default function Context({children}) {

    var localData=JSON.parse(localStorage.getItem('cartItems'))??[]
    // console.log(localData)
    const [cartItems,setCartItems]=useState(localData)

     var data={cartItems,setCartItems}

  return (
  <context.Provider value={data}>
    {children}
  </context.Provider>
  )
}
export {context}
