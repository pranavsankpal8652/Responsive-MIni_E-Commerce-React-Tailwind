import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';
import React, { useState } from 'react';


export default function Page_Navigation({total_pages,currentPage,setCurrentPage}) {

 

    // console.log(currentPage,total_pages)
  return (
   <div>

      <ResponsivePagination
      current={currentPage}
      total={(total_pages)?total_pages:0}
      onPageChange={setCurrentPage}
    />
    </div>
  )
}
