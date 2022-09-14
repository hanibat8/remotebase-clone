import React from 'react'
import Image from 'next/image'
import { LazyMotion, domAnimation } from "framer-motion"
import AnimatedElement from '../AnimatedElement'
import Button from '../Button'

const RealiseYourFutureSection = () => {
  return (
    <section className='mt-20 py-10 xl:px-40 lg:px-28 px-10  bg-[#f4f7ff]'>
          <LazyMotion features={domAnimation}>
                <AnimatedElement
                className='flex flex-col md:flex-row mt-20 h-full items-center'>
                    <div className='xl:mx-6 md:mx-0 xl:ml-32 ml-0 xl:w-[40%] md:px-0 px-12'>
                        <Image  width={400} height={500}  src='/value-img.png'/>
                    </div>
                    <div className='xl:w-[42%] w-full lg:ml-auto'>
                        <h4 className='text-3xl xl:text-5xl font-semibold leading-normal'>
                        Realise your future with us!
                        </h4>
                        <p className='leading-relaxed my-6 mb-10'>
                            Becoming part of Remotebase extends further than just a job. We, at the company, aim to make 
                            your time with us oriented towards your professional success just as much as your personal 
                            progress. We provide opportunities for you to create innovative solutions for real-life startups 
                            that help them accelerate their growth while enabling yours
                        </p>
                        <Button title='Apply Now' px='px-10' p='p-4' bg='bg-[#3615bd]' 
                                    color='text-white' border='border-none' hoverBg='bg-[#3013A9]'/> 
                    </div>
                </AnimatedElement>
        </LazyMotion>
    </section>
  )
}

export default RealiseYourFutureSection