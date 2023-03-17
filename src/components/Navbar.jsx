import Link from "next/link";
import React from "react";
import { TbGridDots } from "react-icons/tb";

function Navbar() {
  return (
    <header className="p-1.5 h-14 flex items-center border-b border-gray-100">
      <div className="flex gap-4 pl-4 text-[#202124]">
        <Link
          className="hover:underline ease text-sm p-1.5"
          href="https://about.google/?fg=1&utm_source=google-GB&utm_medium=referral&utm_campaign=hp-header"
        >
          About
        </Link>
        <Link
          className="hover:underline ease text-sm p-1.5"
          href="https://store.google.com/GB?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-GB"
        >
          Store
        </Link>
      </div>
      <div className="flex-grow flex justify-end items-center gap-2">
        <div className="flex gap-4">
          <Link
            className="hover:underline ease text-sm"
            href="https://mail.google.com/mail/&ogbl"
          >
            Gmail
          </Link>
          <Link
            className="hover:underline ease text-sm"
            href="https://www.google.co.uk/imghp?hl=en&ogbl"
          >
            Images
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <div
            aria-label="Google Aps"
            title="Google Apps"
            tabIndex={0}
            className="hover:bg-gray-100 transition-colors p-s2 rounded-full cursor-pointer"
          >
            <TbGridDots className="text-4xl p-2" />
          </div>
          <Link
            href={"/"}
            className="bg-blue-600 hover:bg-blue-500 transition-colors px-6 font-semibold text-slate-100 py-2 rounded-md whitespace-nowrap"
          >
            Sign in
          </Link>
        </div>
      </div>

      {/* Use <nav></nav> for internal links like "ALL", "Images" */}
    </header>
  );
}

export default Navbar;
