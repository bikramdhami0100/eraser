"use client"
import { Toaster } from '@/components/ui/sonner';
import { api } from '@/convex/_generated/api';
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useConvex } from "convex/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import SideNav from './_components/SideNav';

export default function DashBoardLayout({ children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const router=useRouter();
    const {user}:any= useKindeBrowserClient();
    const convex=useConvex();
    useEffect (()=>{
     user&& checkTeams();
    },[user]);
   const checkTeams=async()=>{
     const result=await convex.query(api.teams.getTeam,{email:user?.email})
     if (!result?.length) {
          router.push("team/create")
        }
   }
    
  return (
    <>
    
     <div className=' grid grid-cols-4'>
         <div>
          <SideNav></SideNav>
         </div>
         <div className=' grid-cols-3'>
         {children}
         </div>
   
   
   </div>
    </>
  );
}
