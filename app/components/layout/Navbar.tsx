"use client";
import React, { useContext, useState } from 'react'
import Link from 'next/link'
import MenuOverlay from './MenuOverlay';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { useAuth } from '@/app/context/AuthContext';



const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const { isAuthenticated } = useAuth();
    const { logout } = useAuth();


    return (
        <nav className="fixed mx-auto border border-[#2f1b4c] top-0 left-0 right-0 z-10 bg-indigo-800 bg-opacity-100">
            <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-20 py-2">
                <Link
                    href={"/"}
                    className="text-2xl md:text-3xl text-white font-semibold">
                    MyBlog
                </Link>
                <div className="mobile-menu block md:hidden">
                    {!navbarOpen ? (
                        <button
                            onClick={() => setNavbarOpen(true)}
                            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                        >
                            <Bars3Icon className="h-5 w-5" />
                        </button>
                    ) : (
                        <button
                            onClick={() => setNavbarOpen(false)}
                            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                        >
                            <XMarkIcon className="h-5 w-5" />
                        </button>
                    )}
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
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
                            {isAuthenticated ? (
                                <div className='flex gap-7'>
                                <Link href={'/profile'} className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">
                                    Profile
                                </Link>
                                <button className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white' onClick={logout}>Logout</button>
                                </div>
                            ) : (
                                <Link href={'/login'} className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">
                                    Login
                                </Link>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay /> : null}


        </nav>
    )
}

export default Navbar
