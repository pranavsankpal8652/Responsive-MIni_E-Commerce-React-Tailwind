import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Product_section_inner from './Product_section_inner'

export default function Home_sections({title,discount}) {
    const [section,setSection]=useState([])
    // console.log(title,discount,category)
    useEffect(()=>{
        axios.get('https://wscubetech.co/ecommerce-api/products.php',{
            params:{
                limit:5,
                page:7,
                discount_from:discount || '',
                discount_to:'',
            }
        })
        .then((success)=>{
            console.log(success.data.data)
            setSection(success.data.data)
        })
    },[])
  return (
        <div className="bg-white p-10">
               <div className="mx-auto max-w-[100%]">
                <div className='text-4xl font-bold'>
                    {title}
                </div>
                 <div className="mt-6 flex lg:flex-row justify-center flex-col gap-5  flex-wrap">
   
                   {
                   section.map((product) =>{
                     return(
                       <Product_section_inner product={product} addcart={false} key={product.id}  />
   
                     )
                   }
                   )
                 }
                  
                 </div>
            </div>
        </div>
  )
}
