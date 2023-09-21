import { About } from '@/components/About'
import Button from '@/components/Button'
import { Contact } from '@/components/Contact'
import { Experience } from '@/components/Experience'
import Header from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Project } from '@/components/Project'

import { Socials } from '@/components/Socials'


export default function Home() {
  return (
    <>
    <main className='bg-slate-50 h-fit w-screen relative flex flex-col justify-center items-center'>
      {/* TODO: HEADER + NAVIGATION */}
      <Header />
      {/* HERO Section */}
      <Hero />
      <About/>
      <Experience/>
      <Project/>
      <Socials/>
      <Contact/>
    </main >
    </>
  )
}

