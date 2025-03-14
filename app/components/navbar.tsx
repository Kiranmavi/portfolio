'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useGlobalState } from '../globalState';
import React from 'react';

export default function Navbar() {
  const [isOpen, setIsOpenHome] = useState(false);
  const navItems = ['About', 'Projects', 'Skills', 'Contact'];
  const { setIsOpen } = useGlobalState();
  const [isContact,setIsContact] = useState(false);

  const handleNavClick = (item: string) => {
    if (item === 'Contact') {
      setIsOpen(true);
      setIsContact(true);
    }else{
      setIsContact(false);
    }
    setIsOpenHome(false);
  };

  return (
    <React.Fragment>
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-sm dark:bg-gray-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
         
            <Link href="/" className="text-2xl font-bold">
              Your Name
            </Link>
         

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className="hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpenHome(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-blue-500 hover:bg-gray-100"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Icon */}
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Close Icon */}
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
            {isContact && <></>}
      {/* Mobile Menu */}
        {/* <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item)}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:text-blue-500 hover:bg-gray-100"
            >
              {item}
            </button>
          ))}
        </div> */}
      
    </nav>
    </React.Fragment>
  );
} 