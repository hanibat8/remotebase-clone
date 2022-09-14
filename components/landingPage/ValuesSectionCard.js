import React from 'react'
import AnimatedElement from '../AnimatedElement'
import ArrowIcon from '../ArrowIcon'

const ValuesSectionCard = ({title,point1,point2,point3}) => {
  return (
    <AnimatedElement>
        <h2 className='font-semibold text-2xl'>{title}</h2>
        <ul className='mt-8'>
            <li className='flex mt-2 align-middle'>
                <ArrowIcon/>
                <p className='ml-2 self-center'>{point1}</p>
            </li>
            <li className='flex mt-2 align-middle'>
                <ArrowIcon/>
                <p className='ml-2 self-center'>{point2}</p>
            </li>
            <li className='flex mt-2 align-middle'>
                <ArrowIcon/>
                <p className='ml-2 self-center'>{point3}</p>
            </li>
        </ul>
    </AnimatedElement>
  )
}

export default ValuesSectionCard