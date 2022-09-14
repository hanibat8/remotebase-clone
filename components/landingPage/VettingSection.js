import React from 'react'
import Image from 'next/image'
import { LazyMotion, domAnimation } from "framer-motion"
import AnimatedElement from '../AnimatedElement'
import ArrowIcon from '../ArrowIcon'

const VettingSection = () => {
  return (
    <section className='mt-20 py-10 xl:px-40 lg:px-28 px-10  bg-[#f4f7ff]'>
          <LazyMotion features={domAnimation}>
                <AnimatedElement
                className='flex flex-col md:flex-row mt-20 h-full items-center'>
                    <div className='w-full xl:ml-16 xl:w-3/6'>
                        <Image  width={1150} height={950}  src='/vettingImg.png'/>
                    </div>
                    <div className='xl:w-[40%] w-full lg:ml-auto'>
                        <h4 className='text-3xl xl:text-4xl font-semibold leading-normal'>
                        Our Engineers Pass Through <span className='text-[#3c65fe]'>An Extensive Vetting</span> Process
                        </h4>
                        <p className='leading-normal my-6'>
                        More rigorous than Silicon Valley job interviews, we test for 100+ skills, data structures, 
                        algorithms, systems design, software specializations & frameworks.
                        </p>
                        <hr/>
                        <ul className='mt-8'>
                            <li className='flex mt-2 align-middle'>
                                <ArrowIcon/>
                                <p className='ml-2 self-center'>HR screening</p>
                            </li>
                            <li className='flex mt-2 align-middle'>
                                <ArrowIcon/>
                                <p className='ml-2 self-center'>5+ hours of tests and interviews</p>
                            </li>
                            <li className='flex mt-2 align-middle'>
                                <ArrowIcon/>
                                <p className='ml-2 self-center'>Seniority tests</p>
                            </li>
                            <li className='flex mt-2 align-middle'>
                                <ArrowIcon/>
                                <p className='ml-2 self-center'>Cultural fit check</p>
                            </li>
                        </ul>
                    </div>
                </AnimatedElement>
        </LazyMotion>
    </section>
  )
}

export default VettingSection