'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoMdClose } from 'react-icons/io';
import logo from '../public/Images/logo.svg';
import mobilelogo from '@/public/mobilelogo.svg';
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
<header className="w-full px-6 md:px-20 lg:px-56 py-4 flex justify-between items-center bg-transparent">
        {/* Logo */}
        <Image src={logo} alt="Hrishikesh Yoga" className='lg:block hidden' />
        <Image src={mobilelogo} alt="Hrishikesh Yoga" className='lg:hidden block' />

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 text-[#252324BF] comme-font font-medium text-base leading-6">
          <Link href="#home">About</Link>
          <Link href="#teacher">Yoga Teacher Training</Link>
          <Link href="#retreats">Yoga Retreats</Link>
          <Link href="#blog">Blog</Link>
          <Link
            href="#apply"
            className="bg-[#CC9F1F] text-white px-4 py-2 rounded transition"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile Icons */}
        <div className="md:hidden flex items-center space-x-4">
          <Link
            href="#apply"
            className="bg-[#CC9F1F] text-white px-4 py-2 rounded text-sm font-medium"
          >
            Apply Now
          </Link>
          <button onClick={() => setIsOpen(true)}>
            <RxHamburgerMenu size={24} className="text-[#252324]" />
          </button>
        </div>
      </header>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 flex justify-between items-center border-b border-gray-200">
          <Image src={logo} alt="Logo" />
          <button onClick={() => setIsOpen(false)}>
            <IoMdClose size={28} className="text-[#252324]" />
          </button>
        </div>
        <nav className="flex flex-col gap-6 p-6 text-[#252324BF] comme-font font-medium text-base">
          <Link href="#home" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="#teacher" onClick={() => setIsOpen(false)}>Yoga Teacher Training</Link>
          <Link href="#retreats" onClick={() => setIsOpen(false)}>Yoga Retreats</Link>
          <Link href="#blog" onClick={() => setIsOpen(false)}>Blog</Link>
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
