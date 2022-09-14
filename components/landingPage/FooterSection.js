import React from 'react'
import TwitterIcon from '../TwitterIcon';
import LinkedinIcon from '../LinkedinIcon';
import InstagramIcon from '../InstagramIcon';
import AnimatedElement from '../AnimatedElement'
import Button from '../Button'

import Image from 'next/image'
import Link from 'next/link'

import { LazyMotion, domAnimation, m } from "framer-motion"

const FooterSection = () => {
  return (
    <section className='mt-44 xl:px-40 lg:px-28 px-10'>
        <LazyMotion features={domAnimation}>
            <AnimatedElement className='bg-[#3615bd] rounded-lg flex 
                    justify-between items-center flex-col md:flex-row p-8 
                    lg:px-28 text-white'>
                <div className='flex-1 order-last md:order-1'>
                    <h3 className='lg:text-[40px] text-[30px] font-semibold'>
                        Ready to get <br/>started?
                    </h3>
                    <div className='flex mt-5 gap-x-4'>
                    <Button title='Hire Now' px='px-10' p='p-2' bg='bg-white' 
                        color='text-[#3615bd]' border='border-[#3615bd]'/>
                    <Button title='Contact Us' px='px-10' p='p-2' bg='bg-white' color='text-[#3615bd]' border='border-[#3615bd]'/>  
                    </div>
                    <p className='mt-4'>Looking for jobs instead? <span className=' font-bold text-white'>Apply for Jobs</span></p> 
                </div>
                <div className='w-full flex-1 xl:ml-36 lg:ml-28 lg:mt-[-100px] order-1 md:order-last'>
                    <Image width={380} height={470}  src='/footerImage.png'/>
                </div>
            </AnimatedElement>
            <AnimatedElement className='mt-40 mb-20'>
                <div className='flex mb-8 justify-between align-middle'>
                    <div className='block self-center'>
                        <Image className='my-auto align-middle' width={186} height={26} src='/remote base logo.png'/>
                    </div>
                    <div className='flex '>
                        <Link  href='#'>
                            <a className='hidden ml-20 lg:block text-[#79889e] font-medium self-center'>About</a>
                        </Link>
                        <Link href='#'>
                            <a className='hidden ml-20 lg:block text-[#79889e] font-medium self-center'>Skill</a>
                        </Link>
                        <Link href='#'>
                            <a className='hidden ml-20 lg:block text-[#79889e] font-medium self-center'>Process</a>
                        </Link>
                        <Link href='#'>
                            <a className='hidden ml-20 lg:block text-[#79889e] font-medium self-center'>Blog</a>
                        </Link>
                    </div>
                    <div className='flex'>
                        <div className='w-7 h-7 flex justify-center ml-9 items-center bg-sky-200 rounded-full'>
                            <TwitterIcon/>
                        </div>
                        <div className='w-7 h-7 flex justify-center ml-9 items-center bg-sky-200 rounded-full'>
                            <LinkedinIcon/>
                        </div>
                        <div className='w-7 h-7 flex justify-center ml-9 items-center bg-sky-200 rounded-full'>
                            <InstagramIcon/>
                        </div>
                    </div>
                </div>
                <hr className='text-black bg-black'/>
                <div className='flex mt-5 justify-between'>
                    <p className='text-sm'>© 2021, Remotebase. All Rights Reserved</p>
                    <p className='text-sm'>Terms & Privacy</p>
                </div>
            </AnimatedElement>
        </LazyMotion>
    </section>
  )
}

export default FooterSection