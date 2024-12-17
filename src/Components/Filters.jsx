import React, { useEffect } from 'react'
import { useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import axios from 'axios'
import Filters_sections from './Filters_sections'

const Sections=
[
  'Category','Brand','Price','Discount_Range','Rating'
]
export default function Filters({filtersSelected,setFiltersSelected}) {
    const [Filters,setFilters]=useState({
      Category:[],
      Brand:[],
      Price:
      [
        {
          id:'1',
          name:'Rs. 10 to Rs. 250',
          slug:'10to250',
          type:'radio'
        },
        {
          id:'2',
          name:'Rs. 250 to Rs. 500',
          slug:'250to500',
           type:'radio'
        },
        {
          id:'3',
          name:'Rs.500 to Rs. 1000',
          slug:'500to1000',
           type:'radio'
        },
        {
          id:'4',
          name:'Rs 1000 to Above',
          slug:'1000toAbove',
           type:'radio'
        }
    ],
    Discount_Range:
      [
        {
          id:'1',
          name:'5% and above',
          slug:'5toAbove',
          type:'radio'
        },
        {
          id:'2',
          name:'10% and above',
          slug:'10toAbove',
           type:'radio'
        },
        {
          id:'3',
          name:'15% and above',
          slug:'15toAbove',
           type:'radio'
        },
        {
          id:'4',
          name:'20% and above',
          slug:'20toAbove',
           type:'radio'
        }
    ],
    Rating:
    [
      {
        id:'1',
        name:'4* & above',
        slug:'4',
        type:'radio'
      },
      {
        id:'2',
        name:'3* & above',
        slug:'3',
         type:'radio'
      },
      {
        id:'3',
        name:'2* & above',
        slug:'2',
         type:'radio'
      },
      {
        id:'4',
        name:'1* & above',
        slug:'1',
         type:'radio'
      }
  ],
     
    })
    useEffect(()=>{
          axios.get('https://wscubetech.co/ecommerce-api/categories.php')
          .then((success)=>{
             
              setFilters((prevFilters)=>({
                ...prevFilters,Category:success.data.data
              }))
          })
          .catch((err)=>{
              console.log(err)
          })
        
        
        
    },[])

    useEffect(()=>{
    
        axios.get('https://wscubetech.co/ecommerce-api/brands.php')
        .then((success)=>{
           
            setFilters((prevFilters)=>({
              ...prevFilters,Brand:success.data.data 
            }))
        })
        .catch((err)=>{
            console.log(err)
        })
     
      
      
  },[])
    
  return (
 <>         
    {
      Sections.map((section,index)=>{
        return(
          <Filters_sections title={section} Section={Filters[section]} filtersSelected={filtersSelected} setFiltersSelected={setFiltersSelected} key={index}/>
        )
      })
    }       

  </>
  )
}
