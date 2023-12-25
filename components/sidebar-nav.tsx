import React from 'react'
import { ScrollArea } from './ui/scroll-area'


interface SidebarNav {
    children: React.ReactNode
}

const SidebarNav = ({ children}: SidebarNav) => {
  return (
    <div>
        <div>
            <aside>
                <ScrollArea className='h-screen'>
                    <div className='flex flex-col'>
                        <div className='flex flex-col items-center justify-center p-4'>
                            <div className='w-16 h-16 rounded-full bg-gray-500'></div>
                            <h1 className='text-2xl font-bold mt-2'>John Doe</h1>
                            <h2 className='text-sm font-medium text-gray-500'>Administrator</h2>
                        </div>
                        <nav className='flex-1'>
                            <ul>
                                <li className='flex items-center justify-start p-4'>
                                    <div className='w-6 h-6 mr-4'>
                                        <svg className='w-full h-full text-gray-500' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
                                        </svg>
                                    </div>
                                    <span className='text-sm font-medium text-gray-500'>Dashboard</span>
                                </li>
                                <li className='flex items-center justify-start p-4'>
                                    <div className='w-6 h-6 mr-4'>
                                        <svg className='w-full h-full text-gray-500' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
                                        </svg>
                                    </div>
                                    <span className='text-sm font-medium text-gray-500'>Dashboard</span>
                                </li>
                                <li className='flex items-center justify-start p-4'>
                                    <div className='w-6 h-6 mr-4'>
                                        <svg className='w-full h-full text-gray-500' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
                                        </svg>
                                    </div>
                                    <span className='text-sm font-medium text-gray-500'>Dashboard</span>
                                </li>
                                <li className='flex items-center justify-start p-4'>
                                    <div className='w-6 h-6 mr-4'>
                                        <svg className='w-full h-full text-gray-500' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
                                        </svg>
                                    </div>
                                    <span className='text-sm font-medium text-gray-500'>Dashboard</span>
                                </li>
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
