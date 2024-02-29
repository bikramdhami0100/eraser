"use client"
import React, { useState } from 'react'
import TopSection, { Team } from './TopSection'
import BottomSection from './BottomSection'
import { useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { toast } from 'sonner'

function SideNav() {
  const [ActiveTeam,setActiveTeam]=useState<any>();

 const setTeamInfo=(e:any)=>{
    
    setActiveTeam(e);
 }
 
 const {user}:any=useKindeBrowserClient();
 const createFile=useMutation(api.files.createFile);
  const onFileCreate=(file:string)=>{
   console.log(file);
   
  
   createFile({

     fileName:file,
     teamId:ActiveTeam?._id,
     createdBy:user?.email,
     archive:false,
     document:"",
     whiteboard:""
   }).then((res)=>{
    
    toast("file is created successfully !!")
   }).catch((err)=>{
    
     toast("some Error occure during file creation")
   })

  }

  return (
    <div className='flex flex-col bg-gray-300 h-screen  border-r'>
      
      <div className='flex-1'>
      <TopSection setTeamInfo={setTeamInfo}></TopSection>
      </div>
      <div>
        <BottomSection onFileCreate={onFileCreate}></BottomSection>
      </div>

    </div>
  )
}

export default SideNav
