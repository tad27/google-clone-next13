"use client";
import React, { useState } from "react";
import { TbCamera, TbMicrophone, TbSearch } from "react-icons/tb";
import { IoCloseSharp } from "react-icons/io5";
import Mic from "@/assets/icons/Mic";
import Camera from "@/assets/icons/Camera";
import { useRouter } from "next/navigation";

function SearchForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(searchTerm);
    router.push(`/search?term=${searchTerm}`);
  };
  const handleClear = (e) => {
    setSearchTerm("");
  };
  return (
    <div className="rounded-full border-2 border-gray-200 px-4 w-full max-w-2xl hover:shadow-google focus-within:shadow-google overflow-hidden">
      <div className="flex items-center">
        <div className="py-1">
          <TbSearch className="text-gray-400" size={20} />
        </div>
        <form
          onSubmit={handleSubmit}
          className="py-1 px-4 w-full overflow-hidden flex justify-center"
        >
          <input
            onChange={handleChange}
            className="w-full focus:outline-none py-2 bg-transparent"
            type="text"
            name="search"
            title="Search"
            value={searchTerm}
          />
        </form>
        <div className="place-self-stretch flex ">
          {searchTerm && (
            <button onClick={handleClear} className="border-r px-2">
              <IoCloseSharp size={20} />
            </button>
          )}
          <button className="px-2">
            <Mic />
          </button>
          <button className="px-2">
            <Camera />
            {/* <TbCamera size={20} /> */}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchForm;
