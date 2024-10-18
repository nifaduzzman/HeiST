"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'


function Navlink({link}:{
  link:{
    name:string;
    href:string;
  }}) {
    const pathName = usePathname()
  return (
    <li key={link.name}>
    <Link className={ `${pathName === link.href ? "text-sky-500" : ""} text-xl md:px-4  hover:text-sky-500`} href={link.href}>
      {link.name}
    </Link>

  </li>
  )
}

export default Navlink
