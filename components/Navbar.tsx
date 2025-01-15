"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="w-full max-w-[75rem] flex justify-between items-center gap-8 mx-auto">
      <div>
        <Image
          src={"/assets/logo.svg"}
          width={100}
          height={100}
          alt="logo"
          className={`w-[111px] h-[43px] lg:w-[192px] lg:h-[77px]`}
        />
      </div>

      <div>
        {/* Hamburger Menu */}
        <div className="w-fit flex flex-col lg:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Image
                src={"/assets/menu-icon.svg"}
                width={24}
                height={24}
                alt="menu"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[236px] max-w-[90%] h-full mt-6 lg:hidden bg-white p-0 rounded-none">
              <DropdownMenuItem
                className={`w-full bg-white rounded-none px-4 py-2`}
              >
                <Image
                  src={"/assets/close-icon.svg"}
                  width={24}
                  height={24}
                  alt="close menu"
                  className="ml-auto cursor-pointer"
                />
              </DropdownMenuItem>
              <div className="w-full flex flex-col items-start gap-0 text-black">
                <DropdownMenuItem
                  className={`w-full bg-white rounded-none px-4 py-2 hover:bg-primary-brown hover:text-accent-yellow ${
                    pathname === "/"
                      ? "text-accent-yellow bg-primary-brown hover:bg-primary-brown"
                      : ""
                  }`}
                >
                  <Link href="/" className={`w-full text-base font-normal`}>
                    Home
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className={`w-full bg-white rounded-none px-4 py-2 hover:bg-primary-brown hover:text-accent-yellow ${
                    pathname === "/about-us"
                      ? "text-accent-yellow bg-primary-brown"
                      : ""
                  }`}
                >
                  <Link
                    href="/about-us"
                    className={`w-full text-base font-normal  `}
                  >
                    About Us
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className={`w-full bg-white rounded-none px-4 py-2 hover:bg-primary-brown hover:text-accent-yellow ${
                    pathname === "/uganda"
                      ? "text-accent-yellow bg-primary-brown"
                      : ""
                  }`}
                >
                  <Link
                    href="/uganda"
                    className={`w-full text-base font-normal  `}
                  >
                    Uganda
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className={`w-full bg-white rounded-none px-4 py-2 hover:bg-primary-brown hover:text-accent-yellow ${
                    pathname === "/safaris"
                      ? "text-accent-yellow bg-primary-brown"
                      : ""
                  }`}
                >
                  <Link
                    href="/safaris"
                    className={`w-full text-base font-normal  `}
                  >
                    Safaris
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className={`w-full bg-white rounded-none px-4 py-2 hover:bg-primary-brown hover:text-accent-yellow ${
                    pathname === "/book-now"
                      ? "text-accent-yellow bg-primary-brown"
                      : ""
                  }`}
                >
                  <Link
                    href="/book-now"
                    className={`w-full text-base font-normal  `}
                  >
                    Book Now
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className={`w-full bg-white rounded-none px-4 py-2 hover:bg-primary-brown hover:text-accent-yellow ${
                    pathname === "/contact-us"
                      ? "text-accent-yellow bg-primary-brown"
                      : ""
                  }`}
                >
                  <Link
                    href="/contact-us"
                    className={`w-full text-base font-normal  `}
                  >
                    Contact Us
                  </Link>
                </DropdownMenuItem>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="w-full hidden lg:flex items-center gap-6 xl:gap-12 text-white">
          <Link
            href="/"
            className={`text-base font-bold border-b-2 border-transparent hover:text-accent-yellow hover:border-accent-yellow ${
              pathname === "/"
                ? "text-accent-yellow border-b-2 border-accent-yellow"
                : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className={`text-base font-bold border-b-2 border-transparent hover:text-accent-yellow hover:border-accent-yellow ${
              pathname === "/about-us"
                ? "text-accent-yellow border-accent-yellow"
                : ""
            }`}
          >
            About Us
          </Link>
          <Link
            href="/uganda"
            className={`text-base font-bold border-b-2 border-transparent hover:text-accent-yellow hover:border-accent-yellow ${
              pathname === "/uganda"
                ? "text-accent-yellow border-accent-yellow"
                : ""
            }`}
          >
            Uganda
          </Link>
          <Link
            href="/safaris"
            className={`text-base font-bold border-b-2 border-transparent hover:text-accent-yellow hover:border-accent-yellow ${
              pathname === "/safaris"
                ? "text-accent-yellow border-accent-yellow"
                : ""
            }`}
          >
            Safaris
          </Link>
          <Link
            href="/book-now"
            className={`text-base font-bold border-b-2 border-transparent hover:text-accent-yellow hover:border-accent-yellow ${
              pathname === "/book-now"
                ? "text-accent-yellow border-accent-yellow"
                : ""
            }`}
          >
            Book Now
          </Link>
          <Link
            href="/contact-us"
            className={`text-base font-bold border-b-2 border-transparent hover:text-accent-yellow hover:border-accent-yellow ${
              pathname === "/contact-us"
                ? "text-accent-yellow border-accent-yellow"
                : ""
            }`}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
