'use client';

import Dropdown from '@/ui/Dropdown';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';

let dropdownItems = [
  {
    label: 'Profile',
    value: 'profile',
  },
  {
    label: 'Settings',
    value: 'settings',
  },
  {
    label: 'Logout',
    value: 'logout',
  },
];

export default function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    window.onscroll = function () {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
      setPrevScrollPos(currentScrollPos);
    };
  }, [prevScrollPos]);

  return (
    <div
      className={`padding-alignment fixed top-0 z-10 w-full bg-primary shadow-md ${
        showNavbar ? '' : 'top-[-100px]'
      }`}
    >
      <div className="flex items-center justify-between px-4 py-3">
        {/* Company Name */}
        <Link href={'/'}>
          <div className="text-3xl font-bold uppercase tracking-wide text-white">
            OTI
          </div>
        </Link>

        {/* User Icon and Dropdown Menu */}
        <div className="relative flex items-center">
          <button className="flex items-center p-2 focus:outline-none">
            <FaUser className="h-6 w-6 text-white" />
          </button>
          <Dropdown
            items={dropdownItems}
            maxWidth={75}
            title=""
            onChange={(value) => console.log(value)}
            containerStyle="ml-4"
          />
        </div>
      </div>
    </div>
  );
}
