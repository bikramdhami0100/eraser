"use client"
import React, { useEffect } from 'react'

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import Image from 'next/image'
import { ChevronDown, LogOut, Settings, User, Users } from 'lucide-react'
import { LogoutLink, useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { useConvex } from 'convex/react'
import { api } from '@/convex/_generated/api'
  
function TopSection() {
  
    const menu=[
        {
            id:1,
            name:"Team Create",
            path:"/team/create",
            icon:Users
        },
        {
            id:1,
            name:"Setting",
            path:"",
            icon:Settings
        }
    ]
    const {user}:any=useKindeBrowserClient();
    const convex=useConvex();
    useEffect(() => {
      
    getTeamList();
     
    }, [user])
    
    const getTeamList=async()=>{
      const result=await convex.query(api.teams.getTeam,{email:user?.email});
      console.log("teamlist ", result)
    }
  return (
    <div>
       <Popover>
  <PopoverTrigger>
    <div className=' flex justify-center items-center bg-slate-300 hover:bg-slate-400 rounded-lg p-1'>
    <Image src={"/vercel.svg"} alt='image' height={100} width={100} className=' h-[40px] w-[20px]'></Image>
    <h1>Teams</h1>
    <ChevronDown></ChevronDown>
    </div>
  </PopoverTrigger>
  <PopoverContent>
     <div>
        <h1>Teams Name</h1>
         <hr className=" bg-black  text-black" />
        <div>
            {
                menu.map((item,index)=>{
                   return <div  className=' cursor-pointer flex gap-1 items-center  hover:bg-slate-300 rounded-md p-2' key={index}>
                      <item.icon className=' h-4 w-4'>

                      </item.icon>
                     <h1>{item.name}</h1>
                     
                    </div>
                })
            }
            <LogoutLink>
            <div className=' flex  items-center ml-1 hover:bg-slate-300 p-2 rounded-md'>
            <LogOut className=' h-4 '></LogOut>
            <h1>Logout</h1>
            </div>
            </LogoutLink>

            <div className=' flex  items-center ml-1 hover:bg-slate-300 p-2 rounded-md'>
             <Image  src={user?.picture} alt='image' height={30} width={30} className=' rounded-full gap-2 justify-center items-center'></Image>
             <div className=' ml-1 text-[12px] font-bold justify-center items-center '>
             <p>{user?.given_name} {user?.family_name}</p>
             <p className=' font-extralight'>{user?.email}</p>
      
             </div>
            </div>
        </div>
     </div>
  </PopoverContent>
</Popover>

    </div>
  )
}

export default TopSection
