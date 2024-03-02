import React, { useEffect, useState } from 'react'
import { Excalidraw } from "@excalidraw/excalidraw";
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { toast } from 'sonner';
function Canva({triggersave,fileid,fileData}:{triggersave:any,fileid:any,fileData:any}) {
    console.log("this is filedata ",fileData)
    const [whiteboardData,setwhiteboardData]=useState<any>();
    const upadateWhiteboard=useMutation(api.files.updateWhiteboard);
    useEffect(()=>{
    triggersave&& whiteboardsave()
    },[triggersave]);
    const whiteboardsave=()=>{
   upadateWhiteboard({_id:fileid,
            whiteboard:JSON.stringify(whiteboardData)
}).then((res)=>{
    if (res) {

          toast("whiteboard is updated successfully !!")
    }
}).catch((e)=>{
    toast("some error occure", e)
})
    }
  return (
<div style={{ height: "600px" }}>
   {
    fileData&&  <Excalidraw 
    initialData={{
        elements:fileData?.whiteboard&&JSON.parse(fileData?.whiteboard)
    }}
     onChange={(excalidrawElem,
        appState,file)=>{
        setwhiteboardData(excalidrawElem);
     }} 
    />
   }
  </div>
  )
}

export default Canva
