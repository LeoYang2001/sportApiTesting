import React from 'react'
import { useState } from 'react'

const FilterBox = ({ifDisable, label, filterId, setFilterId}) => {
  return (
    <div className=' inputBox flex gap-2 border rounded-md'>
        <span  className=' text-nowrap p-2 pr-0  relative text-gray-500'>
          {label}: 
          {
            ifDisable && (
              <div className='lineThrough'></div>
            )
          }
        </span>
        <input  disabled={ifDisable} className='rounded-md w-full h-full outline-none p-2 bg-white' value={filterId} onChange={(e) => {
           setFilterId(e.target.value)
        }} type="text" placeholder={`Input ${label}`} />
    </div>
  )
}

export default FilterBox