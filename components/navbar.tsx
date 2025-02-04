
import { ModeToggle } from './ui/togglebutton';
import Link from 'next/link';
import {  SignedOut, SignInButton ,SignedIn,UserButton} from '@clerk/nextjs';
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 shadow">

      {/* Left section: Links */}
      <div className="flex space-x-4">
        <h1 className="text-xl font-bold text-primary hover:scale-110 transition-all px-6 py-2 hover:text-purple-400 duration-300">Petshely</h1>
        <Link href='./' className='px-6 py-2 hover:shadow-[0_0_10px_5px_rgba(128,0,255,0.7)] rounded-full'>Home</Link>
        <Link href='/about'className='px-6 py-2 hover:shadow-[0_0_10px_5px_rgba(128,0,255,0.7)] rounded-full'>About</Link>
        <Link href="/pets" className="px-6 py-2 hover:shadow-[0_0_10px_5px_rgba(128,0,255,0.7)] rounded-full">Adopt</Link>
        <Link href="/blogs/add" className="px-6 py-2 hover:shadow-[0_0_10px_5px_rgba(128,0,255,0.7)] rounded-full">Blogs</Link>
        <Link href="/donate" className="px-6 py-2 hover:shadow-[0_0_10px_5px_rgba(128,0,255,0.7)] rounded-full">Donate</Link>
        <a href="/helpline" className="px-6 py-2 hover:shadow-[0_0_10px_5px_rgba(128,0,255,0.7)] rounded-full">Helpline</a>
      </div>

      {/* Right section: Mode Toggle and User Button */}
      <div className="ml-auto flex space-x-6">
        <ModeToggle  />
        <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
      </div>
    </nav>
  );
}
