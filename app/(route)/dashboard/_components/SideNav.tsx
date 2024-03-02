"use client"
import React, { useContext, useEffect, useState } from 'react'
import TopSection, { Team } from './TopSection'
import BottomSection from './BottomSection'
import { useConvex, useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { toast } from 'sonner'
import { ContextFile } from '@/app/contextApi/ContextFile'

function SideNav() {
  const [ActiveTeam,setActiveTeam]=useState<any>();
  const [tFile,settFile]=useState<number>();
  const {FileList,setFileList}=useContext(ContextFile);
  const convex=useConvex();
 const setTeamInfo=(e:any)=>{
    
    setActiveTeam(e);
 }
 
 const {user}:any=useKindeBrowserClient();
 const createFile=useMutation(api.files.createFile);
  const onFileCreate=(file:string)=>{
  
   
  
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
    setFileList(result)
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
