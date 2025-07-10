"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-amber-600 text-white dark:bg-amber-700 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto relative px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Brand */}
          <Link href="/" className="text-2xl font-bold">
            CollegeBooking
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 font-medium">
            <Link href="/">Home</Link>
            <Link href="/colleges">Colleges</Link>
            <Link href="/admission">Admission</Link>
            <Link href="/my-college">My College</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden min-w-[16rem] absolute top-[64px] right-0  bg-amber-500 dark:bg-amber-600 flex flex-col px-4 pb-4 space-y-2 
    transition-all duration-300 ease-in-out transform 
    ${
      isOpen
        ? "opacity-100 translate-y-0"
        : "opacity-0 -translate-y-4 pointer-events-none"
    }`}
      >
        <Link href="/" onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <Link href="/colleges" onClick={() => setIsOpen(false)}>
          Colleges
        </Link>
        <Link href="/admission" onClick={() => setIsOpen(false)}>
          Admission
        </Link>
        <Link href="/my-college" onClick={() => setIsOpen(false)}>
          My College
        </Link>
      </div>
    </nav>
  );
}
