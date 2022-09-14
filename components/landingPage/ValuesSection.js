import React from 'react'
import Image from 'next/image'
import { LazyMotion, domAnimation } from "framer-motion"
import AnimatedElement from '../AnimatedElement'
import ValuesSectionCard from './ValuesSectionCard'

const ValuesSection = () => {
  return (
    <section className='mt-20 py-10 lg:py-20 xl:px-40 lg:px-28 px-10 bg-[#fff2eed9]'>
          <LazyMotion features={domAnimation}>
                <AnimatedElement
                className='flex flex-col md:flex-row mt-20 h-full items-center'>
                    <div className='w-4/6 md:ml-16 md:mr-4 md:w-3/6'>
                        <Image  width={480} height={550}  src='/imageWomanRemoteBase.png'/>
                    </div>
                    <div className='md:w-[44%] w-full '>
                        <h4 className='text-3xl xl:text-4xl font-semibold leading-normal'>
                        You manage the tech. We manage everything else.
                        </h4>
                        <p className='leading-normal my-6'>
                        We find, hire and train the top tech talent in the world, so you don’t have to. Your team is all set up and ready for you on day 1.
                        </p>
                        <div className='mt-8 flex flex-col lg:flex-row xl:gap-12 gap-8'>
                          <ValuesSectionCard title='Sourcing' point1='Recruitment' 
                                        point2='Onboarding' point3='Reviews'/>
                          <ValuesSectionCard title='Training' point1='Coaching' 
                                        point2='Courses' point3='Seminars'/>
                          <ValuesSectionCard title='HR' point1='Contracts' 
                                        point2='Payroll' point3='Workspaces'/>
                        </div>
                    </div>
                </AnimatedElement>
        </LazyMotion>
    </section>
  )
}

export default ValuesSection