import React from 'react'
import Image from 'next/image'
import { LazyMotion, domAnimation } from "framer-motion"
import AnimatedElement from '../AnimatedElement'
import ArrowIcon from '../ArrowIcon'
import Button from '../Button'

const WhyDevelopersLoveSection = () => {
  return (
    <section className='mt-20 xl:px-40 lg:px-28 px-10'>
    <LazyMotion features={domAnimation}>
        <AnimatedElement
          className='flex flex-col md:flex-row mt-20 justify-between'>
              <div className='md:w-[40%] w-full order-last md:order-1'>
                  <h4 className='text-3xl xl:text-4xl font-semibold leading-normal'>
                  Why Developers Love Remotebase?
                  </h4>
                  <p className='leading-normal my-6'>
                  We appreciate our developers by offering matchless benefits.
                  </p>
                  <hr/>
                  <ul className='my-8'>
                      <li className='flex mt-2 align-middle'>
                          <ArrowIcon/>
                          <p className='ml-2 self-center'>Market competitive salaries</p>
                      </li>
                      <li className='flex mt-2 align-middle'>
                          <ArrowIcon/>
                          <p className='ml-2 self-center'>Flexible working hours</p>
                      </li>
                      <li className='flex mt-2 align-middle'>
                          <ArrowIcon/>
                          <p className='ml-2 self-center'>Mentorship by FAANG engineers</p>
                      </li>
                      <li className='flex mt-2 align-middle'>
                          <ArrowIcon/>
                          <p className='ml-2 self-center'>Gym allowance</p>
                      </li>
                      <li className='flex mt-2 align-middle'>
                          <ArrowIcon/>
                          <p className='ml-2 self-center'>Health insurance (developer + family)</p>
                      </li>
                      <li className='flex mt-2 align-middle'>
                          <ArrowIcon/>
                          <p className='ml-2 self-center'>Exponential career growth</p>
                      </li>
                  </ul>
                  <Button title='Apply For Jobs' px='px-10' p='p-4' bg='bg-[#3615bd]' 
                                    color='text-white' border='border-none' hoverBg='bg-[#3013A9]'/> 
              </div>

              <div className='w-full lg:ml-16 md:w-[55%] self-end order-1 md:order-last md:mb-5'>
                  <Image  width={800} height={650}  src='/developersLoveSection.png'/>
              </div>
          </AnimatedElement>
  </LazyMotion>
</section>
  )
}

export default WhyDevelopersLoveSection