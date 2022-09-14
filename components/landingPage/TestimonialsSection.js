import React from 'react'
import { LazyMotion, domAnimation } from "framer-motion"
import AnimatedElement from '../AnimatedElement'
import TestimonialsCard from './TestimonialsCard'

const Testimonials = () => {
  return (
    <section className='mt-20 lg:mb-36 xl:px-40 lg:px-28 px-10 py-10 bg-sky-100'>
        <LazyMotion features={domAnimation}>
                <AnimatedElement className=' w-full mt-5'>
                    <h4 className='text-3xl xl:text-4xl font-semibold leading-normal xl:w-[40%] w-[70%]'>
                        What our <span className='text-[#3c65fe]'> customers</span> <br/> Are saying
                    </h4>
                    <p className='leading-normal my-6 xl:w-[40%] w-[60%]'>
                        Read remotebase.com reviews from customers across the world and learn what it’s like working with top Silicon Valley firms.
                    </p>
                    <div className='my-12 flex flex-col lg:flex-row lg:gap-x-10 gap-y-4'>
                        <TestimonialsCard content='For a startup, finding the best developer talent is challenging due to 
                                                    limited time and budget. I’m glad I got the support I was looking 
                                                    for from Remotebase. The fact that they assembled the perfect team 
                                                    for us in 24 hours with a 2 weeks trial period made our hiring 
                                                    decision 100 times safer and easier. Now we have the best developer 
                                                    team and a blooming business.' 
                                                    name='Zak Kidd' position='OFFICETOUR.COM'/>
                        <TestimonialsCard content='Remotebase’s developers have been a part of my team since day 1, and I’m 
                                                    really proud of what we have achieved in just a few years due to their 
                                                    credible expertise. They are well versed with the best coding practices 
                                                    and have never compromised on anything, including the quality and the deadlines.' 
                                                    name='Sam Udotong' position='FIREFLIES.AI'/>
                        <TestimonialsCard content='Working with remotebase is like a magic. One of the most impresive things of 
                                                    this company is how quickly and efficienly it operates - I had a skill team 
                                                    and minded engineer assambled and ready to work within a day start with 1.' 
                                                    name='Mira Schleifer' position='OFFICETOUR.COM'/>
                    </div>   
                </AnimatedElement>
        </LazyMotion>
    </section>
  )
}

export default Testimonials