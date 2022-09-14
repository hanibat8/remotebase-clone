import React from 'react'
import Image from 'next/image'
import { LazyMotion, domAnimation } from "framer-motion"
import AnimatedElement from '../AnimatedElement'
import Button from '../Button'
  
const StepsSection = () => {
    return (
      <section className='mt-20 xl:px-40 lg:px-28 px-10'>
            <LazyMotion features={domAnimation}>
                  <AnimatedElement
                  className='flex flex-col md:flex-row mt-20 h-full '>
                      <div className='md:w-[40%] w-full lg:ml-auto order-last md:order-1'>
                          <h4 className='text-3xl xl:text-4xl font-semibold leading-normal'>
                          Hire Your Ideal Engineering Team In 3 Simple Steps
                          </h4>
                          <p className=' leading-normal my-6'>
                          More rigorous than Silicon Valley job interviews, we test for 100+ skills, data structures, 
                          algorithms, systems design, software specializations & frameworks.
                          </p>
                          <ol type='1' className='mt-8'>
                              <li>
                                  <div className='flex mt-2 align-middle'>
                                    <span className='bg-[#3c65fe] text-white w-7 h-7 rounded-full flex justify-center align-middle font-semibold items-center'>1</span>
                                    <p className='ml-2 self-center font-semibold'>Tell us your requirements</p>
                                  </div>
                                  <p className='ml-8 my-6'>
                                    Fill out the form on our website, telling us about what developer skills you are looking for, how many team members you need, and a few details about your company.
                                  </p>
                              </li>
                              <li>
                                  <div className='flex mt-2 align-middle'>
                                    <span className='bg-[#3c65fe] text-white w-7 h-7 rounded-full flex justify-center align-middle font-semibold items-center'>2</span>
                                    <p className='ml-2 self-center font-semibold'>Wait for our email</p>
                                  </div>
                                  <p className='ml-8 my-6'>
                                    Fill out the form on our website, telling us about what developer skills you are looking for, how many team members you need, and a few details about your company.
                                  </p>
                              </li>
                              <li >
                                  <div className='flex mt-2 align-middle'>
                                    <span className='bg-[#3c65fe] text-white w-7 h-7 rounded-full flex justify-center align-middle font-semibold items-center'>3</span>
                                    <p className='ml-2 self-center font-semibold'>Get relevant developers within 24 hours</p>
                                  </div>
                                  <p className='ml-8 my-6'>
                                    Fill out the form on our website, telling us about what developer skills you are looking for, how many team members you need, and a few details about your company.
                                  </p>
                              </li>
                              <AnimatedElement>
                              <Button title='Apply Now' px='px-10' p='p-4' bg='bg-[#3615bd]' 
                                    color='text-white' border='border-none' hoverBg='bg-[#3013A9]'/>   
                                <p className='mt-4'>Looking for jobs instead? <span className=' font-bold text-[#3c64fe]'>Apply for Jobs</span></p> 
                            </AnimatedElement>
                          </ol>
                      </div>

                      <AnimatedElement className='w-full md:ml-16 md:w-3/6 order-1 md:order-last md:mb-6'>
                          <Image  width={1150} height={1650}  src='/stepsSectionImg.png'/>
                      </AnimatedElement>
                  </AnimatedElement>
          </LazyMotion>
      </section>
    )
  }
  
export default StepsSection
