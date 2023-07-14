import Image from 'next/image'
import { Inter } from 'next/font/google'
import Nav from '@/components/Nav'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-gradient-to-r overflow-x-hidden  from-indigo-900 via-indigo-950 to-indigo-950 w-screen h-screen'>
      <Nav/>
      <div className='text-center my-5'>
        
        <Link href={"/"}><h1 className='texts  text-5xl  text-white'>Adham Hisham</h1></Link>
        <p className='m-5 text-lg text-white font-bold '  >I am a web developer that builds web apps with specific <span className='text-red-500 duration-700 hover:border-indigo-200 hover:border-b-2'>Javascript Frameworks</span> that give your customers a chance to see what they'd be missing out on if they don't use your service</p>
        <div className='flex p-10 items-center justify-center'>
          <img className=' ' src="/images/portfolio.png" alt="" />
        </div>
        <div className='flex p-10 items-center justify-center'>
          <img className="" src="/images/haa.png"></img>
        </div>
      </div>
    </div>

    
  )
}
