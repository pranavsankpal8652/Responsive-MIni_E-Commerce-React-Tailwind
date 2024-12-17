import React, { useState } from 'react'
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
export default function Filters_sections({title,Section,filtersSelected,setFiltersSelected}) {

  const getSelectedFilters=(event,filterschecked,type)=>{
    // console.log(event.target)
   var filters={...filtersSelected}
   if(event.target.checked){
    if(type=='radio'){
      filters[title]=filterschecked

    }
    else{
      // console.log(title)
     
      filters[title]=[...filters[title],filterschecked]
      setFiltersSelected(filters)
    }

   }
   else {
    filters[title] = filters[title].filter((value) => value !== filterschecked );
  }

  // Update the state with the modified filters
  setFiltersSelected(filters);
    
  }
  return (
    <Disclosure as="div" className="border-t border-gray-200 px-4 py-6 relative ">
    <h3 className="-mx-2 -my-3 flow-root">
      <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
        <span className="font-medium text-gray-900">{title}</span>
        <span className="ml-6 flex items-center">
          <PlusIcon aria-hidden="true" className="size-5 group-data-[open]:hidden" />
          <MinusIcon aria-hidden="true" className="size-5 [.group:not([data-open])_&]:hidden" />
        </span>
      </DisclosureButton>
    </h3>
    <DisclosurePanel className="pt-6">
      <div className="space-y-6">
        {Section.map((option, optionIdx) => (
          <div key={option.id} className="flex gap-3">
            <div className="flex h-5 shrink-0 items-center">
              <div className="group grid size-4 grid-cols-1">
                <input
                  onChange={(event)=>getSelectedFilters(event,option.slug,option.type)}
                  id={`${option.id}-${title}`}
                  name= 'filter'
                  type={(option.type)?option.type:'checkbox'}
                  className="col-start-1 row-start-1  rounded border border-gray-300 bg-white"
                />
               
              </div>
            </div>
            <label
              htmlFor={`${option.id}-${title}`} 
              className="min-w-0 flex-1 text-gray-700"
            >
              {option.name}
            </label>
          </div>
        ))}
      </div>
    </DisclosurePanel>
  </Disclosure>
  )
}
