import Nav from '@/components/Nav'
import React from 'react'
import {Card} from "antd"
import Link from "next/link"
import Image from 'next/image'

const {Meta} = Card
export default function Contact() {
  return (
    <div className='bg-gradient-to-r from-orange-600 to-orange-500 w-full '>
    <Nav/>
    <p className='text-sm text-white my-10 mx-10 font-bold'><span className='text-black mr-1'>Note:</span>You can contact me on these platforms and I'll respond as fast as I can</p>
    <div className='flex flex-wrap justify-center  overflow-x-hidden'>
        <Link href={"https://www.fiverr.com/s/mBZk4x"}>
        <Card
className='m-10 flex-col rounded-sm flex p-3 bg-black bg-opacity-40 justify-between'
style={{ width: 300 }}
cover={
<Image
src={"/images/fiverr.svg"} // Replace with the path to your image
alt="Description of the image"
width={500} // Specify the desired width of the image
height={300} // Specify the desired height of the image
/>
 }

 >
 <Meta className='flex text-center'

title={<h1 className='text-xl text-indigo-950 font-bold '>Fiverr</h1>}


/>

</Card>

        </Link>
        <Link href={"https://www.instagram.com/adham_hisham_web_dev/"}>
        <Card
className='m-10     flex-col rounded-sm flex p-3 bg-black bg-opacity-40 justify-between'
style={{ width: 300 }}
cover={
<Image
src={"/images/instagram.svg"} // Replace with the path to your image
alt="Description of the image"
width={500} // Specify the desired width of the image
height={300} // Specify the desired height of the image
/>
 }

 >
 <Meta className='flex text-center'

title={<h1 className='text-xl text-indigo-950 font-bold '>Instagram</h1>}


/>

</Card>

        </Link>
    </div>
    </div>

  )
}
