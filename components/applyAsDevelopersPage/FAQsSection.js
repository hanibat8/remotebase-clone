import React from 'react'
import Image from 'next/image'
import { LazyMotion, domAnimation } from "framer-motion"
import AnimatedElement from '../AnimatedElement'
import Button from '../Button'
import Accordian from './Accordian'

const FAQsSection = () => {
  return (
    <section className='mt-20 pb-20 py-10 xl:px-40 lg:px-28 px-10  bg-[#f4f7ff]'>
          <LazyMotion features={domAnimation}>
                <AnimatedElement
                className=' mt-20'>
                    <div className=''>
                        <h4 className='text-3xl xl:text-5xl font-semibold leading-normal mb-10'>
                        FAQs
                        </h4>
                        <Accordian/>
                    </div>
                </AnimatedElement>
        </LazyMotion>
    </section>
  )
}

export default FAQsSection