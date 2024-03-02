
import { Button } from '@/components/ui/button'

import { Save, Share,Share2Icon,ShareIcon} from 'lucide-react'

import Image from 'next/image'
import React, { useEffect } from 'react'

function WorkSpaceHeader({settriggersave,triggersave,}:any) {

  return (
    <div className=' flex border-b justify-between h-12'>
       <div className=' flex justify-center items-center text-[12px]  h-10'>
       <Image src="/vercel.svg" alt='logo' height={40} width={40} className=' mx-1'></Image>
      <h1>fileName</h1>
       </div>
      <div className=' flex justify-center items-center '>
      <div className='flex'>
        <Button className='h-[40px] m-1' onClick={()=>settriggersave(!triggersave)}><Save></Save> Save</Button>
       </div>
       <div>
        <Button className='h-[40px] m-1'> Share<Share2Icon></Share2Icon></Button>
       </div>
      </div>
    </div>
  )
}

export default WorkSpaceHeader
