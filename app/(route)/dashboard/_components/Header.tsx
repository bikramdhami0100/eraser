import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { MoonIcon, Search, SunIcon, ZoomIn } from 'lucide-react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import React from 'react'


function Header({user}:any) {

  const { setTheme } = useTheme()

  return (
    <div className=' flex justify-end'>
    <div className='flex outline outline-1 outline-gray-300 rounded-md p-2 m-1  hover:border-[2px] border-blue-500 hover:rounded-md'>
    <Search></Search>
      <input className=' outline-none' type='text' placeholder='search'></input>
    </div>
    <div>
      <Image  alt='image' src={user?.picture}  height={40} width={40} className=' w-[40px] h-[40px]  mt-1 rounded-full'/>
    </div>
    <div className=' mt-1 mx-1'>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    </div>
    </div>
  )
}

export default Header
