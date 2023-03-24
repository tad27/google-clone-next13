import React from "react";

function SearchResultsSection({ children }) {
  return (
    <main className="max-content-width w-full flex-grow p-2">{children}</main>
  );
}

export default SearchResultsSection;
