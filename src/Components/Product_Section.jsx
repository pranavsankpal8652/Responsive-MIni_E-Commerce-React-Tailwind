import React, { useEffect, useState, useTransition } from 'react'
import Product_section_inner from './Product_section_inner'
import axios from 'axios'
import Page_Navigation from './Page_Navigation';

export default function Product_Section({sortingID,filtersSelected,setloading}) {
  // console.log(filtersSelected)
  if(sortingID!=='' || filtersSelected!==''){
   var categories= filtersSelected.Category.toString()
   var brands=filtersSelected.Brand.toString()
    var [Price_from,Price_to]=(filtersSelected.Price.split('to')).map(Number)
    var  [Discount_Price_from,Discount_Price_to]=(filtersSelected.Discount_Range.split('to')).map(Number)
    Price_to=isNaN(Price_to)?null:Price_to
    Discount_Price_to=isNaN(Discount_Price_to)?null:Discount_Price_to
  
    var Rating=parseInt(filtersSelected.Rating)
  }
 
  // console.log(typeof(Price_to),Price_to)

 var [products,setProducts]=useState([])
 var [mobiproducts,setMobiProducts]=useState([])
 const [currentPage, setCurrentPage] = useState(1); 
 var [pPage,setPpage]=useState()
 var [mobipPage,setmobiPpage]=useState() 
  useEffect(()=>{
     axios.get(`https://wscubetech.co/ecommerce-api/products.php`,{
      params:{
        page:currentPage,
        limit:'20',
        sorting:sortingID || '',
        categories:categories || '',
        brands:brands || '',
        price_from:Price_from || '',
        price_to:Price_to || '',
        discount_from:Discount_Price_from || '',
        disocunt_to:Discount_Price_to || '',
        rating:Rating || ''

     }})
     .then((success)=>{
      setloading(false)
       setProducts(success.data.data)
       setPpage(success.data.toal_pages)
       
      })
      .catch((err)=>{
          console.log(err)
      })
    
   
  },[sortingID,filtersSelected,currentPage])

  useEffect(()=>{
    axios.get(`https://wscubetech.co/ecommerce-api/products.php`,{
     params:{
      page:currentPage,
        limit:'5',
        sorting:sortingID || '',
        categories:categories || '',
        brands:brands || '',
        price_from:Price_from || '',
        price_to:Price_to || '',
        discount_from:Discount_Price_from || '',
        disocunt_to:Discount_Price_to || '',
        rating:Rating || ''

    }})
    .then((success)=>{
      setloading(false)
      setMobiProducts(success.data.data)
      setmobiPpage(success.data.toal_pages)


     })
     .catch((err)=>{
         console.log(err)
     })
   
  
 },[sortingID,filtersSelected,currentPage])
  return (
          <div className="bg-white p-5">
            <div className="mx-auto max-w-[100%]">
      
              <div className="mt-6 lg:grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 hidden ">
               
           

                {
                products.map((product) =>{
                  return(
                    <Product_section_inner product={product} key={product.id}/>

                  )
                }
                )
              }
               <div className="col-span-4">
                <Page_Navigation total_pages={pPage} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
               </div>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 lg:hidden">
                {
                mobiproducts.map((product) =>{
                  return(
                    <Product_section_inner product={product} key={product.id}/>

                  )
                }
                )
              }
               <div className="">
                <Page_Navigation total_pages={mobipPage} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
               </div>
              </div>
             

            </div>
          </div>
        )
      }
      
  
