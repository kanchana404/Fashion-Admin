import Image from "next/image";
import React from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="flex items-center p-6 mt-6">
      <Link href="/">
        <Image
          className="ml-4"
          src="/brand.png"
          alt="logo"
          width={150}
          height={150}
        />
      </Link>

      <div className="flex-1 hidden lg:flex justify-center ml-4">
        <ul className="flex h-full text-black gap-12">
          {NAV_LINKS.map((link) => (
            <li key={link.key} className="hover:text-black">
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <SignedOut>
        <div className="lg:ml-auto mr-4 -mt-2 hidden lg:block">
          <Link href={"/sign-up"}>
            <Button className="w-32">SIGN UP</Button>
          </Link>
        </div>
        <div className="ml-auto lg:hidden">
          <Sheet>
            <SheetTrigger>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <nav className="mt-10">
                  <ul>
                    {NAV_LINKS.map((link) => (
                      <li
                        key={link.key}
                        className="mb-5 text-gray-500 hover:text-black"
                      >
                        <Link href={link.href}>{link.label}</Link>
                      </li>
                    ))}
                  </ul>

                  <Link href={"/sign-up"}>
                    <Button className="w-32">SIGN UP</Button>
                  </Link>
                </nav>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </SignedOut>

      <SignedIn>
        <div className="lg:ml-auto mr-4 -mt-2 hidden lg:block">
          <UserButton />
        </div>
        <div className="flex ml-auto lg:hidden">
          <div className="mr-4 mt-1"> <UserButton /></div>
       
          <Sheet>
            <SheetTrigger>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <nav className="mt-10">
                  <ul>
                    {NAV_LINKS.map((link) => (
                      <li
                        key={link.key}
                        className="mb-5 text-gray-500 hover:text-black"
                      >
                        <Link href={link.href}>{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                
                </nav>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </SignedIn>
    </div>
  );
};

export default Navbar;
