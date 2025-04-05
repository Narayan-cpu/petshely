"use client";
import { useState } from "react";
import { ModeToggle } from "./ui/togglebutton";
import Link from "next/link";
import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
import { Menu, X } from "lucide-react"; // Icons for mobile menu

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4 shadow bg-white dark:bg-gray-900 flex justify-between items-center">
      {/* Left section: Brand & Hamburger */}
      <div className="flex items-center">
        <h1 className="text-xl font-bold text-primary hover:scale-110 transition-all px-6 py-2 hover:text-purple-400 duration-300">
          Petshely
        </h1>

        {/* Mobile menu toggle button */}
        <button
          className="md:hidden text-gray-700 dark:text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Navigation Links - Shown in Desktop */}
      <div className="hidden md:flex space-x-4">
        <Link
          href="/"
          className="px-4 py-2 hover:shadow-[0_0_10px_5px_rgba(128,0,255,0.7)] rounded-full"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="px-4 py-2 hover:shadow-[0_0_10px_5px_rgba(128,0,255,0.7)] rounded-full"
        >
          About
        </Link>
        <Link
          href="/pets"
          className="px-4 py-2 hover:shadow-[0_0_10px_5px_rgba(128,0,255,0.7)] rounded-full"
        >
          Adopt
        </Link>
        <Link
          href="/blogs/add"
          className="px-4 py-2 hover:shadow-[0_0_10px_5px_rgba(128,0,255,0.7)] rounded-full"
        >
          Blogs
        </Link>
        <Link
          href="/donate"
          className="px-4 py-2 hover:shadow-[0_0_10px_5px_rgba(128,0,255,0.7)] rounded-full"
        >
          Donate
        </Link>
        <a
          href="/helpline"
          className="px-4 py-2 hover:shadow-[0_0_10px_5px_rgba(128,0,255,0.7)] rounded-full"
        >
          Helpline
        </a>
      </div>

      {/* Right section: Mode Toggle and User Button */}
      <div className="flex items-center space-x-4">
        <ModeToggle />
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-md md:hidden flex flex-col space-y-2 py-4">
          <Link
            href="/"
            className="px-6 py-2 hover:bg-gray-200 dark:hover:bg-gray-800"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="px-6 py-2 hover:bg-gray-200 dark:hover:bg-gray-800"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/pets"
            className="px-6 py-2 hover:bg-gray-200 dark:hover:bg-gray-800"
            onClick={() => setIsOpen(false)}
          >
            Adopt
          </Link>
          <Link
            href="/blogs/add"
            className="px-6 py-2 hover:bg-gray-200 dark:hover:bg-gray-800"
            onClick={() => setIsOpen(false)}
          >
            Blogs
          </Link>
          <Link
            href="/donate"
            className="px-6 py-2 hover:bg-gray-200 dark:hover:bg-gray-800"
            onClick={() => setIsOpen(false)}
          >
            Donate
          </Link>
          <a
            href="/helpline"
            className="px-6 py-2 hover:bg-gray-200 dark:hover:bg-gray-800"
            onClick={() => setIsOpen(false)}
          >
            Helpline
          </a>
        </div>
      )}
    </nav>
  );
}
