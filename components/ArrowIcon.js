import React from 'react'

const ArrowIcon = ({color}) => {
  let colorClass=color??'#03c6fc';
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill={colorClass} viewBox="0 0 24 24" strokeWidth={1.5} stroke="#fff" className='w-8 h-8 '>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>

  )
}

export default ArrowIcon
