import React from 'react'
import Image from 'next/image'
import { LazyMotion, domAnimation, m } from "framer-motion"

import AnimatedElement from '../AnimatedElement'

const CompaniesSection = () => {

  return (
    <section className='mt-20 py-10 bg-[#fff2ee] lg:px-40 px-20 flex flex-col justify-center'>
        <LazyMotion features={domAnimation}>
            <AnimatedElement>
                        <h3 className='text-center font-semibold text-xl'>Trusted by <span className='text-[#3c65fe]'>top-tier</span> companies</h3>
                        <div className='grid lg:grid-cols-6 md:grid-cols-4 grid-cols-3 '>
                            <div>
                            <Image src='/company brand.svg' height={150} width={150}/>
                            </div>
                            <div>
                            <Image src='/company brand.svg' height={150} width={150}/>
                                </div>
                            <div>
                            <Image src='/company brand.svg' height={150} width={150}/>
                                </div>
                            <div>
                            <Image src='/company brand.svg' height={150} width={150}/>
                                </div>
                            <div>
                            <Image src='/company brand.svg' height={150} width={150}/>
                                </div>
                            <div>
                            <Image src='/company brand.svg' height={150} width={150}/>
                                </div>
                            <div>
                            <Image src='/company brand.svg' height={150} width={150}/>
                                </div>
                            <div>
                            <Image src='/company brand.svg' height={150} width={150}/>
                                </div>
                            <div>
                            <Image src='/company brand.svg' height={150} width={150}/>
                                </div>
                            <div>
                            <Image src='/company brand.svg' height={150} width={150}/>
                                </div>
                            <div>
                            <Image src='/company brand.svg' height={150} width={150}/>
                                </div>
                            <div>
                            <Image src='/company brand.svg' height={150} width={150}/>
                                </div>
                        </div>
            </AnimatedElement>

        </LazyMotion>
    </section>
  )
}

export default CompaniesSection