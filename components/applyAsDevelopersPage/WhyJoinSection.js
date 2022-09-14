import React from 'react'
import ArrowIcon from '../ArrowIcon'

import { LazyMotion, domAnimation, m } from "framer-motion"
import AnimatedElement from '../AnimatedElement'

const WhyJoinSection = () => {
  return (
    <section className='mt-40 xl:px-48 lg:px-32 px-10'>
        <LazyMotion features={domAnimation}>
        <AnimatedElement>
            <h2 className=' xl:px-40 lg:px-28 px-10 text-center font-semibold text-4xl'>
                Why join Remotebase?
            </h2>
        </AnimatedElement>
        <AnimatedElement>
            <h3 className='xl:px-40 lg:px-28  mb-10 text-center text-lg mt-5 md:w-2/3 mx-auto px-10 leading-relaxed'>
                Remotebase offers best for the best.
            </h3>
        </AnimatedElement>
        <AnimatedElement className='flex flex-col md:flex-row md:justify-between'>
            <ul className='mt-8 flex-1'>
                <li className='flex mt-2 align-middle mb-6'>
                    <ArrowIcon/>
                    <p className='ml-2 self-center'>Work directly with global startups</p>
                </li>
                <li className='flex mt-2 align-middle mb-6'>
                    <ArrowIcon/>
                    <p className='ml-2 self-center'>Mentored by leading engineers</p>
                </li>
                <li className='flex mt-2 align-middle mb-6'>
                    <ArrowIcon/>
                    <p className='ml-2 self-center'>Work on your own time</p>
                </li>
            </ul>
            <ul className='md:mt-8 flex-1'>
                <li className='flex mt-2 align-middle mb-6'>
                    <ArrowIcon/>
                    <p className='ml-2 self-center'>Upto 40% above market salaries</p>
                </li>
                <li className='flex mt-2 align-middle mb-6'>
                    <ArrowIcon/>
                    <p className='ml-2 self-center'>Insurance for you and your parents</p>
                </li>
                <li className='flex mt-2 align-middle mb-6'>
                    <ArrowIcon/>
                    <p className='ml-2 self-center'>Fully remote with office optional</p>
                </li>
            </ul>
            <ul className='md:mt-8 flex-1'>
                <li className='flex mt-2 align-middle mb-6'>
                    <ArrowIcon/>
                    <p className='ml-2 self-center'>Bi-annual increments</p>
                </li>
                <li className='flex mt-2 align-middle mb-6'>
                    <ArrowIcon/>
                    <p className='ml-2 self-center'>Insane learning and growth</p>
                </li>
                <li className='flex mt-2 align-middle mb-6'>
                    <ArrowIcon/>
                    <p className='ml-2 self-center'>Bi-annual company retreats</p>
                </li>
            </ul>
        </AnimatedElement>
        </LazyMotion>
    </section>
  )
}

export default WhyJoinSection