import React from 'react'
import Image from 'next/image'

const LookingForSkillsCard = ({img,title}) => {
  return (
    <div className='p-6'>
        <div className='bg-[#A2DFFC] rounded-full h-12 w-12 flex align-middle justify-center mb-2'>
            <Image fill src={img} height={30} width={30}/>
        </div>
        <h4 className=' font-medium text-2xl my-4'>{title}</h4>
        <p>We are Looking for expert {title} developers to join our team.</p>
    </div>
  )
}

export default LookingForSkillsCard