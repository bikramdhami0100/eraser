"use client"
import { Toaster } from '@/components/ui/sonner';
import { api } from '@/convex/_generated/api';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { useMutation } from 'convex/react';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { toast } from 'sonner';

function CreateTeam() {
    const [teamName,setTeamName]=useState("");
    const router=useRouter();
    const {user}:any =useKindeBrowserClient();
    const createTeam=useMutation(api.teams.createTeams)
     const createNewTeam=()=>{
       createTeam({
        teamName:teamName,
        createdBy:user?.email
       }).then((res)=>{
        console.log(res);
        if (res) {
            toast("team is created successfully !!")
          router.push("/dashboard");
         
        }
       })
       
     }
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">

      <div className="max-w-md p-6 bg-white shadow-md rounded-md">
        <div className="flex items-center justify-center">
          <Image src="/vercel.svg" alt="image" height={100} width={100} />
        </div>
        <h1 className="text-2xl font-semibold mt-4">What should we call our team?</h1>
        <p className="text-gray-600 mt-2">You can always change later from settings.</p>
        <div className="mt-4">
          <p className="text-lg font-medium mb-2">Create Teams</p>
          <input 
             onChange={(e)=>{
                setTeamName(e.target.value)
             }}
            type="text" 
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400"
            placeholder="Enter team name"
          />
          <button onClick={()=>{
             createNewTeam()
          }} disabled={!(teamName&&teamName.length>0)} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400">Create</button>
        </div>
      </div>
      <Toaster></Toaster>
    </div>
  )
}

export default CreateTeam
