import React from 'react'
import SidebarNav from '@/components/sidebar-nav'


interface dashboardProps {
  children: React.ReactNode
}

const dashboard = ({ children}: dashboardProps) => {
  return (
    <div className='bg-gray-100 h-screen'>
      <div className='flex flex-row'>
        <SidebarNav children={undefined} />
        <div className='flex-1'>
          <div className='flex flex-row items-center justify-between p-4'>
            <div className='flex flex-row items-center justify-start'>
              <div className='w-6 h-6 mr-4'>
                <svg className='w-full h-full text-gray-500' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
                </svg>
              </div>
              <h1 className='text-2xl font-bold'>Dashboard</h1>
            </div>
            <div className='flex flex-row items-center justify-end'>
              <div className='w-6 h-6 mr-4'>
                <svg className='w-full h-full text-gray-500' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
                </svg>
              </div>
              <h1 className='text-2xl font-bold'>Dashboard</h1>
            </div>
          </div>
          <div className='p-4'>
            <div className='bg-white rounded-lg shadow-lg p-4'>
              <h1 className='text-xl font-bold'>Dashboard</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default dashboard
