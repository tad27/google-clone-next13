"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { mapSlugFromSearchTerm } from "@/utils/functions";
import SearchForm from "@/components/SearchForm";
import Button from "@/components/Button";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const RANDOM_WORD_API = "https://random-word-api.herokuapp.com/word";

  const handleSubmit = (e) => {
    e.preventDefault();
    const term = mapSlugFromSearchTerm(searchTerm);

    // Don't submit if a user doesn't provide a value or enters only a space
    if (!searchTerm.trim()) return;

    router.push(`/search?q=${term}`);
  };

  const handleRandomSearch = async () => {
    const res = await fetch(RANDOM_WORD_API);
    const data = await res.json();

    if (!data) return;
    router.push(`/search?q=${data[0]}`);
  };

  return (
    <main className="flex-grow flex items-center justify-center pt-24 sm:p-0">
      <div className="flex flex-col gap-6 items-center justify-center -translate-y-14 w-full px-4">
        {/* <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png" /> */}
        <Image
          className=""
          src={
            "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          }
          alt="Google Logo"
          width={300}
          height={100}
        />
        <SearchForm
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onSubmit={handleSubmit}
        />
        <div className="flex flex-wrap items-center justify-center gap-2">
          <Button onClick={handleSubmit}>Google Search</Button>
          <Button onClick={handleRandomSearch}>I'm Feeling Lucky</Button>
        </div>
      </div>
    </main>
  );
}
