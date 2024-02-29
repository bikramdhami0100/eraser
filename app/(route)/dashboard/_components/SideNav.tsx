"use client"
import React, { useEffect, useState } from 'react'
import TopSection, { Team } from './TopSection'
import BottomSection from './BottomSection'
import { useConvex, useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { toast } from 'sonner'

function SideNav() {
  const [ActiveTeam,setActiveTeam]=useState<any>();
  const [tFile,settFile]=useState<number>();

  const convex=useConvex();
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
     getFile();
    toast("file is created successfully !!")
   }).catch((err)=>{
    
     toast("some Error occure during file creation")
   })

  }
  useEffect(() => {
     ActiveTeam&& getFile();
  }, [ActiveTeam])
  
  const getFile=async()=>{
   const result=await convex.query(api.files.getFile,{teamId:ActiveTeam?._id});
   console.log(result);
   settFile(result.length);

  }

  return (
    <div className='flex flex-col bg-gray-300 h-screen  border-r'>
      
      <div className='flex-1'>
      <TopSection setTeamInfo={setTeamInfo}></TopSection>
      </div>
      <div>
        <BottomSection onFileCreate={onFileCreate}
         totalfile={tFile}></BottomSection>
      </div>

    </div>
  )
}

export default SideNav
