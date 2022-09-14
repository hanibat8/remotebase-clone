import React from 'react'
import Image from 'next/image'
import { LazyMotion, domAnimation } from "framer-motion"
import AnimatedElement from '../AnimatedElement'
import GlobalSectionCards from './GlobalSectionCards'
import Button from '../Button'

const GlobalSection = () => {
  return (
    <section className='mt-80 py-16 bg-white bg-global-section-bg bg-center bg-no-repeat'>
        <LazyMotion features={domAnimation}>
            <AnimatedElement>
                <h2 className=' xl:px-40 lg:px-28 px-10 text-center font-semibold text-4xl'>
                    We are <span className='text-[#3c65fe]'>Global</span>
                </h2>
            </AnimatedElement>
            <AnimatedElement>
                <h3 className=' mb-10 xl:px-40 lg:px-28 px-10 text-center text-xl mt-5 lg:w-2/3 mx-auto leading-relaxed'>
                Hire senior pre-vetted remote developers with strong technical 
                and communication skills at unbeatable prices, ready to work in your timezone.
                </h3>
            </AnimatedElement>
            <AnimatedElement className='flex flex-col flex-1 lg:flex-row justify-center lg:px-40 px-20 gap-7'>
                <GlobalSectionCards title='5K +' content='Engineers'/>
                <GlobalSectionCards title='30 +' content='Cities'/>
                <GlobalSectionCards title='6 +' content='Countries'/>
                <GlobalSectionCards title='20 +' content='Technologies'/>
                <GlobalSectionCards title='50 +' content='Customers'/>
            </AnimatedElement>
            <AnimatedElement className='flex justify-center mt-12'>
                <Button title='Hire Developers' px='px-10' p='p-4' bg='bg-[#3615bd]' 
                    color='text-white' border='border-none' hoverBg='bg-[#3013A9]'/>
            </AnimatedElement>
        </LazyMotion>
    </section>
  )
}

export default GlobalSection