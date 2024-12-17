import React, { useContext, useEffect, useState } from 'react'
import { context } from './Context'
import Cart_Items from './Cart_items'

export default function Cart({displayCanvas,toggleOffcanvas,setDisplayCanvas}) {

    // console.log("cart "+displayCanva/s)
    const {cartItems}=useContext(context)
    const [subTotal,setSubTotal]=useState(0)
    useEffect(()=>{
        let cart=[...cartItems]
        var total=0
        cart.map((item)=>{
           total+= item.price*item.qty
        })
        setSubTotal(total)
    },[cartItems])
    
    const hideCanvasviabg=(event)=>{
        if(event.target.id=='offCanvasbg')
        {
           {
               setDisplayCanvas(false)
           }
       }
      
   }
   const hideOffcanvas=()=>{
    
           setDisplayCanvas(false)
      
  
}
  return (
    <>
    <div className={`w-[100%] ${displayCanvas?'bg-[rgba(0,0,0,0.6)]':'bg-[rgba(0,0,0,0)]'}  fixed h-screen top-0 left-0  duration-[0.5s] ${displayCanvas?'z-[999]':'z-[-10]'}`} onClick={hideCanvasviabg} id='offCanvasbg'>
     <div className={`lg:w-[30%] w-[100%] bg-white absolute ${displayCanvas?'lg:right-0':'lg:right-[-40%]'}  top-0 duration-[1s] h-screen border-2 border-gray-200 shadow-xl flex justify-between flex-col  `} >
        <div className="grid grid-cols-3 gap-[20px] p-[20px]  items-center overflow-y-scroll">
            <h2 className='text-[23px] mb-[5px] font-bold col-span-2 sticky top-0 z-10 bg-white '>Shopping cart</h2>
            <div className="text-[25px] col-start-5 cursor-pointer sticky top-0 z-10 bg-white " onClick={hideOffcanvas}> &#10005;</div>

            {
                cartItems.map((v,i)=>{
                    return(
                        <React.Fragment key={i}>
                        <Cart_Items imgsrc={v.image} item_name={v.name} brand={v.brand} qty={v.qty} price={v.price} id={v.id}/>

                        {i<cartItems.length-1
                            &&  <hr className='w-[100%] border-5 border-gray-300 col-span-3 my-[10px]' ></hr>
                            

                        
                        }
                        </React.Fragment>
                    )
                    
                })
            }
           

          
        </div>
       
            <div className='p-[20px] grid grid-cols-2'>
                <hr className='w-[100%] border-5 border-gray-300  col-span-2 my-[20px]' ></hr>
                <div className='text-[19px] font-[600]'>Subtotal</div>
                <div className='text-[18px] font-[600] justify-self-end'>${subTotal}</div>
                <div className='text-[15px] font-[300]' >Shipping and taxes calculated at checkout.</div>
                <button className='bg-indigo-600 p-[8px_20px] text-white text-[19px] col-start-1 col-span-2 rounded-[10px] my-[20px]'>Checkout</button>
                <div className='col-span-2 justify-self-center'>
                    <span>or</span>
                    <a href='#' onClick={toggleOffcanvas}  className='text-[15px] text-indigo-600 font-semibold mx-[5px]'>Continue Shopping →</a>

                </div>
            </div>
    </div>
</div>
</>
  )
}
