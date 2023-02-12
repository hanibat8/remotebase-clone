import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Button from '../Button'

const Navbar = () => {
    const router = useRouter()
    const [isHamburgerMenuOpen,setIsHamburgerMenuOpen]=useState(false);

    const onClickHamburgerMenuBtnHandler=()=>{
        setIsHamburgerMenuOpen(!isHamburgerMenuOpen);
    }

    const onClickApplyAsDevHandler=(e)=>{
        e.preventDefault()
        router.push('/apply-as-developer')
    }

    return (
        <>
        <nav className='mt-8 flex'>
            <div className='flex justify-between align-middle w-2/4'>
                <div className='block self-center'>
                    <Image className='my-auto align-middle' width={186} height={26} src='/remote base logo.png'/>
                </div>
                <Link  href='#'>
                    <a className='hidden lg:block text-[#79889e] font-medium self-center'>About</a>
                </Link>
                <Link href='#'>
                    <a className='hidden lg:block text-[#79889e] font-medium self-center'>Skill</a>
                </Link>
                <Link href='#'>
                    <a className='hidden lg:block text-[#79889e] font-medium self-center'>Process</a>
                </Link>
                <Link href='#'>
                    <a className='hidden lg:block text-[#79889e] font-medium self-center'>Blog</a>
                </Link>
            </div>
            <div className='ml-auto hidden lg:block'>
            <button className='lg:mr-4 xl:mr-12' onClick={onClickApplyAsDevHandler}>Apply as a Developer</button>
            <Button title='Hire Developers' px='px-10' p='p-4' bg='bg-[#3615bd]' 
                    color='text-white' border='border-none' hoverBg='bg-[#3013A9]'/>
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
            {isHamburgerMenuOpen && <div className="lg:hidden flex flex-col transition ease-in-out">
            <Link href='#'>
                <a className=' text-gray-400 font-medium'>About</a>
            </Link>
            <Link href='#'>
                <a className=' text-gray-400 font-medium'>Skill</a>
            </Link>
            <Link href='#'>
                <a className=' text-gray-400 font-medium'>Process</a>
            </Link>
            <Link href='#'>
                <a className=' text-gray-400 font-medium'>Blog</a>
            </Link>
            <button className='text-gray-400 font-medium' onClick={onClickApplyAsDevHandler}>Apply as a Developer</button>
            <Button title='Hire Developers' px='px-10' p='p-4' bg='bg-[#3615bd]' 
                    color='text-white' border='border-none' hoverBg='bg-[#3013A9]'/>
        </div>}
        </>
    )
}

export default Navbar