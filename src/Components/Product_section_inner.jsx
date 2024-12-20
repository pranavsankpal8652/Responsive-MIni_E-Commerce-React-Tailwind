import React, { useContext } from 'react'
import { Link } from 'react-router'
import { context } from './Context'
import { toast } from 'react-toastify'

export default function Product_section_inner({product,addcart}) {
  var {cartItems,setCartItems}=useContext(context)

  const addTOCart=(Product)=>{

    let checkarr=[...cartItems]
   var isDuplicate= checkarr.filter(arr=>arr.id===Product.id)
  //  console.log("isDuplicate"+isDuplicate)
    if(isDuplicate.length==0){
      var Product_data={
        id:Product.id,
        name:Product.name,
        brand:Product.brand_name,
        image:Product.image,
        price:Product.price,
        qty:1
      }
  
      let cartItem=[Product_data,...cartItems]
      setCartItems(cartItem)
      localStorage.setItem('cartItems',JSON.stringify(cartItem))
      toast.success('Product Added To Cart Successfully!')
    }
    else{
      let oldarr=[...cartItems]
      var  Updatedcart=oldarr.map((prod,index)=>{
        if(prod.id==Product.id){
          prod.qty++
          return  prod
        }
        else{
          return prod
        }
       
      })
      // console.log(Updatedcart)
      var cartUpdated=[...Updatedcart]
      setCartItems(cartUpdated)
      localStorage.setItem('cartItems',JSON.stringify(cartUpdated))
      toast.success('Product Updated To Cart Successfully!')

    }


   
  }
  return (
    <>
      <div  className="group relative basis-[20%] shadow-xl">

  <img
    src={product.image}
    className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
  />
  <div className="mt-4 flex justify-between">
    <div>
      <h3 className="text-sm text-gray-700 cursor-pointer">
        <Link to={`/product_details/${product.id}`} >
          {product.name}
        </Link>
      </h3>
      <p className="mt-1 text-sm text-gray-500">{product.category_name}</p>
    </div>
    <div className={`m-1 ${addcart?'':'hidden'}`}>
      <button className='cursor-pointer bg-gradient-to-br from-blue-400 via-transparent to-gray-400 p-2 rounded-lg hover:bg-red-100 font-semibold ' onClick={()=>{addTOCart(product)}} >Add To Cart</button>
    </div>
    <p className={`text-sm font-medium text-gray-900 ${addcart?'':'hidden'}`}>${product.price}</p>


  </div>
    </div>
    </>
    
  )
}
