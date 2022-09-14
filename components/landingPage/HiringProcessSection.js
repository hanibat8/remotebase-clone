import React from 'react'
import Image from 'next/image'
import { LazyMotion, domAnimation } from "framer-motion"
import AnimatedElement from '../AnimatedElement'
import ArrowIcon from '../ArrowIcon'

const HiringProcessSection = () => {
  return (
    <section className='mt-20 xl:px-40 lg:px-28 px-10'>
          <LazyMotion features={domAnimation}>
            <AnimatedElement>
                <AnimatedElement>
                    <h2 className='text-center font-semibold text-4xl'>
                    Expedite Your Tech <span className='text-[#3c65fe]'>Hiring</span> Process <span className='text-[#3c65fe]'>Smartly</span>
                    </h2>
                </AnimatedElement>
                
                <AnimatedElement>
                   <h3 className='text-center text-xl mt-5 lg:w-2/3 mx-auto px-10 leading-relaxed'>
                   Leverage the expertise of the best global developers and take the tech world by storm without going through the exhaustive hiring process.
                   </h3>
                </AnimatedElement>
                
                <AnimatedElement
                className='flex flex-col md:flex-row mt-20 justify-between'>
                    <div className='lg:w-[40%] w-full order-last md:order-1 mt-4 md:mt-0'>
                        <h4 className='xl:text-4xl lg:text-3xl text-2xl font-semibold leading-normal'>
                            Network of only the <span className='text-[#3c65fe]'>Top 1%</span> of software engineers.
                        </h4>
                        <p className='leading-normal lg:text-base my-6'>
                            With Remotebase, you won't have to worry about how to find the best tech talent that is a 
                            perfect fit for your company. From helping onboard engineers to regular performance 
                            reviews, we ensure that our clients have a flawless experience every step of the way.
                        </p>
                        <hr/>
                        <ul className='mt-8'>
                            <li className='flex mt-2 align-middle'>
                                <ArrowIcon/>
                                <p className='ml-2 self-center'>Extensive pool of remote software developers</p>
                            </li>
                            <li className='flex mt-2 align-middle'>
                                <ArrowIcon/>
                                <p className='ml-2 self-center'>Extensive pool of remote software developers</p>
                            </li>
                            <li className='flex mt-2 align-middle'>
                                <ArrowIcon/>
                                <p className='ml-2 self-center'>Extensive pool of remote software developers</p>
                            </li>
                            <li className='flex mt-2 align-middle'>
                                <ArrowIcon/>
                                <p className='ml-2 self-center'>Extensive pool of remote software developers</p>
                            </li>
                        </ul>
                    </div>

                    <div className='w-full lg:self-center md:self-center lg:ml-16 lg:w-3/6 ml-auto order-1 md:order-last'>
                        <Image  width={800} height={450}  src='/image remote base site.png'/>
                    </div>
                </AnimatedElement>
            </AnimatedElement>
        </LazyMotion>
    </section>
  )
}

export default HiringProcessSection