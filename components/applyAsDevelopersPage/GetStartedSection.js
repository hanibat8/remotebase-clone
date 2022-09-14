import React from 'react'
import Traits from './Traits'

import { LazyMotion, domAnimation } from "framer-motion"
import AnimatedElement from '../AnimatedElement'
import GetStartedCard from './GetStartedCard'

const GetStartedSection = () => {
  return (
    <section className=' mt-40 xl:px-48 lg:px-32 px-10'>
    <LazyMotion features={domAnimation}>
        <AnimatedElement>
            <h2 className=' xl:px-40 lg:px-28 px-10 text-center font-semibold text-3xl'>
            How to get started?
            </h2>
        </AnimatedElement>
        <AnimatedElement>
            <h3 className='xl:px-40 lg:px-28 mb-12 text-center text-lg mt-5 md:w-[75%] 
                            mx-auto px-10 leading-relaxed'>
            Just following 4 easy step below to get started

            </h3>
        </AnimatedElement>
        <AnimatedElement className='flex flex-col lg:flex-row mt-16 
                                    lg:gap-x-10 gap-y-6'>
            <GetStartedCard img={'/process-1.png'} 
                            bg='bg-sky-50' num='1' numBg='bg-sky-400' title='Sign up' content='Sign up on our portal, 
                            add your Resume and fill out your work experience.'/>
            <GetStartedCard img={'/process-2.png'}
                            bg='bg-orange-50' num='2' numBg='bg-orange-400' title='Take test' 
                            content='Complete the Remotebase automated tests to move on to
                             the next round. The tests are based on the skill sets you apply for.'/>
            <GetStartedCard img='/process-3.png'
                            bg='bg-purple-50' num='3' numBg='bg-purple-400' title='Live Interview'
                            content='Take the first and last live technical interview with senior 
                            Engineer.'/>
            <GetStartedCard img='/process-4.png'
                            bg='bg-yellow-50' num='4' numBg='bg-yellow-400' title='Offer Placement'
                            content='Receive a call from the HR department and get the offer from Remotebase. Discuss the
                             perks, and your point of contact in the HR department will help asnwer any questions you have.'/>
        </AnimatedElement>
    </LazyMotion>
</section>
  )
}

export default GetStartedSection