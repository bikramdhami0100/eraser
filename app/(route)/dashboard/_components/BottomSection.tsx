import { Button } from '@/components/ui/button'
import { Archive, FileInput, Flag, GithubIcon } from 'lucide-react'
import React, { useState } from 'react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Input } from "@/components/ui/input"

function BottomSection({onFileCreate,totalfile}:any) {

  const [fname,setfname]=useState("")
  const menu=[
    {
      id:1,
      name:"Getting Start",
      icon:Flag,
      path:""
    },
    {
      id:2,
      name:"Github",
      icon:GithubIcon,
      path:""
    },
    { 
      id:3,
      name:"Archive",
      icon:Archive,
      path:""
    }

  ]
  return (
    <div>
      {
        menu.map((item,index)=>{
          return(
            <div key={index} className='flex cursor-pointer w-full p-1 '> 
              <item.icon></item.icon>
              <h1>{item.name}</h1>
            </div>
          )
        })
      }
      <Dialog>
  <DialogTrigger className=' w-full justify-start items-start'>      <Button className=' w-full bg-blue-600 items-center justify-start'>New File</Button></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle className=' text-left' >Create New File</DialogTitle>
      <DialogDescription>
        <Input placeholder='enter new file name' onChange={(e)=>{
          setfname(e.target.value)
        }}/>
        <DialogFooter className="sm:justify-start" >
          <DialogClose asChild disabled={!(fname&&fname.length>1)}>
            <Button type="button" className='mt-1 w-[100px]' onClick={()=>{
              onFileCreate(fname)
            }}>
              create 
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>


       <div className='h-4  mt-2 mb-1 rounded-full  w-full '>
       <div className={` h-full rounded-full  bg-blue-600  `} style={{width:`${totalfile&&(totalfile/5)*100}%`}}>
          </div>
       </div>
       <h1 className=' text-[12px] w-full m-1'>{totalfile} out of 5 files</h1>
       <h1 className=' text-[12px] w-full m-1'><span>Upgrade</span> for unlimited access your files </h1>
    </div>
  )
}

export default BottomSection
