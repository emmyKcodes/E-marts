"use client";

import Image from "next/image";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { LuBellRing } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 w-full border-b border-border bg-white/85">
      <div className="mx-auto flex items-center justify-between ml-4 md:ml-6 lg:ml-10 mr-4 md:mr-6 lg:mr-10 h-(--header-height) max-w-341.5">
        <Link
          href="/"
          className="inline-block focus:outline-none max-w-32.75 w-full -mt-1.5 md:-mt-1"
        >
          <Image
            src="/emart_logo.svg"
            alt="E-Marts"
            width={250}
            height={60}
            priority
            decoding="async"
            className="h-6 md:h-7.5 w-fit"
          />
        </Link>

        {/* Search */}
        <div className="hidden min-[1027px]:flex flex-1 justify-center px-8">
          <div className="relative w-100">
            <input
              type="text"
              placeholder="Search products, brands and categories..."
              aria-label="top-bar-search"
              autoComplete="off"
              name="search"
              className="w-full h-13 pl-4 pr-16 rounded-[30px] border-[3px] border-primary-light text-sm outline-none transition-all duration-200 placeholder:opacity-90 bg-transparent text-black focus:border-black"
            />

            <button
              aria-label="Search"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-black transition cursor-pointer"
            >
              <FiSearch size={20} />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Cart */}
          <button
            aria-label="Cart"
            className="relative hidden min-[1027px]:flex h-11 w-11 items-center justify-center rounded-full bg-primary hover:bg-primary-hover transition cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-ink"
            >
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>

            <span className="absolute right-0 -top-0.5 flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-semibold bg-[#1e3934] text-white">
              0
            </span>
          </button>

          <button
            aria-label="Notifications"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-primary hover:bg-primary-hover transition cursor-pointer"
          >
            <LuBellRing size={20} className="text-ink" />
          </button>
          <button className="flex items-center text-sm font-medium text-foreground hover:text-primary-light transition cursor-pointer">
            <span className="flex h-13 w-13 items-center justify-center rounded-full">
              <FaRegUserCircle size={24} className="text-[#3b3b3b]" />
            </span>
            <span className="text-ink font-light">Sign In / Up</span>
          </button>
        </div>
      </div>
    </header>
  );
}
