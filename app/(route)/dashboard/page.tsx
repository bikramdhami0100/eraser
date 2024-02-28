"use client"
import { Button } from '@/components/ui/button'
import { api } from '@/convex/_generated/api';
import { LogoutLink, useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { useConvex, useMutation, useQuery } from 'convex/react';
import React, { useEffect } from 'react'

function Dashboard() {
  const {user}:any=useKindeBrowserClient();
 const convex=useConvex();

 const createUser=useMutation(api?.user.createTask);
  useEffect(() => {
    
  if (user) {
 checkUser();
  
  }
    
  }, [user])
  const checkUser=async()=>{
     const result= await convex.query(api.user.getTask,{email:user?.email});

     if (!result.length) {
      createUser({email:user?.email,name:user?.given_name,img:user?.picture}).then((res)=>console.log(res))
     }
  }
  return (
    <div>
       dashoboard
       <Button>
       <LogoutLink>Logout</LogoutLink>
       </Button>
    </div>
  )
}

export default Dashboard
