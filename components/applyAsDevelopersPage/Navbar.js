import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Button from '../Button'

const Navbar = () => {
    const [isHamburgerMenuOpen,setIsHamburgerMenuOpen]=useState(false);

    const onClickHamburgerMenuBtnHandler=()=>{
        setIsHamburgerMenuOpen(!isHamburgerMenuOpen);
    }

  return (
    <>
    <nav className=' flex xl:px-36 lg:px-28 px-10 top-0 sticky bg-white py-6 z-10'>
        <div className='flex flex-1 justify-between align-middle'>
            <div className='block self-center hover:cursor-pointer'>
                <Link href={'/'}>
                    <Image className='my-auto align-middle' width={186} height={26} src='/remote base logo.png'/>
                </Link>
            </div>
            <div className='flex'>
                <Link  href='#'>
                    <a className='hidden ml-10 lg:block text-[#000] font-xs self-center'>About</a>
                </Link>
                <Link href='#'>
                    <a className='hidden ml-10 lg:block text-[#000] font-xs self-center'>Skill</a>
                </Link>
                <Link href='#'>
                    <a className='hidden ml-10 lg:block text-[#000] font-xs self-center'>Process</a>
                </Link>
            </div>
            <div className='hidden lg:block'>
                <button className='lg:mr-4 xl:mr-12 text-[#3615bd]'>Apply as a Developer</button>
                <Button title='Hire developers' px='px-10' p='p-2' bg='bg-white' color='text-[#3615bd]' border='border-[#3615bd]'/>
            </div>
        </div>
    
        <div className="flex ml-auto lg:hidden hover:cursor-pointer" onClick={onClickHamburgerMenuBtnHandler}>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
            />
            </svg>
        </div>
    </nav>
        {isHamburgerMenuOpen && <div className={`lg:hidden lex flex-col ease-in-out
        fixed top-0 left-0 w-full px-10 z-10 h-screen pt-14 bg-gray-900 transform delay-100 transition-all duration-300 ${
            isHamburgerMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
          }`}>
            <div className='flex justify-end'>
            <svg onClick={onClickHamburgerMenuBtnHandler} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8 hover:cursor-pointer">
            <path  strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            </div>

            <div className='w-full h-full flex flex-col justify-between'>
                <Link href='#'>
                    <a className='h-full text-center text-white text-2xl '>About</a>
                </Link>
                <Link href='#'>
                    <a className='h-full text-center text-white text-2xl '>Skill</a>
                </Link>
                <Link href='#'>
                    <a className='h-full text-center text-white text-2xl '>Process</a>
                </Link>
                <Link href='#'>
                    <a className='h-full text-center text-white text-2xl '>Blog</a>
                </Link>
            </div>
    </div>}
    </>
  )
}

export default Navbar

//text-[#3615bd]