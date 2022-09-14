import React from 'react'
import AnimatedElement from '../AnimatedElement'

const GlobalSectionCards = ({title,content}) => {
  return (
    <AnimatedElement className='flex flex-col justify-center rounded-md
    shadow-sm hover:shadow-lg h-44 lg:w-48 bg-white-rgba'>
        <h4 className='text-5xl font-semibold self-center'>
        {title}
        </h4>
        <p className='self-center font-semibold mt-6'>
        {content}
        </p>
    </AnimatedElement>
  )
}

export default GlobalSectionCards

