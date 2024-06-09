import Link from 'next/link'
import React from 'react'

const MenuOverlay = () => {
  return (
    <ul className="flex flex-col py-4 items-center">
      <li>
            <Link href={'/'} className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">
                Home
            </Link>
        </li>
        <li>
            <Link href={'/posts'} className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">
                Posts
            </Link>
        </li>
        <li>
            <Link href={'/about'} className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">
                About
            </Link>
        </li>
        <li>
            <Link href={'/login'} className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">
                Login
            </Link>
        </li>
    </ul>
  )
}

export default MenuOverlay
