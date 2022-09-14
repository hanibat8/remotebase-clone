import React from 'react'
import Image from 'next/image'
import Navbar from './Navbar'
import Button from '../Button'

import { LazyMotion, domAnimation } from "framer-motion"
import AnimatedElement from '../AnimatedElement'

const HeaderSection = () => {

  return (
    <div className='xl:px-40 lg:px-28 px-10'>
        <Navbar/>
        <section className='flex flex-col mt-14 md:flex-row mx-7 justify-between'>
            <div className='w-full md:w-3/5 flex flex-col pt-12 order-last md:order-1'>
                <h1 className='xl:text-6xl lg:text-5xl text-4xl font-bold tracking-wider '>
                    Hire <span className='text-[#3c65fe]'>Top 1%</span>
                    <br/>Remote Developers <br/>Within 24 Hours
                </h1>
                <p className='my-8 md:w-3/4 text-lg md:text-base'>
                    Get rigorously vetted remote developer teams that best match your timezone and work model. 
                    Save your hiring time and budget with Remotebase.
                </p>
                <LazyMotion features={domAnimation}>
                    <AnimatedElement>
                    <Button title='Hire Developers' px='px-10' p='p-4' bg='bg-[#3615bd]' 
                    color='text-white' border='border-none' hoverBg='bg-[#3013A9]'/>  
                        <p className='mt-4'>Looking for jobs instead? <span className=' font-bold text-[#3c64fe]'>Apply for Jobs</span></p> 
                    </AnimatedElement>
                </LazyMotion>
            </div>
            <div className=' md:w-2/5 order-1 md:order-last w-3/5 '>
            <Image className='ml-10' width={450} height={600}  src={'/headerImg.png'}/>   
            </div>

        </section>
    </div>
  )
}

export default HeaderSection