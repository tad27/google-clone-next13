import React from "react";

function Sidebar({ children }) {
  return <aside className="flex-grow p-2">{children}</aside>;
}

export default Sidebar;
