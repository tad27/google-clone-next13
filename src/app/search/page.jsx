"use client";
import React from "react";
import { useSearchParams } from "next/navigation";

function SearchResults() {
  const searchParams = useSearchParams();
  const value = searchParams.get("q");
  console.log(value);
  return (
    <section className="flex-grow">
      <h1 className="text-bold text-blue-500">{value}</h1>
    </section>
  );
}

export default SearchResults;
