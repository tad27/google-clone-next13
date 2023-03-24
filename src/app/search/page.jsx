"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import SearchResultsSection from "@/components/SearchResultsSection";
import Sidebar from "@/components/Sidebar";

function SearchResults() {
  const searchParams = useSearchParams();
  const value = searchParams.get("q");
  return (
    <>
      <SearchResultsSection>
        <section className="flex-grow">
          Search Term: <strong>{value}</strong>
        </section>
      </SearchResultsSection>
      <Sidebar>Sidebar</Sidebar>
    </>
  );
}

export default SearchResults;
