import React, { useState } from 'react'
import { ScrollArea } from './ui/scroll-area'
import Logo from '@/public/logo.svg'
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { PiHouse, PiUsers, PiGift } from "react-icons/pi";
import { TfiCup } from "react-icons/tfi";

import { cn } from '@/lib/utils';




interface SidebarNav {
    children: React.ReactNode
}

const data = [
    {
        name: 'Home',
        icon: <PiHouse className='w-full h-full text-gray-500' />,
        href: '/dashboard'
    },
    {
        name: 'Challenges',
        icon: <TfiCup className='w-full h-full text-gray-500' />,
        href: '/dashboard/challenges'
    },
    {
        name: 'Community',
        icon: <PiUsers className='w-full h-full text-gray-500' />,
        href: '/dashboard/community'
    },
    {
        name: 'Rewards',
        icon: <PiGift className='w-full h-full text-gray-500' />,
        href: '/dashboard/rewards'
    }
]

export const SidebarNavItem = ({ children, href, className, onClick }: { children: React.ReactNode, href: string, className?: string, onClick: (link: string) => void }) => {
    const pathname = usePathname();
    const isActive = pathname === href;
    const activeClasses = 'bg-lime-400 text-white';
    const inactiveClasses = 'text-gray-500 hover:bg-lime-400 hover:text-white';
    const classes = cn('flex items-center justify-start p-4 cursor-pointer', isActive ? activeClasses : inactiveClasses, className);

    const handleClick = () => {
        onClick(href); // Pass the href to the callback
    };

    return (
        <li className={classes} onClick={handleClick}>
            {children}
        </li>
    );
};


const SidebarNav = ({ children}: SidebarNav) => {
  return (
    <div>
        <div className='bg-lime-300'>
            <aside>
                <ScrollArea className='h-screen'>
                    <div className='flex flex-col'>
                        <div className='flex flex-col items-center justify-center p-4'>
                            <div className=''>
                                <Image src={Logo} alt='Logo' className=' w-36 h-36' />
                            </div>
                        </div>
                        <nav className='flex-1'>
                            <ul>
                                {children}
                            </ul>

                        </nav>
                    </div>
                </ScrollArea>
            </aside>
        </div>
    </div>
  )
}

export default SidebarNav
