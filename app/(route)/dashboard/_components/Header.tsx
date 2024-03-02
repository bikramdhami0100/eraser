import { Button } from '@/components/ui/button'
import { Search, ZoomIn } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function Header({user}:any) {

  
  return (
    <div className=' flex justify-end'>
    <div className='flex outline outline-1 outline-gray-300 rounded-md p-2 m-1  hover:border-[2px] border-blue-500 hover:rounded-md'>
    <Search></Search>
      <input className=' outline-none' type='text' placeholder='search'></input>
    </div>
    <div>
      <Image  alt='image' src={user?.picture}  height={40} width={40} className=' w-[40px] h-[40px]  mt-1 rounded-full'/>
    </div>
    <div className=' mt-1 mx-1'>
       <Button>Invite </Button>
    </div>
    </div>
  )
}

export default Header
