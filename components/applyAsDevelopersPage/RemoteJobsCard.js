import React from 'react'
import Image from 'next/image'

const RemoteJobsCard = ({title,contentP1,contentP2,contentP3,contentP4}) => {
  return (
    <div className='lg:p-10 md:p-5 p-10 border border-[#3615bd] rounded-2xl md:w-2/3 md:h-[450px]'>
        <div className='flex'>
            <div className='bg-[#D3CFE2] h-12 w-12 flex align-middle justify-center rounded-full'>
                <Image width={30} height={30} src='/briefcase.svg'/>
            </div>
            <div className='ml-6'>
                <h4 className='text-[#3615bd] text-sm'>FULL-TIME REMOTE JOB</h4>
                <h2 className='lg:text-2xl md:text-xl text-lg font-medium '>{title}</h2>
            </div>
        </div>
            <p className='mt-6'>
                Work as a full-time remote {title} for global startups.
            </p>

            <div className='mt-10'>
                <p>Requirements</p>
                    <div className='list-disc'>
                        <p>
                           {contentP1}
                        </p>
                        <p>
                            {contentP2}
                        </p>
                        <p>
                            {contentP3}
                        </p>
                        <p>
                            {contentP4}
                        </p>
                    </div>
            </div> 
            <button className='my-10 border p-1 px-2 rounded-sm text-xs text-sky-400 border-[#3615bd]'>Apply Now</button>
        </div>
  )
}

export default RemoteJobsCard