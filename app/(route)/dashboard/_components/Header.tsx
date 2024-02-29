import { Search } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div className=' flex justify-end'>
    <div className='flex outline outline-1 outline-gray-300 rounded-md p-2 m-1  hover:border-[2px] border-blue-500 hover:rounded-md'>
    <Search></Search>
      <input className=' outline-none' type='text' placeholder='search'></input>
    </div>
    </div>
  )
}

export default Header
