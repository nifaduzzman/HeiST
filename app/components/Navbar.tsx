import Link from 'next/link'
import React from 'react'
import ThemeToggle from './ThemeToggle'
import Navlink from './Navlink'

function Navbar() {
  const navLinks = [
    {
      name: "Home",
      href: "/",
    },{
      name: "Find Employee",
      href: "/find-employee",
    },{
      name: "Profile",
      href: "/profile",
    }
  ]
  return (
    <nav className='border-b border-blue-300/50 border-dashed  flex justify-between items-center h-16 px-24 md:px-20  bg-slate-300 dark:bg-slate-800 '>
      <h1 className='text-4xl '>
        <Link href='/'>
          HeiST
        </Link>
      </h1>
      <ul className='flex gap-20 '>
        {
          navLinks.map((link)=>(
           <Navlink key={link.name} link={link}/>
          ))
        }
      </ul>
      <ThemeToggle/>
    </nav>
  )
}

export default Navbar
