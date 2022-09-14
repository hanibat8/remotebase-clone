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
    <section className=''>
        <LazyMotion features={domAnimation}>
            <AnimatedElement className=' xl:px-48 lg:px-32  px-10 bg-[#3615bd] rounded-lg flex 
                     items-center flex-col md:flex-row p-8 
                     text-white'>
                <div className='w-full flex-1 xl:mr-32 lg:mr-24 lg:mt-[-100px] md:px-0 px-12'>
                    <Image width={480} height={570}  src='/footerApplyAsDevImg.png'/>
                </div>
                <div className='flex-1 w-full'>
                    <h3 className='lg:text-[50px] text-[40px] font-semibold text-center md:text-start'>
                        Ready to get started?
                    </h3>
                    <div className='flex mt-5 justify-center md:justify-start gap-x-4'>
                    <Button title='Hire Now' px='px-10' p='p-2' bg='bg-white' 
                        color='text-[#3615bd]' border='border-[#3615bd]'/>
                    <Button title='Contact Us' px='px-10' p='p-2' bg='bg-white' color='text-[#3615bd]' border='border-[#3615bd]'/>  
                    </div>
                    <p className='mt-4 text-center md:text-start'>Looking for jobs instead? <span className=' font-bold text-white'>Apply for Jobs</span></p> 
                </div>           
            </AnimatedElement>
            <AnimatedElement className='mt-14 mb-20 xl:px-48 lg:px-32  px-10'>
                <div className='flex mb-8 justify-between align-middle'>
                    <div className='block self-center '>
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