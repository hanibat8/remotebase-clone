import React from 'react'
import Image from 'next/image'
import { LazyMotion, domAnimation } from "framer-motion"
import AnimatedElement from '../AnimatedElement'

const TechStacksSection = () => {
  return (
    <section className='mt-40 h-96 '>
        <LazyMotion features={domAnimation}>
        <AnimatedElement>
            <h2 className=' xl:px-40 lg:px-28 px-10 text-center font-semibold text-4xl'>
            <span className='text-[#3c65fe]'>Tech Stacks</span> We Hire For
            </h2>
        </AnimatedElement>
        <AnimatedElement>
            <h3 className='xl:px-40 lg:px-28  mb-10 text-center text-xl mt-5 md:w-2/3 mx-auto px-10 leading-relaxed'>
                At Remotebase, we hire for a wide range of tech stacks. 
                We’re sure we can find the right fit for you!
            </h3>
        </AnimatedElement>
        <AnimatedElement className='w-full h-full relative '>
            <Image layout='fill'
                objectFit='contain' src='/techStackImg.png'/>
        </AnimatedElement>
        </LazyMotion>
    </section>
  )
}

export default TechStacksSection