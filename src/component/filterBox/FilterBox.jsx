import React from 'react'
import { useState } from 'react'

const FilterBox = ({ifDisable, label, filterId, setFilterId}) => {
  return (
    <div className=' inputBox flex gap-2 border rounded-md'>
        <span style={{textDecoration: ifDisable ? "line-through":""}} className=' text-nowrap p-2 pr-0  text-gray-500'>{label}: </span>
        <input  disabled={ifDisable} className='rounded-md w-full h-full outline-none p-2 bg-white' value={filterId} onChange={(e) => {
           setFilterId(e.target.value)
        }} type="text" placeholder={`Input ${label}`} />
    </div>
  )
}

export default FilterBox