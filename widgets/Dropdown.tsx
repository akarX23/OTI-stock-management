'use client';

import React, { useEffect, useRef, useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';

interface DropdownItem {
  label: string;
  value: any;
}

interface DropdownProps {
  items: DropdownItem[];
  onChange: (value: any) => void;
  title: string;
  maxWidth: number | string;
  initVal?: string;
  containerStyle?: string;
}

const Dropdown = ({
  items,
  onChange,
  title,
  maxWidth,
  initVal,
  containerStyle,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currVal, setCurrVal] = useState<string>(initVal || '');

  const containerRef = useRef<HTMLDivElement>(null);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`relative inline-block ${containerStyle}`}
      ref={containerRef}
    >
      <div
        className="focus:shadow-outline-gray flex cursor-pointer items-center rounded-md bg-gray-700 p-2 text-sm font-medium text-white focus:border-gray-700 focus:outline-none active:bg-gray-800"
        onClick={toggle}
      >
        <p>{title}</p>
        <FaCaretDown className="ml-1 h-4 w-4" />
      </div>
      <div
        className={`linear absolute right-0 mt-2 origin-top-right transform rounded-md shadow-lg transition-transform duration-[350ms] ${
          isOpen ? 'scale-100' : 'scale-0'
        } z-30`}
      >
        <div
          className="w-96 rounded-md bg-gray-200 py-1 shadow-sm"
          style={{ maxWidth }}
        >
          {items.map((item, index) => (
            <React.Fragment key={item.value}>
              <div
                className={`block cursor-pointer px-2 py-2 text-sm text-black ${
                  currVal === item.value ? 'bg-gray-500' : 'hover:bg-gray-400'
                } transition duration-[400ms] ease-in-out focus:outline-none`}
                onClick={() => {
                  toggle();
                  setCurrVal(item.value);
                  onChange(item.value);
                }}
              >
                {item.label}
              </div>
              {index < items.length - 1 && (
                <div className="border-t border-gray-400" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
