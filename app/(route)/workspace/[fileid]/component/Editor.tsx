"use client"
import React, { useEffect, useRef, useState } from 'react'
import EditorJS from '@editorjs/editorjs';
//@ts-ignore
import List from "@editorjs/list";
//@ts-ignore
import Checklist from '@editorjs/checklist'
//@ts-ignore
import Header from '@editorjs/header';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { toast } from 'sonner';
function Editor({triggersave,fileid,fileData}:{triggersave:any,fileid:any,fileData:any}) {
  
  console.log("this is file id  file data",fileData)
  const ref =useRef<EditorJS>();
const updateDocument=useMutation(api.files.updateDocument);
  const rawDoc={
    "time" : 1550476186479,
    "blocks" : [
      {
        data:{
          text:"Document Name",
          level:2
        },
        id:"1234",
        type:"header"
      },
      {
        data:{
          
          level:4
        },
        id:"123",
        type:"header"
      }
    ],
    "version" : "2.8.1"
} 

const [doc,setdoc]=useState(rawDoc)
useEffect(()=>{
 fileData&& InitEditor();
},[fileData])
useEffect(()=>{

    triggersave&& OnSaveDocument();
  },[triggersave])
const InitEditor=()=>{
    const editor = new EditorJS({
         tools:{
              header:Header,
            list: {

                class: List,
                inlineToolbar: true,
                config: {
                  defaultStyle: 'unordered'
                }
              },
              checklist: {
                class: Checklist,
                inlineToolbar: true,
              }, 
              
         },
        holder: 'editorjs',
        data:fileData?.document?JSON.parse(fileData.document):doc
      });
      ref.current=editor;
}
const OnSaveDocument=()=>{
  if (ref.current) {
    ref.current.save().then((outputData) => {
     
      updateDocument({document:JSON.stringify(outputData),
           _id:fileid
       }).then((res)=>{
        if (res) {
          
          toast("document updated !!")
        }
      }).catch((e)=>{
        toast("error occure here")
      })
    }).catch((error) => {
      console.log('Saving failed: ', error)
    });
    
    
  }
}

  return (
    <div>
        <div id='editorjs' className='mx-10'>
      
      </div>
    </div>
  )
}

export default Editor
