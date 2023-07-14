import React from 'react'
import Nav from '@/components/Nav'
import {Card} from 'antd'
import Image from 'next/image'
import Link from 'next/link'

const {Meta} = Card
export default function Projects() {
  return (
    <div className="overflow-x-hidden  bg-gradient-to-tr from-indigo-950 via-indigo-950 to-indigo-900  py-2 w-screen items-center text-center h-screen">
    
    
    <div className='flex flex-wrap flex-row justify-center mt-5 '>
      <Link href={"/corporate"}>

   <Card
className='m-5 flex-col flex p-1 justify-between'
style={{ width: 300 }}
cover={
  <Image
  src={"/images/concord1.jpg.jpg"} // Replace with the path to your image
  alt="Description of the image"
  width={500} // Specify the desired width of the image
  height={300} // Specify the desired height of the image
/>
    }
    
    >  
    <Meta className='flex justify-between'

title={<h1 className='text-xl text-indigo-950 font-bold '>Commercial</h1>}


/>

</Card>
</Link>
<Link href={"/commercial"}>

<Card
className='m-5 flex-col flex p-1 justify-between'
style={{ width: 300 }}
cover={
<Image
src={"/images/concord1.jpg.jpg"} // Replace with the path to your image
alt="Description of the image"
width={500} // Specify the desired width of the image
height={300} // Specify the desired height of the image
/>
 }
 
 >  
 <Meta className='flex justify-between'

title={<h1 className='text-xl text-indigo-950 font-bold '></h1>}


/>

</Card>
</Link>
<Link href={"/corporate"}>

<Card
className='m-5 flex-col flex p-1 justify-between'
style={{ width: 300 }}
cover={
<Image
src={"/images/marrasi1.jpg.jpg"} // Replace with the path to your image
alt="Description of the image"
width={500} // Specify the desired width of the image
height={300} // Specify the desired height of the image
/>
 }
 
 >  
 <Meta className='flex justify-between'

title={<h1 className='text-xl text-indigo-950 font-bold '>Vacation Homes</h1>}


/>

</Card>
</Link>
<Link href={"/vacationhomes"}>

<Card
className='m-5 flex-col flex p-1 justify-between'
style={{ width: 300 }}
cover={
<Image
src={"/images/dunes1.jpg.jpg"} // Replace with the path to your image
alt="Description of the image"
width={500} // Specify the desired width of the image
height={300} // Specify the desired height of the image
/>
 }
 
 >  
 <Meta className='flex justify-between'

title={<h1 className='text-xl text-indigo-950 font-bold '>Residence</h1>}


/>

</Card>
</Link>
</div>
    </div>
  )
}
