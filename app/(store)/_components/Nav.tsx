"use client"

import { useState } from "react";

const Nav = () => {
    const [activeItem, setActiveItem] = useState("Home")
    const handleItemClick = (itemName:string) => {
      setActiveItem(itemName);
    };
  return (
    <>
      <ul className="flex items-center gap-4 font-Kanit">
        <li
          className={`cursor-pointer ${
            activeItem === "Home"
              ? "border-b border-b-slate-700 hover:border-b-4"
              : ""
          }`}
          onClick={() => handleItemClick("Home")}
        >
          Home
        </li>
        <li
          className={`cursor-pointer ${
            activeItem === "Collections" ? "border-b-2 border-b-slate-700" : ""
          }`}
          onClick={() => handleItemClick("Collections")}
        >
          Collections
        </li>
        <li
          className={`cursor-pointer ${
            activeItem === "FAQ" ? "border-b-2 border-b-slate-700" : ""
          }`}
          onClick={() => handleItemClick("FAQ")}
        >
          FAQ
        </li>
      </ul>
    </>
  );
}

export default Nav