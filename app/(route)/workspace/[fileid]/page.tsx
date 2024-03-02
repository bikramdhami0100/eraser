"use client"
import React, { useEffect, useState } from 'react'

import WorkSpaceHeader from './component/WorkSpaceHeader'
import Editor from './component/Editor'
import { useConvex } from 'convex/react';
import { api } from '@/convex/_generated/api';
import Canva from './component/Canva';
import { Toaster } from 'sonner';

function WorkSpace({params}:any) {
  const [triggersave,settriggersave]=useState(false);
  const convex=useConvex();
  const [fileData,setFileData]=useState<File>();
useEffect(() => {
 params.fileid&& getFileData();
}, [])
const getFileData=async()=>{
  const result=await convex.query(api.files.getFileById,{_id:params.fileid});
  console.log("this is getfile by id ",result);
  setFileData(result);
}
  return (
    <div>
    <WorkSpaceHeader settriggersave={settriggersave} triggersave={triggersave}/>
    <Toaster></Toaster>
    <div className='grid grid-cols-1 md:grid-cols-2'>
        <div className=' h-screen border-r'>
        
            <Editor triggersave={triggersave}  fileid={params.fileid} fileData={fileData}></Editor>
        </div>
        <div className=' h-screen'>
          <Canva triggersave={triggersave}  fileid={params.fileid} fileData={fileData}
          />

        </div>
    </div>

    </div>
  )
}

export default WorkSpace
