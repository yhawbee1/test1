'use client'
import React, { useState } from 'react'
import Link from "next/link";
// import { usePathname } from 'next/link'

export default function Header() {
const [active, setActive] = useState('Home')
// const pathname = usePathname()

  return (
    <>
    <header className='w-3/5 h-fit py-3 px-8 bg-white/70 fixed top-8 backdrop-blur-sm rounded-full shadow-2xl z-30'>
        <nav className=''>
            <ul className='flex justify-around'>
            {navs.map((navItem, idx) => (
                <Link href={`${navItem.url}`} key={idx}>
                    <li 
                        className={`${active === navItem.title ? 'bg-white text-black' : ''} px-6 py-2 text-lg text-gray-600 duration-300 rounded-full cursor-pointer hover:bg-white hover:shadow-xl hover:text-black`}
                        onClick={() => setActive(navItem.title)}>
                            {navItem.title}
                    </li>
                </Link>
            ))}
            </ul>
        </nav>
    </header>
    </>
  )
}

const navs = [
    {url: '/#home', title:'Home'},
    {url: '/#about', title:'About'},
    {url: '/#experience', title:'Experience'},
    {url: '/#projects', title:'Projects'},
    {url: '/#socials', title:'Socials'},
    {url: '/#contact', title:'Contact'}
  ]