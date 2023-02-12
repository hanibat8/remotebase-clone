import React from 'react'
import { LazyMotion, domAnimation } from "framer-motion"
import AnimatedElement from '../AnimatedElement'
import WhyChooseCardSection from './WhyChooseCardSection'
import Table from './Table'

const WhyChooseSection = () => {
  return (
    <section className='mt-40 xl:px-40 lg:px-28 px-10'>
    <LazyMotion features={domAnimation}>
    <AnimatedElement>
        <h2 className=' text-center font-semibold text-3xl xl:text-4xl'>
        Why Organizations choose <span className='text-[#3c65fe]'>Remotebase</span>
        </h2>
    </AnimatedElement>
    <AnimatedElement>
        <h3 className=' mb-10 text-center lg:text-xl text-lg mt-5 w-[80%] mx-auto  leading-relaxed'>
        We hire exceptionally talented global developers beforehand and provide them with exceptional mentorship so that you can have a fully workable team within 24 hours. Be it resume shortlisting, screening, technical and non-technical interviews, coding tests, and hiring, we take all the hassle of selecting the best developers for you.
        </h3>
    </AnimatedElement>
    <AnimatedElement className='w-full h-full relative xl:px-16 '>
    <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-lg">
            <Table/>
          </div>
          </div>
        </div>
      </div>
      </AnimatedElement>
        <AnimatedElement className='flex flex-col md:flex-row lg:px-20 my-14 xl:gap-x-24 lg:gap-x-20 gap-x-16'>
          <WhyChooseCardSection title='Role-Specific Expertise' 
                                content='Remotebase has a tried and tested track record of brilliance. We match your company with talent that has extensive experience relevant to the role youre trying to fill.'/>
          <WhyChooseCardSection title='Talent Quality'
                                content='Our developers are not just exceptional coders, they have brilliant soft skills too. So that they can fit perfectly into your team.'/>
          <WhyChooseCardSection title='2-Week No-Risk Trial'
                                content='Our 2-week free trial allows you to work with our developers for two weeks without paying any upfront charges and only pay if you are completely satisfied.'/>
        </AnimatedElement>
    </LazyMotion>
</section>
  )
}

export default WhyChooseSection