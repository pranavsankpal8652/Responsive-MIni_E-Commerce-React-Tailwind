import React, { useContext } from 'react'
import { context } from './Context'
import { toast } from 'react-toastify'

export default function Cart_Items({imgsrc,item_name,brand,qty,price,id}) {

    const {cartItems,setCartItems}=useContext(context)
    const removeItem=(id)=>{
      var cart=[...cartItems]
      if(confirm('Are you Sure to delete the Item'))
        {
        var updatedCart= cart.filter(item=>item.id!=id)
        updatedCart=[...updatedCart]
        setCartItems(updatedCart)
        localStorage.setItem('cartItems',JSON.stringify(updatedCart))
        toast.info('Item Deleted!')
     }
     
    }
  return (
    <>
            <div className='max-w-[150px] border-[0.5px] border-[#ccc] p-[10px] my-auto col-start-1 '>
                  <img src={imgsrc} className='w-[100%]'></img>
            </div>
            <div className='col-span-2 '>
                <div className="text-[17px] font-[500] ">{item_name}</div>
                <div className="text-[14px] text-gray-500">{brand}</div>
                <div className="text-[13px] text-gray-500 py-[20px]">Qty {qty}</div>
            </div>
            <div className='flex justify-between flex-col'>
                <div className='font-bold text-[18px]'>{price}</div>
                <div className='text-[blue] text-[17px] cursor-pointer mt-[20px] ' onClick={()=>{removeItem(id)}}>Remove</div>
            </div>
    </>
  )
}
