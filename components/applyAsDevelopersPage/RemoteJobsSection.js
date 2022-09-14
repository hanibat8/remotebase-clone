import React from 'react'
import RemoteJobsCard from './RemoteJobsCard'
import Image from 'next/image'
import { LazyMotion, domAnimation } from "framer-motion"
import AnimatedElement from '../AnimatedElement'
import Button from '../Button'

const RemoteJobsSection = () => {
  return (           
    <section className=' mt-40 xl:px-48 lg:px-32 px-10'>
        <LazyMotion features={domAnimation}>
            <AnimatedElement>
                <h2 className=' xl:px-40 lg:px-28 px-10 text-center font-semibold text-3xl'>
                Explore Remote Developer Jobs
                </h2>
            </AnimatedElement>
            <AnimatedElement>
                <h3 className='xl:px-40 lg:px-28 mb-12 text-center text-lg mt-5 md:w-[75%] 
                                mx-auto px-10 leading-relaxed'>
                Explore and get your dream remote job right now
                </h3>
            </AnimatedElement>
            <AnimatedElement className='flex flex-col md:flex-row mt-16 md:gap-x-6 gap-y-3'>
                <RemoteJobsCard title='Full Stack Engineer'
                                contentP1='At least 2 years of experience'
                                contentP2='Skills in JavaScript, CSS and HTML'
                                contentP3='Proficiency in multiple programming languages'
                                contentP4='Excellent database skills'/>    
                <RemoteJobsCard title='React Native Developer'
                                contentP1='At least 2 years of experience'
                                contentP2='Skills in JavaScript, CSS and HTML'
                                contentP3='Proficiency in multiple programming languages'
                                contentP4='Excellent database skills'/>  
                <div className='p-8 border border-[#3615bd] rounded-2xl flex flex-col 
                                justify-center md:w-1/3'>
                    <h3 className='mb-4'>
                        Looking for the best remote developer jobs
                    </h3 >
                    <Button title='Hire developers' px='px-6' p='p-0' bg='bg-white' color='text-[#3615bd]' border='border-[#3615bd]'/>
                </div>
            </AnimatedElement>
        </LazyMotion>
    </section>
  )
}

export default RemoteJobsSection