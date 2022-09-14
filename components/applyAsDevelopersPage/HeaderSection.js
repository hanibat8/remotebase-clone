import React from 'react'
import Image from 'next/image'
import Button from '../Button'

import { LazyMotion, domAnimation, m } from "framer-motion"
import AnimatedElement from '../AnimatedElement'

const HeaderSection = () => {

  return (
    <div className='xl:px-36 lg:px-28 px-10'>
        <section className=' mt-14 mx-7 '>
            <div className='w-full md:w-[55%] md:mx-auto pt-12  '>
                <h1 className='xl:text-7xl text-center lg:text-5xl text-4xl font-bold tracking-wider'>
                    Work remotely with <span className='text-[#3c65fe]'>Silicon Valley </span>
                     startups and more...
                </h1>
            </div>
            <div className='flex flex-col md:flex-row md:justify-between md:gap-x-4'>
                <div className='w-full order-2 md:order-1 mt-10 md:mt-0 md:px-0 px-12'>
                    <Image className='ml-10' width={450} height={600}  src={'/headerImg.png'}/>   
                </div>
                <div className='order-1 md:order-2 text-center'>
                    <p className='my-8 text-lg md:text-base '>
                        Remotebase hires the top 1% of software engineers and places them in the most innovative companies globally. Work with some of the most innovative companies in the world from the comfort of your home.
                    </p>
                    <LazyMotion features={domAnimation}>
                        <AnimatedElement>
                            <Button title='Apply Now' px='px-10' p='p-4' bg='bg-[#3615bd]' 
                                    color='text-white' border='border-none' hoverBg='bg-[#3013A9]'/>   
                        </AnimatedElement>
                    </LazyMotion>
                </div>
                <div className='w-full order-last md:px-0 px-12'>
                    <Image className='ml-10' width={450} height={600}  src={'/hero-img-male.svg'}/>   
                </div>
            </div>
        </section>
    </div>
  )
}

export default HeaderSection