import React from 'react'
import DevelopersRemotebaseCard from './DevelopersRemotebaseCard'

import { LazyMotion, domAnimation, m } from "framer-motion"
import AnimatedElement from '../AnimatedElement'

const DevelopersRemotebase = () => {
  return (
    <section className=' bg-sky-50 mt-40 xl:px-48 lg:px-32 px-10 py-24'>
    <LazyMotion features={domAnimation}>
        <AnimatedElement>
            <h2 className=' font-semibold text-3xl lg:text-4xl'>
            Developers <span className='text-red-500'>♥</span> remotebase
            </h2>
        </AnimatedElement>
        <AnimatedElement>
            <h3 className='mb-12 text-lg mt-5 lg:w-[60%] 
                            leading-relaxed'>
            Read remotebase.com reviews from developers across the world and learn what it’s like working with top Silicon Valley firms.
            </h3>
        </AnimatedElement>
        <AnimatedElement className='flex flex-col lg:flex-row mt-16 align-middle xl:gap-x-12 lg:gap-x-10 md:gap-x-8  gap-y-3'>
            <DevelopersRemotebaseCard title='Python Developer'
                            devName='LUTF'
                            content='Its been five years since I joined Remotebase. I started off as 
                                    a junior mobile application developer, and today, Remotebase has 
                                    nourished me into a person who the company could trust with 
                                    anything at any time. I am happy that I am still working with 
                                    people who embrace me and my skills and treat me like a family 
                                    from day one.'/>    
            <DevelopersRemotebaseCard title='React Developer'
                            devName='LUTF'
                            content='Its been five years since I joined Remotebase. I started off as a junior 
                            mobile application developer, and today, Remotebase has nourished me into a person
                             who the company could trust with anything at any time. I am happy that I am still 
                             working with people who embrace me and my skills and treat me like a family from day 
                             one.'/>
            <DevelopersRemotebaseCard title='Full Stack Developer'
                            devName='LUTF'
                            content='Its been five years since I joined Remotebase. I started off as a 
                            junior mobile application developer, and today, Remotebase has nourished me 
                            into a person who the company could trust with anything at any time. I am 
                            happy that I am still working with people who embrace me and my skills and 
                            treat me like a family from day one.'/>  
        </AnimatedElement>
    </LazyMotion>
</section>
  )
}

export default DevelopersRemotebase