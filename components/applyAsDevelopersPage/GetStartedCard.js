import React from 'react'
import Image from 'next/image'

const GetStartedCard = ({img,bg,num,numBg,title,content}) => {
  return (
    <div className=' rounded-3xl flex-1 overflow-hidden shadow-md lg:h-[380px] h-128'>
        <div className={`relative w-full lg:h-[40%] h-28 ${bg}`}>
            <Image  layout="fill"
        objectFit="contain"
        objectPosition='right'
        quality={100} src={img}/>
        <span className={` ${numBg} w-10 h-10 flex align-middle justify-center`}>{num}</span>
        </div>
        <div className='p-5 mb-8'>
            <h3 className='font-semibold mb-6'>{title}</h3>
            <p className='text-sm mb-6'>
            {content}
            </p>
        </div>
    </div>
  )
}

export default GetStartedCard