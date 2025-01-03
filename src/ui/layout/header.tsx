'use client'

// import ThemeSwitcher from '@/ui/themeSwicher'
import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { AddNew } from '@/components/addNew'

export const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className='bg-gradient-to-r from-blue-100 from-33% via-blue-400 via-33% to-blue-100 to-33%'>
      <div className='py-5 container flex justify-between items-center '>
        {/* <ThemeSwitcher /> */}
        <div className='md:block hidden'/>
        <h1 className='font-semibold text-4xl text-center drop-shadow-md text-white'>
          News
        </h1>
        <button
          className='bg-blue-400 px-4 py-2 rounded-md text-white text-base font-semibold'
          onClick={() => setIsOpen(true)}
        >
          add new
        </button>
      </div>
      <AnimatePresence>
        {isOpen && <AddNew OnClick={() => setIsOpen(!isOpen)} />}
      </AnimatePresence>
    </header>
  )
}
