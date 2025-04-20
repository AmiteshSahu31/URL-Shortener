import Header from '@/components/header'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
        <main className='min-h-screen container'>
            <Header/>
            <Outlet/>
        </main>
        {/* footer */}
        <div className='p-10 mt-10 text-center bg-gray-800'>
          Made with Love by Amitesh Sahu
        </div>
    </div>
  )
}

export default AppLayout
