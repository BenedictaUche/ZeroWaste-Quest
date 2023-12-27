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

export const SidebarNavItem = ({ children, href, className, onClick }: { children: React.ReactNode, href: string, className?: string, onClick: (link: string) => void }) => {
    const pathname = usePathname();
    const isActive = pathname === href;
    const activeClasses = 'bg-lime-400 text-white';
    const inactiveClasses = 'text-gray-500 hover:bg-lime-400 hover:text-white';
    const classes = cn('flex items-center justify-start p-4 cursor-pointer', isActive ? activeClasses : inactiveClasses, className);

    const handleClick = () => {
        onClick(href);
    };

    return (
        <li className={classes} onClick={handleClick}>
            {children}
        </li>
    );
};

const SidebarNav = ({ children}: SidebarNav) => {
  return (
    <div className='bg-lime-300 h-min-screen'>
        <div >
            <aside>
                <ScrollArea className=''>
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

// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { cn } from "@/lib/utils";
// import { buttonVariants } from "@/components/ui/button";
// import { ScrollArea } from "./ui/scroll-area";

// interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
//   items: {
//     href: string;
//     title: string;
//   }[];
//   onItemClick: (href: string) => void;
// }

// //   interface ItemClick extends React.AllHTMLAttributes<HTMLElement> {

// //   }

// const SidebarNav = ({ className, items, onItemClick, ...props }: SidebarNavProps) => {
//   const pathname = usePathname();

//   return (
//     <nav
//       className={cn(
//         "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",
//         className
//       )}
//       {...props}
//     >
//       {items.map((item) => (
//         <Link
//               key={item.href}
//               onClick={() => onItemClick(item.href)}
//               className={cn(
//                   buttonVariants({ variant: "ghost" }),
//                   pathname === item.href
//                       ? "bg-muted hover:bg-muted"
//                       : "hover:bg-transparent hover:underline",
//                   "justify-start"
//               )} href={""}        >
//           {item.title}
//         </Link>
//       ))}
//     </nav>
//   );
// };

// export default SidebarNav;
