import React from 'react'
import Traits from './Traits'

import { LazyMotion, domAnimation } from "framer-motion"
import AnimatedElement from '../AnimatedElement'

const TraitsSection = () => {
  return (
    <section className=' mt-40 xl:px-48 lg:px-32 px-10'>
    <LazyMotion features={domAnimation}>
        <AnimatedElement>
            <h2 className=' xl:px-40 lg:px-28 px-10 text-center font-semibold text-3xl'>
            Traits that we looking for
            </h2>
        </AnimatedElement>
        <AnimatedElement>
            <h3 className='xl:px-40 lg:px-28 mb-12 text-center text-lg mt-5 md:w-[75%] 
                            mx-auto px-10 leading-relaxed'>
            If you have these traits, you are the person we are looking for!

            </h3>
        </AnimatedElement>
        <AnimatedElement className='flex md:justify-center flex-col md:flex-row mt-16 
                                    md:gap-x-14 gap-y-3'>
            <Traits img={'/growth-mindset.svg'} bgColor='bg-sky-200	' content={'Growth mindset'}/>
            <Traits img={'/solve-problems.svg'} bgColor='bg-pink-200' content={`Natural ability to solve problems`}/>
            <Traits img={'/briefcase.svg'} bgColor='bg-[#D3CFE2]' content={'Relevant Experience'}/>
            <Traits img={'/communication-skills.svg'} bgColor='bg-orange-100' content={'Exceptional communication skills'}/>
        </AnimatedElement>
    </LazyMotion>
</section>
  )
}

export default TraitsSection