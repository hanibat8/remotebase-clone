import React from 'react'
import Image from 'next/image'

const Traits = ({img,bgColor,content}) => {
  return (
    <div className='flex flex-col items-center'>
        <div className={` h-20 w-20 rounded-full flex justify-center align-middle ${bgColor}`}>
            <Image height={50} width={50} src={`${img}`}/>
        </div>
        <h4 className='mt-4 text-lg lg:w-5/6 text-center'>{content}</h4>
    </div>
  )
}

export default Traits