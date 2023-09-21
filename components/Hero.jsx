import React from 'react'
import Image from 'next/image'

export const Hero = () => {
    const yearsOfExp = new Date().getFullYear() - 2020;  
    return (
    <>
    <div className='h-[50rem] w-full bg-cover bg-no-repeat bg-center' style={{backgroundImage: `url('https://img.freepik.com/free-photo/html-system-websites-concept_23-2150323532.jpg?w=1380&t=st=1695304715~exp=1695305315~hmac=27fd67f54553e3a9e9aeda7fe0c1c4745e4852792b92bcd3480a58863b09265a')`}}>
    <div className='h-full w-full flex justify-center items-end bg-gradient-to-tr from-[#2028DC]/70  via-[#C71717]/60  to-[#2028DC]/70  bg-blend-multiply'>
        {/* Text */}
        <div className='h-[66vh] w-1/3 space-y-20'>
            <h1 className='text-4xl text-white'>💁‍♂️ Hi, I am <span className='italic text-yellow-500 font-semibold'>Brian</span></h1>
            <p className='text-gray-200 text-2xl font-thin leading-relaxed tracking-wider'>
                {`I'm a problem-solving tech enthusiast with ${yearsOfExp} years of experience. I specialize in crafting innovative software solutions, from code to user-friendly applications. Collaboration, elegant coding, and adaptability are my strengths. I've contributed to diverse projects, from mobile apps to core system optimization. In a dynamic tech world, I'm your go-to for innovation and excellence.`}
            </p>
        </div>
        <div className="h-[70vh] w-1/3 relative">
            <Image
                src={"/team_2.png"}
                fill
                alt="Samuel"
                priority={true}
                className="object-cover"
            />
        </div>
    </div>
    </div>
    </>
  )
}
