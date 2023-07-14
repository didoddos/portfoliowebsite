import Link from 'next/link'
import React from 'react'
import Image from 'next/image'


export default function () {
  return (
    <div className='  nav flex  bg-opacity-60    justify-between p-5 bg-black w-full'>

    <div className='p-5 flex'>
        <Image className="rounded-sm  "width={100 } height={350}src={"/images/logo.jpg"}></Image>
    </div>
    <div className='flex p-5 flex-row ml-24'>
        <Link className="mr-5" href={"/"}><p className='text-white   hover:border-b transition-all duration-600 hover:border-blue-500'>Home</p> </Link>
        <Link className="mx-5"href={"/Contact"}><p className='text-white   hover:border-b-2 transition-all duration-600  hover:border-red-500'>Contact</p></Link>
        
    </div>
    </div>
  )
}
