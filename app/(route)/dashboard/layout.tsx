"use client"
import { Toaster } from '@/components/ui/sonner';
import { api } from '@/convex/_generated/api';
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useConvex } from "convex/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import SideNav from './_components/SideNav';
import { ContextFile } from '@/app/contextApi/ContextFile';
import { ThemeProvider } from '@/components/theme-provider';

export default function DashBoardLayout({ children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [FileList,setFileList]=useState(undefined);
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
     <ContextFile.Provider value={{FileList,setFileList}}>
     <div className=' grid grid-cols-4'>
         <div>
          <SideNav></SideNav>
         </div>
         <div className=' col-span-3'>
          <ThemeProvider
           attribute="class"
           defaultTheme="system"
           enableSystem
           disableTransitionOnChange
          >
         {children}
         </ThemeProvider>
         </div>
   
   
   </div>
   </ContextFile.Provider>
    </>
  );
}
