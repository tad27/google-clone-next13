import React from "react";

function Button({ children, ...props }) {
  return (
    <button
      className="bg-[#f8f9fa] text-gray-800 ring-1 hover:shadow transition-all ring-transparent hover:ring-gray-300 py-2 px-4 rounded whitespace-nowrap"
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
