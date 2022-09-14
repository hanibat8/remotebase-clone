import React from 'react'
import Image from 'next/image'

const TestimonialsCard = ({content,name,position}) => {
  return (
    <div className='lg:w-1/3 shadow-md flex flex-col justify-between p-10 lg:h-[450px] rounded-3xl'>
        <p>
            {content}
        </p>
        <div className='flex h-20'>
            <div className='self-start'>
                <Image width={50} height={50} src='/testimonialImg.png'/>
            </div>
            <div className='ml-4 self-end'>
                <h4 className='font-semibold text-xl'>{name}</h4>
                <p>{position}</p>
            </div>
        </div>
    </div>
  )
}

export default TestimonialsCard