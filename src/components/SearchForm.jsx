"use client";
import React, { useRef } from "react";
import { TbSearch } from "react-icons/tb";
import { IoCloseSharp } from "react-icons/io5";
import Mic from "@/assets/icons/Mic";
import Camera from "@/assets/icons/Camera";

function SearchForm({ searchTerm, setSearchTerm, onSubmit }) {
  const searchRef = useRef();
  const handleClear = () => {
    setSearchTerm("");
    searchRef.current.focus();
  };

  return (
    <div className="rounded-full border-2 border-gray-200 px-4 w-full max-w-2xl hover:shadow-google focus-within:shadow-google overflow-hidden">
      <div className="flex items-center">
        <div className="py-1">
          <TbSearch className="text-gray-400" size={20} />
        </div>
        <form
          onSubmit={onSubmit}
          className="py-1 px-4 w-full overflow-hidden flex justify-center"
        >
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            ref={searchRef}
            className="w-full focus:outline-none py-2 bg-transparent"
            type="text"
            name="search"
            title="Search"
            value={searchTerm}
          />
        </form>
        <div className="place-self-stretch flex ">
          {searchTerm && (
            <button
              onClick={handleClear}
              className="focus:outline-none focus:brightness-75 focus:scale-90 focus:transition-transform border-r px-2"
            >
              <IoCloseSharp size={20} />
            </button>
          )}
          <button className="focus:outline-none focus:brightness-75 focus:scale-90 focus:transition-transform px-2">
            <Mic />
          </button>
          <button className="focus:outline-none focus:brightness-75 focus:scale-90 focus:transition-transform px-2">
            <Camera />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchForm;
