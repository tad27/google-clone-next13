import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Search Result",
  description: "This is a search results page.",
};

export default function SearchResultsLayout({ children }) {
  return (
    <>
      <header>
        <Navbar />
        {/* Header Options */}
      </header>
      <section className="flex-grow flex">
        <div className="wrapper flex flex-col lg:flex-row w-full gap-8">
          {children}
        </div>
      </section>
      <Footer />
    </>
  );
}
