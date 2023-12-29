import React, { useState} from 'react'
import { MainNav } from '@/components/main-nav'
import { UserNav } from '@/components/user-nav'
import { Search } from '@/components/search'
import Logo from '@/public/logo.svg'
import Image from 'next/image'
import ModeToggle from './mode-toggle'



const Navbar = () => {

  return (
    <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <div className="flex-shrink-0">
              <Image src={Logo} alt="Zerowaste-quest logo" className='h-24 w-24' />
            </div>
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <Search />
              <UserNav />
            </div>
            <ModeToggle />
          </div>
        </div>
  )
}

export default Navbar
