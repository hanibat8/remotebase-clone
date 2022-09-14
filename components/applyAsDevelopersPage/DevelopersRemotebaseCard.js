import React from 'react'

const DevelopersRemotebaseCard = ({devName,title,content}) => {
  return (
    <div className='p-6 xlg:p-8 xlg:px-11 lg:px-8  border hover:border-[#fff] hover:bg-white hover:shadow-md transition-all border-[#3615bd] rounded-2xl lg:h-[550px]'>
        <div >
            <h4 className='text-[#3615bd] text-sm'>{devName}</h4>
            <h2 className='text-lg font-semibold'>{title}</h2>
        </div>

        <p className='mt-6 text-[15px] xl:leading-loose mb-4'>
            {content}
        </p>
    </div>
  )
}

export default DevelopersRemotebaseCard