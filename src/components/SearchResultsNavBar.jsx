"use client";
import React, { useState } from "react";
import Image from "next/image";
import { HiOutlineMenu, HiUser } from "react-icons/hi";

import SearchForm from "./SearchForm";
import { mapSlugFromSearchTerm } from "@/utils/functions";
import { useRouter } from "next/navigation";
import Link from "next/link";

function SearchResultsNavBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const term = mapSlugFromSearchTerm(searchTerm);

    // Don't submit if a user doesn't provide a value or enters only a space
    if (!searchTerm.trim()) return;

    router.push(`/search?q=${term}`);
  };
  const handleClick = () => router.push("/");
  return (
    <div className="">
      <div className="wrapper-fluid grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-12 p-2 items-center gap-2 transition-all">
        <button className="sm:hidden">
          <HiOutlineMenu size={30} />
        </button>
        <Image
          onClick={handleClick}
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
          width={100}
          height={50}
          alt="Google Logo"
          className="grid-cols-2 cursor-pointer"
        />
        <div className="p-1 col-span-full order-last sm:col-span-3 lg:col-span-6 sm:-order-none">
          <SearchForm
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            onSubmit={handleSubmit}
            variant={2} // 1 is default
          />
        </div>
        <div className="flex justify-end lg:col-span-5">
          <div className="bg-slate-200 flex items-center justify-center py-1.5 px-2 rounded-full">
            <HiUser size={30} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResultsNavBar;
